-- ========================================================
-- TURA SECONDARY SCHOOL - MAHAFALI YA KIDATO CHA NNE 2026
-- Supabase Database Schema for Gallery Images
-- ========================================================

-- 1. Enable UUID Extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Drop existing table if migrating/resetting
-- DROP TABLE IF EXISTS gallery_images CASCADE;

-- 3. Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    image_url TEXT NOT NULL,
    cloudinary_public_id TEXT,
    title VARCHAR(255) NOT NULL,
    caption TEXT,
    category VARCHAR(50) NOT NULL CHECK (
        category IN (
            'O-LEVEL WASICHANA',
            'O-LEVEL WAVULANA',
            'A-LEVEL',
            'WAHITIMU',
            'WALIMU',
            'MAHAFALI',
            'SHUGHULI',
            'SHULE',
            'PAMOJA'
        )
    ),
    source VARCHAR(255) DEFAULT 'Tura Secondary School',
    source_url TEXT,
    attribution VARCHAR(255) DEFAULT 'Tura Secondary School Media',
    usage_permission TEXT DEFAULT 'Picha Rasmi ya Shule',
    is_placeholder BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 4. Create Indexes for High Performance Queries
CREATE INDEX IF NOT EXISTS idx_gallery_images_category ON gallery_images(category);
CREATE INDEX IF NOT EXISTS idx_gallery_images_created_at ON gallery_images(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_gallery_images_is_placeholder ON gallery_images(is_placeholder);

-- 5. Automatically update 'updated_at' column on row modification
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_timestamp ON gallery_images;
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON gallery_images
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- 6. Row Level Security (RLS) Policies
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Public can view all images
CREATE POLICY "Umma unaweza kutazama picha zote za galari"
ON gallery_images FOR SELECT
USING (true);

-- Authenticated admin can insert images
CREATE POLICY "Msimamizi pekee anaweza kupakia picha mpya"
ON gallery_images FOR INSERT
WITH CHECK (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- Authenticated admin can update image metadata
CREATE POLICY "Msimamizi pekee anaweza kuhariri taarifa za picha"
ON gallery_images FOR UPDATE
USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');

-- Authenticated admin can delete images
CREATE POLICY "Msimamizi pekee anaweza kufuta picha"
ON gallery_images FOR DELETE
USING (auth.role() = 'authenticated' OR auth.role() = 'service_role');
