import { GalleryImage, GalleryCategory } from '../types/gallery';
import { INITIAL_GALLERY_IMAGES } from '../data/initialImages';

const STORAGE_KEY = 'tura_secondary_gallery_images_v15';
const ADMIN_AUTH_KEY = 'tura_secondary_admin_auth_v1';

export function getStoredImages(): GalleryImage[] {
  if (typeof window === 'undefined') {
    return INITIAL_GALLERY_IMAGES;
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // First time initialization
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_GALLERY_IMAGES));
      return INITIAL_GALLERY_IMAGES;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return INITIAL_GALLERY_IMAGES;
  } catch (err) {
    console.error('Hitilafu katika kusoma picha zilizohifadhiwa:', err);
    return INITIAL_GALLERY_IMAGES;
  }
}

export function saveImages(images: GalleryImage[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    // Dispatch custom event to notify other components in same tab
    window.dispatchEvent(new Event('tura-gallery-updated'));
  } catch (err) {
    console.error('Hitilafu katika kuhifadhi picha:', err);
  }
}

export function addImage(newImage: Omit<GalleryImage, 'id' | 'created_at' | 'updated_at'>): GalleryImage {
  const current = getStoredImages();
  const timestamp = new Date().toISOString();
  const created: GalleryImage = {
    ...newImage,
    id: `img-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    created_at: timestamp,
    updated_at: timestamp,
  };

  const updated = [created, ...current];
  saveImages(updated);
  return created;
}

export function addMultipleImages(newImages: Array<Omit<GalleryImage, 'id' | 'created_at' | 'updated_at'>>): GalleryImage[] {
  const current = getStoredImages();
  const timestamp = new Date().toISOString();
  
  const createdList: GalleryImage[] = newImages.map((img, index) => ({
    ...img,
    id: `img-${Date.now()}-${index}-${Math.random().toString(36).substring(2, 9)}`,
    created_at: timestamp,
    updated_at: timestamp,
  }));

  const updated = [...createdList, ...current];
  saveImages(updated);
  return createdList;
}

export function updateImage(id: string, updates: Partial<GalleryImage>): GalleryImage | null {
  const current = getStoredImages();
  const index = current.findIndex(img => img.id === id);
  if (index === -1) return null;

  const updatedImage: GalleryImage = {
    ...current[index],
    ...updates,
    updated_at: new Date().toISOString(),
  };

  current[index] = updatedImage;
  saveImages(current);
  return updatedImage;
}

export function deleteImage(id: string): boolean {
  const current = getStoredImages();
  const filtered = current.filter(img => img.id !== id);
  if (filtered.length === current.length) return false;

  saveImages(filtered);
  return true;
}

export function resetToInitialImages(): GalleryImage[] {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_GALLERY_IMAGES));
    window.dispatchEvent(new Event('tura-gallery-updated'));
  }
  return INITIAL_GALLERY_IMAGES;
}

// Authentication helpers
export function checkAdminSession(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true' || localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setAdminSession(remember: boolean = false): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
    if (remember) {
      localStorage.setItem(ADMIN_AUTH_KEY, 'true');
    }
  } catch (e) {
    console.error('Failed to set admin session', e);
  }
}

export function clearAdminSession(): void {
  if (typeof window === 'undefined') return;
  try {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    localStorage.removeItem(ADMIN_AUTH_KEY);
  } catch (e) {
    console.error('Failed to clear admin session', e);
  }
}

// Image validation helpers (Prompt Section 27)
export const VALID_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export const MAX_IMAGE_SIZE_BYTES = 10 * 1024 * 1024; // 10MB

export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!VALID_IMAGE_TYPES.includes(file.type.toLowerCase())) {
    return {
      valid: false,
      error: `Aina ya faili "${file.name}" hairuhusiwi. Chagua JPG, JPEG, PNG, au WEBP pekee.`
    };
  }

  if (file.size > MAX_IMAGE_SIZE_BYTES) {
    const mb = (file.size / (1024 * 1024)).toFixed(1);
    return {
      valid: false,
      error: `Ukubwa wa faili "${file.name}" ni ${mb} MB ambao umezidi kiwango cha juu cha 10 MB.`
    };
  }

  return { valid: true };
}

// Helper to convert File to base64 DataURL
export function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Kushindwa kusoma picha'));
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}
