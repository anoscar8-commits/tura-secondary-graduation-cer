import { GalleryImage } from '../types/gallery';

// Import local generated graduation assets with:
// 1. Single-storey buildings only (majengo ya kawaida ya chini, hakuna gorofa).
// 2. Exact wall paint: Blue Bahari (sea-blue) kwa chini na Kaki (khaki) kwa juu.
// 3. Bwalo clearly inscribed with bold sign: TURA SECONDARY SCHOOL.
// 4. Form Four graduates strictly wearing school uniforms with green necktie, NO university gowns (majoho).
// 5. Clean student descriptions without clothing/uniform breakdowns under O-Level & A-Level pictures.
// 6. Inside Bwalo: Students, graduates and parents strictly seated on PLASTIC CHAIRS, NOT BENCHES (viti vya plastic sio mabenchi).
// 7. Teachers on the stage INSIDE the Bwalo with FABRIC DRAPES ONLY (mapambo ya vitambaa tu ukumbini, hakuna mapambo ya puto).
// 8. Graduates wearing school uniform AND green neckties INSIDE the Bwalo (sare za shule na necktai ya kijani ndani ya Bwalo).
import heroBwaloTieImg from '../assets/images/tura_wahitimu_tie_hero_1790938224235.jpg';
import campusMajengoImg from '../assets/images/tura_shule_majengo_kawaida_1790937723081.jpg';
import olevelMajengoImg from '../assets/images/tura_olevel_majengo_1790937459048.jpg';
import alevelMajengoImg from '../assets/images/tura_alevel_masweta_blue_1790939150904.jpg';
import walimuJukwaaBwaloImg from '../assets/images/tura_walimu_jukwaa_bwalo_1790938971017.jpg';
import wahitimuNdaniBwaloTieImg from '../assets/images/tura_wahitimu_ndani_bwalo_tie_1790939305446.jpg';
import wahitimuVitiBwaloCloseImg from '../assets/images/tura_wahitimu_viti_bwalo_close_1790939320494.jpg';
import wahitimuTieBwaloImg from '../assets/images/tura_wahitimu_tie_bwalo_1790938238189.jpg';
import madarasaMajengoImg from '../assets/images/tura_majengo_madarasa_1790937076226.jpg';
import bwaloJinaRasmiImg from '../assets/images/tura_bwalo_jina_rasmi_1790937873542.jpg';

export const INITIAL_GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'img-1',
    image_url: heroBwaloTieImg,
    cloudinary_public_id: 'tura_wahitimu_tie_hero_sign',
    title: 'Wahitimu wa Kidato cha Nne Mbele ya Bwalo la Tura Secondary School',
    caption: 'Wahitimu wa Kidato cha Nne katika sherehe za mahafali mbele ya Bwalo la shule linalosomeka TURA SECONDARY SCHOOL.',
    category: 'MAHAFALI',
    source: 'Tura Secondary School Archive (Bwalo la Tura)',
    attribution: 'Idara ya Habari na Matukio Tura',
    usage_permission: 'Kielelezo Rasmi cha Mahafali Bwaloni',
    is_placeholder: true,
    created_at: '2026-10-02T08:00:00Z',
    updated_at: '2026-10-02T08:00:00Z'
  },
  {
    id: 'img-2',
    image_url: campusMajengoImg,
    cloudinary_public_id: 'tura_school_majengo_chini_blue_kaki',
    title: 'Mazingira Safi ya Majengo ya Chini — Tura Secondary School',
    caption: 'Majengo ya kawaida ya chini (bila gorofa) yenye mandhari tulivu na ya kuvutia ya kijani, yakiwa yamepakwa rangi rasmi ya Blue Bahari kwa chini na Kaki kwa juu hapa Tura, Uyui, Tabora.',
    category: 'SHULE',
    source: 'Tura Secondary School Compound Record',
    attribution: 'Uongozi wa Shule ya Sekondari Tura',
    usage_permission: 'Mazingira ya Majengo ya Chini ya Shule',
    is_placeholder: true,
    created_at: '2026-10-01T10:00:00Z',
    updated_at: '2026-10-01T10:00:00Z'
  },
  {
    id: 'img-3',
    image_url: olevelMajengoImg,
    cloudinary_public_id: 'tura_olevel_majengo_chini',
    title: 'Wanafunzi wa O-Level Mbele ya Madarasa ya Chini',
    caption: 'Wanafunzi wa Kidato cha Kwanza hadi cha Nne (O-Level) katika mazingira tulivu ya masomo ya Shule ya Sekondari Tura.',
    category: 'O-LEVEL WASICHANA',
    source: 'Kumbukumbu ya Wanafunzi Tura Secondary',
    attribution: 'Uongozi wa Shule ya Sekondari Tura',
    usage_permission: 'Kielelezo cha Wanafunzi wa O-Level',
    is_placeholder: true,
    created_at: '2026-10-01T11:00:00Z',
    updated_at: '2026-10-01T11:00:00Z'
  },
  {
    id: 'img-4',
    image_url: wahitimuTieBwaloImg,
    cloudinary_public_id: 'tura_wahitimu_tie_bwalo_wavulana',
    title: 'Wanafunzi wa O-Level Mbele ya Bwalo la Shule',
    caption: 'Wanafunzi wa Kidato cha Nne katika viwanja vya shule mbele ya Bwalo la TURA SECONDARY SCHOOL, Uyui, Tabora.',
    category: 'O-LEVEL WAVULANA',
    source: 'Kumbukumbu ya Wanafunzi O-Level',
    attribution: 'Ushirika wa Wanafunzi Tura 2026',
    usage_permission: 'Kielelezo cha Wanafunzi Bwaloni',
    is_placeholder: true,
    created_at: '2026-10-02T08:30:00Z',
    updated_at: '2026-10-02T08:30:00Z'
  },
  {
    id: 'img-5',
    image_url: alevelMajengoImg,
    cloudinary_public_id: 'tura_alevel_masweta_blue',
    title: 'Wanafunzi wa Kidato cha Juu (A-Level)',
    caption: 'Wanafunzi wa Kidato cha Tano na Sita (A-Level) katika mazingira ya shule ya Sekondari Tura, Uyui, Tabora.',
    category: 'A-LEVEL',
    source: 'Idara ya Wanafunzi A-Level Tura',
    attribution: 'Uongozi wa Wasichana A-Level Tura',
    usage_permission: 'Kielelezo cha Wanafunzi wa A-Level',
    is_placeholder: true,
    created_at: '2026-10-02T09:00:00Z',
    updated_at: '2026-10-02T09:00:00Z'
  },
  {
    id: 'img-6',
    image_url: walimuJukwaaBwaloImg,
    cloudinary_public_id: 'tura_walimu_jukwaa_bwalo_vitambaa',
    title: 'Walimu Kwenye Jukwaa Ndani ya Bwalo (Mapambo ya Vitambaa Tu)',
    caption: 'Walimu na viongozi wa shule kwenye meza kuu ya jukwaa ndani ya Bwalo la TURA SECONDARY SCHOOL, likiwa limepambwa kwa vitambaa safi tu vya heshima (bila mapambo ya puto), kuta za Blue Bahari kwa chini na Kaki kwa juu.',
    category: 'WALIMU',
    source: 'Idara ya Elimu na Malezi Tura',
    attribution: 'Umoja wa Walimu Tura Secondary School',
    usage_permission: 'Kielelezo cha Jukwaa la Bwalo (Mapambo ya Vitambaa Tu)',
    is_placeholder: true,
    created_at: '2026-10-02T09:30:00Z',
    updated_at: '2026-10-02T09:30:00Z'
  },
  {
    id: 'img-7',
    image_url: wahitimuVitiBwaloCloseImg,
    cloudinary_public_id: 'tura_wahitimu_viti_bwalo_close_tie',
    title: 'Wahitimu Katika Sare za Shule na Necktai Ndani ya Bwalo',
    caption: 'Wahitimu wa Kidato cha Nne wakiwa wameketi kwenye viti vya plastic ndani ya Bwalo wakiwa wamevalia sare zao rasmi za shule na necktai ya kijani, bila majoho.',
    category: 'WAHITIMU',
    source: 'Kitabu cha Kumbukumbu za Mahafali 2026',
    attribution: 'Bodi ya Shule ya Sekondari Tura',
    usage_permission: 'Kumbukumbu ya Wahitimu Ndani ya Bwalo (Sare na Necktai)',
    is_placeholder: true,
    created_at: '2026-10-02T10:00:00Z',
    updated_at: '2026-10-02T10:00:00Z'
  },
  {
    id: 'img-8',
    image_url: bwaloJinaRasmiImg,
    cloudinary_public_id: 'tura_bwalo_jina_rasmi_signage',
    title: 'Jengo la Bwalo Linalosomeka: TURA SECONDARY SCHOOL',
    caption: 'Muonekano wa jengo la Bwalo la shule likiwa limeandikwa jina rasmi la TURA SECONDARY SCHOOL juu ya mlango mkuu, likiwa na kuta za Blue Bahari kwa chini na Kaki kwa juu (jengo la kawaida la chini bila gorofa).',
    category: 'SHULE',
    source: 'Idara ya Miundombinu Tura Secondary',
    attribution: 'Kamati ya Ujenzi na Mazingira',
    usage_permission: 'Kielelezo cha Bwalo la Tura Secondary School',
    is_placeholder: true,
    created_at: '2026-10-01T15:00:00Z',
    updated_at: '2026-10-01T15:00:00Z'
  },
  {
    id: 'img-9',
    image_url: wahitimuNdaniBwaloTieImg,
    cloudinary_public_id: 'tura_wahitimu_ndani_bwalo_tie_hadhira',
    title: 'Mahafali Ndani ya Bwalo: Wahitimu Katika Sare na Necktai',
    caption: 'Wahitimu katika sare za shule na necktai ya kijani wakiwa wameketi mstari wa mbele kwenye viti vya plastic, wazazi na wageni nyuma yao ndani ya Bwalo la TURA SECONDARY SCHOOL lenye mapambo ya vitambaa tu.',
    category: 'PAMOJA',
    source: 'Kamati ya Maandalizi ya Mahafali 2026',
    attribution: 'Jamii ya Shule ya Sekondari Tura',
    usage_permission: 'Picha ya Mahafali Ndani ya Bwalo (Sare na Necktai)',
    is_placeholder: true,
    created_at: '2026-10-02T12:00:00Z',
    updated_at: '2026-10-02T12:00:00Z'
  }
];
