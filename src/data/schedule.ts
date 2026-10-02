import { GraduationScheduleItem } from '../types/gallery';

/**
 * 📋 RATIBA YA MAHAFALI YA KIDATO CHA NNE – 2026
 * TURA SECONDARY SCHOOL
 * 
 * ILANI MUHIMU:
 * RATIBA YA MFANO — HARIRI KABLA YA KUTUMIA
 * Ratiba hii ni kiolezo (template) kinachoweza kuhaririwa na uongozi wa shule.
 */
export const SCHEDULE_DISCLAIMER = 'RATIBA YA MFANO — HARIRI KABLA YA KUTUMIA';

export const INITIAL_SCHEDULE: GraduationScheduleItem[] = [
  {
    id: 'sch-1',
    time: '07:30 — 08:30',
    activity: 'Kuwasili kwa Wageni na Wazazi',
    details: 'Wageni waalikwa, wazazi na walezi wanapokelewa uwanja wa shule na kusajiliwa.',
    leader: 'Kamati ya Mapokezi'
  },
  {
    id: 'sch-2',
    time: '08:30 — 09:15',
    activity: 'Kukagua Mazingira na Maonyesho',
    details: 'Wageni wanapata fursa ya kutembelea maonyesho ya masomo na miradi ya wanafunzi.',
    leader: 'Walimu wa Taaluma'
  },
  {
    id: 'sch-3',
    time: '09:15 — 09:45',
    activity: 'Kuingia Bwaloni kwa Wahitimu',
    details: 'Wahitimu wa Kidato cha Nne wanaingia ndani ya Bwalo la Tura Secondary School kwa maandamano maalum ya heshima.',
    leader: 'Wahitimu 2026'
  },
  {
    id: 'sch-4',
    time: '09:45 — 10:15',
    activity: 'Wimbo wa Taifa na Ufunguzi Rasmi',
    details: 'Kuimba Wimbo wa Taifa, Wimbo wa Tazama Ramani na Wimbo wa Shule ya Sekondari Tura.',
    leader: 'Kwaya ya Shule'
  },
  {
    id: 'sch-5',
    time: '10:15 — 11:15',
    activity: 'Risala ya Wahitimu & Hotuba Kuu',
    details: 'Wahitimu wanasoma risala yao, ikifuatiwa na hotuba ya Mkuu wa Shule na Mgeni Rasmi.',
    leader: 'Mwakilishi wa Wahitimu & Mgeni Rasmi'
  },
  {
    id: 'sch-6',
    time: '11:15 — 12:30',
    activity: 'Kukabidhi Vyeti na Zawadi',
    details: 'Kukabidhi vyeti vya kuhitimu Kidato cha Nne na tuzo za taaluma, nidhamu na michezo.',
    leader: 'Mgeni Rasmi & Uongozi wa Shule'
  },
  {
    id: 'sch-7',
    time: '12:30 — 13:15',
    activity: 'Picha Rasmi za Kumbukumbu',
    details: 'Upigaji wa picha za pamoja za wahitimu, walimu, wazazi na wageni waalikwa.',
    leader: 'Mpiga Picha Rasmi'
  },
  {
    id: 'sch-8',
    time: '13:15 — 15:30',
    activity: 'Chakula cha Mchana & Burudani',
    details: 'Wageni, wazazi na wahitimu wanajumuika ndani ya Bwalo la Tura Secondary School kwa chakula cha mchana na burudani za kitamaduni.',
    leader: 'Kamati ya Sherehe'
  }
];
