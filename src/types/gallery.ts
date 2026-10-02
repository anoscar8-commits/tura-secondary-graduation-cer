export type GalleryCategory =
  | 'ZOTE'
  | 'O-LEVEL WASICHANA'
  | 'O-LEVEL WAVULANA'
  | 'A-LEVEL'
  | 'WAHITIMU'
  | 'WALIMU'
  | 'MAHAFALI'
  | 'SHUGHULI'
  | 'SHULE'
  | 'PAMOJA';

export type UniformType =
  | 'O_LEVEL_WASICHANA'
  | 'O_LEVEL_WAVULANA'
  | 'A_LEVEL_WASICHANA';

export interface GalleryImage {
  id: string;
  image_url: string;
  cloudinary_public_id?: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, 'ZOTE'>;
  source: string;
  source_url?: string;
  attribution: string;
  usage_permission?: string;
  is_placeholder: boolean;
  created_at: string;
  updated_at: string;
}

export interface GraduationScheduleItem {
  id: string;
  time: string;
  activity: string;
  details: string;
  leader?: string;
}

export type EventStatus = 'UPCOMING' | 'TODAY' | 'COMPLETED';
