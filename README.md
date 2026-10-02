# TURA SECONDARY SCHOOL — MAHAFALI YA KIDATO CHA NNE 2026

**Mahali:** Tura, Wilaya ya Uyui, Mkoa wa Tabora, Tanzania  
**Tarehe ya Tukio:** 2 Oktoba 2026  
**Tukio:** Mahafali ya Kidato cha Nne (Form Four Graduation 2026)  

---

## 🎓 1. KUHUSU TOVUTI HII
Tovuti hii ni mfumo thabiti, wa kisasa na wenye utendaji kamili (production-ready) uliotengenezwa mahususi kwa ajili ya Mahafali ya Kidato cha Nne ya Shule ya Sekondari Tura ya tarehe 2 Oktoba 2026.

### Sifa Kuu za Tovuti:
1. **Ujumbe wa Kilele cha Tarehe (Event Date Logic):**
   - Kabla ya 2 Oktoba: `⏳ MAHAFALI YANAKARIBIA`
   - Tarehe 2 Oktoba: `🎓 LEO NI SIKU YA MAHAFALI!`
   - Baada ya 2 Oktoba: `✨ MAHAFALI YA KIDATO CHA NNE 2026 YAMEKAMILIKA`
2. **Mwongozo Rasmi wa Sare (Strict Uniform Rules):**
   - **O-Level (Kidato I–IV):**
     - Wasichana: Sketi ya Kijani + Shati Jeupe mikono mifupi
     - Wavulana: Suruali ya Kijani + Shati Jeupe mikono mifupi
   - **A-Level (Kidato V–VI):**
     - Wasichana Pekee: Sketi ya Blue-Bahari (Sea-Blue) + Shati Jeupe mikono mirefu
     - Hakuna uwakilishi wa wavulana A-Level
3. **Galari Kamilifu ya Picha (Interactive Photo Gallery):**
   - Vichujio 10: ZOTE, O-LEVEL WASICHANA, O-LEVEL WAVULANA, A-LEVEL, WAHITIMU, WALIMU, MAHAFALI, SHUGHULI, SHULE, PAMOJA
   - Utafutaji wa haraka (Live Search)
   - Onyesho la Skrini Kamili (Lightbox & Fullscreen na urambazaji wa vitufe vya kushoto/kulia)
   - Maelezo kamili ya mpiga picha, chanzo na ruhusa (Attribution & Source)
4. **Mfumo Halisi wa Kupakia Picha Mtandaoni (Real Online Photo Upload):**
   - Kupakia picha moja au nyingi (Multiple Upload)
   - Uthibitishaji wa faili (JPG, PNG, WEBP, kiwango cha juu 10MB)
   - Upau wa maendeleo (Progress Bar)
   - Kuhariri maelezo na kufuta picha kwa usalama (Delete confirmation)
5. **Kushiriki Mtandaoni (Social Sharing):**
   - WhatsApp, Facebook, na Nakili Kiunganishi (Copy Link) kwa anwani ya tovuti
6. **Ratiba na Maswali ya Mara kwa Mara (Schedule & FAQ):**
   - Ratiba ya kielelezo na majibu ya maswali ya mara kwa mara

---

## 🚀 2. HATUA ZA KUKIMBIZA MRADI NDANI YA COMPUTER (LOCAL SETUP)

### STEP 1: Sakinisha Node.js
Hakikisha una Node.js v18 au zaidi.

### STEP 2: Sakinisha Vitegemezi
```bash
npm install
```

### STEP 3: Anzisha Seva ya Maendeleo
```bash
npm run dev
```

### STEP 4: Fungua Kwenye Kivinjari
Fungua:
```text
http://localhost:3000
```

---

## 🗄️ 3. UTARATIBU WA SUPABASE (DATABASE SETUP)

1. Ingia kwenye [supabase.com](https://supabase.com) na ufungue mradi mpya (New Project).
2. Nenda kwenye **SQL Editor** na ufungue faili `supabase-schema.sql` lililopo kwenye mradi huu.
3. Tekeleza (Run) SQL script hiyo ili kutengeneza:
   - Jedwali la `gallery_images`
   - Sera za usalama (Row Level Security - RLS)
   - Fahirisi (Indexes) za kasi
4. Nenda kwenye **Project Settings -> API** na unakili:
   - `Project URL` -> `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public key` -> `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role secret key` -> `SUPABASE_SERVICE_ROLE_KEY`

---

## ☁️ 4. UTARATIBU WA CLOUDINARY (IMAGE STORAGE)

1. Jiunge na akaunti ya bure kwenye [cloudinary.com](https://cloudinary.com).
2. Kwenye Dashboard, tafuta:
   - `Cloud Name` -> `CLOUDINARY_CLOUD_NAME`
   - `API Key` -> `CLOUDINARY_API_KEY`
   - `API Secret` -> `CLOUDINARY_API_SECRET`
3. Hifadhi thamani hizi kwenye `.env.local` na kwenye Vercel Environment Variables.

---

## 🐙 5. KUPAKIA KWENYE GITHUB (PUBLISH TO GITHUB — HATUA 2 TU)

Mradi huu tayari umeanza na Git (`git init`), una tawi rasmi la `main`, faili bora la `.gitignore`, na GitHub Actions CI (`.github/workflows/ci.yml`).

Kupakia kwenye GitHub:
1. Fungua [github.com/new](https://github.com/new) na uunde hazina mpya (New Repository), mfano `tura-secondary-graduation`. *(Usiweke tiki kwenye "Initialize with README", acha iwe tupu).*
2. Kwenye terminal ya mradi huu, tekeleza amri hizi mbili tu:
   ```bash
   git remote add origin https://github.com/JINA_LAKO/tura-secondary-graduation.git
   git push -u origin main
   ```
*(Badilisha `JINA_LAKO` na jina la akaunti yako ya GitHub).*

---

## 🌐 6. KUPELEKA KWENYE VERCEL (VERCEL DEPLOYMENT — RAHISI KABISA)

Mradi huu umewekewa usanidi kamili wa faili la `vercel.json` hivyo unajenga (builds) moja kwa moja Vercel bila hitilafu yoyote:

### Njia ya 1: Moja kwa moja kupitia GitHub (Rahisi Zaidi)
1. Pakia mradi huu kwenye GitHub:
   ```bash
   git init
   git add .
   git commit -m "Tura Secondary School Graduation App 2026"
   git branch -M main
   git remote add origin https://github.com/JINA_LAKO/tura-graduation.git
   git push -u origin main
   ```
2. Ingia kwenye [vercel.com](https://vercel.com) na ubofye **Add New... -> Project**.
3. Chagua repository yako ya GitHub.
4. **Vercel itatambua kiotomatiki (Auto-detect):**
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Bofya kitufe cha buluu cha **Deploy**! Ndani ya sekunde 30 tovuti itakuwa hewani moja kwa moja na kiunganishi cha `https://*.vercel.app`.

### Njia ya 2: Kutumia Vercel CLI (Kwenye Terminal)
```bash
npm i -g vercel
vercel
# kisha kwa uzalishaji (production):
vercel --prod
```

---

## 🔐 6. TAARIFA ZA MSIMAMIZI (ADMIN CREDENTIALS)

Msimamizi anaweza kufungua jopo la kuingia kwa kubofya kitufe cha **Admin** kwenye sehemu ya juu kulia au chini ya tovuti.

- **Barua Pepe (Email):** `admin@tura.ac.tz`
- **Nenosiri la Awali (Default Password):** `Tura2026!`

*(Unaweza kubadilisha nenosiri hili wakati wowote kwenye vigezo vya mazingira).*

---

## 🇹🇿 7. HAKI MILIKI NA MAWASILIANO
- **Shule:** Tura Secondary School
- **Mahali:** Tura, Wilaya ya Uyui, Mkoa wa Tabora, Tanzania
- © 2026 Tura Secondary School. Haki zote zimehifadhiwa.
