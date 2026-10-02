export interface EventDateStatus {
  status: 'UPCOMING' | 'TODAY' | 'COMPLETED';
  message: string;
  badgeText: string;
  subMessage: string;
  daysRemaining: number;
}

export function getEventDateStatus(currentDateInput?: Date): EventDateStatus {
  const now = currentDateInput || new Date();
  
  // Target: 2 Oktoba 2026
  const targetYear = 2026;
  const targetMonth = 9; // 0-indexed: 9 = October
  const targetDay = 2;

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  // Create date objects stripped of time for exact day comparison
  const todayZero = new Date(currentYear, currentMonth, currentDay).getTime();
  const targetZero = new Date(targetYear, targetMonth, targetDay).getTime();

  const diffTime = targetZero - todayZero;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    return {
      status: 'UPCOMING',
      message: '⏳ MAHAFALI YANAKARIBIA',
      badgeText: `Zimebaki Siku ${diffDays}`,
      subMessage: `Sherehe za Mahafali zitafanyika tarehe 2 Oktoba 2026 uwanja wa Tura Secondary School, Uyui, Tabora.`,
      daysRemaining: diffDays
    };
  } else if (diffDays === 0) {
    return {
      status: 'TODAY',
      message: '🎓 LEO NI SIKU YA MAHAFALI!',
      badgeText: 'LEO NI SIKU KUU',
      subMessage: 'Karibuni nyote kusherehekea kilele cha mafanikio ya Kidato cha Nne 2026 katika Shule ya Sekondari Tura!',
      daysRemaining: 0
    };
  } else {
    return {
      status: 'COMPLETED',
      message: '✨ MAHAFALI YA KIDATO CHA NNE 2026 YAMEKAMILIKA',
      badgeText: 'Mahafali Yamekamilika',
      subMessage: 'Shukrani za dhati kwa wote walioshiriki kufanikisha mahafali ya tarehe 2 Oktoba 2026. Kumbukumbu na picha zinaendelea kuonekana hapa.',
      daysRemaining: diffDays
    };
  }
}

export function formatSwahiliDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    const months = [
      'Januari', 'Februari', 'Machi', 'Aprili', 'Mei', 'Juni',
      'Julai', 'Agosti', 'Septemba', 'Oktoba', 'Novemba', 'Desemba'
    ];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  } catch {
    return dateStr;
  }
}
