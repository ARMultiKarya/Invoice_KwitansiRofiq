/**
 * Kwitansi Generator Application Core Controller
 */

document.addEventListener('DOMContentLoaded', () => {
    // Default Mapping Yayasan to SPPG
    const defaultYayasanSppgMap = {
        "YAYASAN SAMUDRA EMAS NUSANTARA (YAMAS)": [
            "SPPG GANDUSARI, BANDONGAN",
            "SPPG SRUMBUNG, MRANGGEN 1",
            "SPPG SUMURARUM, GRABAG",
            "SPPG SUGIHMAS, GRABAG",
            "SPPG BATURONO, SALAM",
            "SPPG TRASAN, BANDONGAN",
            "SPPG TEMPAK, CANDIMULYO",
            "SPPG GONDOSULI, MUNTILAN",
            "SPPG JOGOMULYO, TEMPURAN"
        ],
        "YAYASAN SAMUDRA EMAS NUSANTARA (SENUT)": [
            "SPPG PODOSOKO, CANDIMULYO",
            "SPPG JOGOYASAN, NGABLAK",
            "SPPG KALISALAK, SALAMAN",
            "SPPG BANYUSARI, TEGALREJO",
            "SPPG BLEMBENG, TEGALREJO",
            "SPPG SRUMBUNG, SRUMBUNG",
            "SPPG ARGOMULYO, SALATIGA"
        ],
        "YAYASAN CIKAL PELITA BANGSA (CPB)": [
            "SPPG KAJORAN, KAJORAN",
            "SPPG PLOSOGEDE, NGLUWAR",
            "SPPG BAWANG, PAKIS",
            "SPPG GONDOWANGI, SAWANGAN",
            "SPPG CANDISARI, SECANG",
            "SPPG GIRIKULON, SECANG",
            "SPPG MRANGGEN 2, SRUMBUNG",
            "SPPG BANYUSARI, TEGALREJO",
            "SPPG SIDOAGUNG, TEMPURAN",
            "SPPG WINDUSARI, WINDUSARI"
        ],
        "YAYASAN EMPAT TUNAS SUPRAPTI (EMTUSU)": [
            "SPPG KETEP, SAWANGAN",
            "SPPG WINDUSARI, WINDUSARI",
            "SPPG SUROJOYO, CANDIMULYO",
            "SPPG SIDOGEDE, GRABAG",
            "SPPG DLIMAS, TEGALREJO",
            "SPPG ARGOMULYO, SALATIGA"
        ],
        "YAYASAN BENING ATI (BA)": [
            "SPPG PASURUHAN, MERTOYUDAN",
            "SPPG SIDOMULYO, SALAMAN"
        ],
        "YAYASAN LAKSANA HARAPAN BANGSA (LHB)": [
            "SPPG NGADIHARJO, BOROBUDUR",
            "SPPG NGASINAN, GRABAG",
            "SPPG NGAWEN, MUNTILAN"
        ],
        "YAYASAN SIROJUL ILMI KYAI ABDAN": [
            "SPPG DANUREJO, MERTOYUDAN"
        ]
    };

    // Default 7 CV Profiles Config
    const defaultCvProfiles = {
        "CV ANDALAN SOLUSI PRIMA": {
            title: "CV ANDALAN SOLUSI PRIMA",
            address: "Tirto RT 004/ RW 001, Grabag, Magelang, Jawa Tengah 56196",
            email: "andalansolusiprima@gmail.com",
            phone: "087719205704",
            ahu: "SK AHU - 0050599-AH.01.14 Tahun 2026",
            nib: "NIB: 2907260089917",
            accentColor: "#ff5500",
            darkColor: "#111827",
            logo: "assets/logo_asp.svg",
            bank: "BCA 1234567890 a.n CV ANDALAN SOLUSI PRIMA"
        },
        "CV ARTHA PENA SEJAHTERA": {
            title: "CV ARTHA PENA SEJAHTERA",
            address: "Dusun Paingan RT 003/ RW 002, Kleteran, Kec Grabag, Kab Magelang, Jawa Tengah",
            email: "arthapenasejahtera@gmail.com",
            phone: "081542559226",
            ahu: "SK AHU - 0061234-AH.01.14 Tahun 2026",
            nib: "NIB: 3815425592261",
            accentColor: "#d4af37",
            darkColor: "#0f1c3f",
            logo: "assets/logo_aps.svg",
            bank: "BCA 1234567890 a.n CV ARTHA PENA SEJAHTERA"
        },
        "CV GARUDA SAFETY MANDIRI": {
            title: "CV GARUDA SAFETY MANDIRI",
            address: "Susukan RT 005/ RW 002, Grabag, Kec Grabag, Kab Magelang, Jawa Tengah",
            email: "garudasafetymandiri@gmail.com",
            phone: "087840939397",
            ahu: "SK AHU - 0078901-AH.01.14 Tahun 2026",
            nib: "NIB: 3878409393971",
            accentColor: "#b91c1c",
            darkColor: "#1f2937",
            logo: "assets/logo_gsm.svg",
            bank: "BCA 1234567890 a.n CV GARUDA SAFETY MANDIRI",
            signerName: "Dwi Wahyu Affandi",
            signerTitle: "Direktur"
        },
        "CV GRAHA NUSA MEDIKA": {
            title: "CV GRAHA NUSA MEDIKA",
            address: "Ponggol 1 RT 007/ RW 003, Grabag, Kec Grabag, Kab Magelang, Jawa Tengah",
            email: "grahanusamedika@gmail.com",
            phone: "085866606808",
            ahu: "SK AHU : AHU-0050603-AH.01.14 Tahun 2026",
            nib: "NIB: 3858666068081",
            accentColor: "#0f2b5c",
            darkColor: "#0284c7",
            logo: "assets/logo_gnm.svg",
            bank: "BCA 1234567890 a.n CV GRAHA NUSA MEDIKA",
            signerName: "Restu Herlinda Piastisa",
            signerTitle: "Direktur"
        },
        "CV GRIYA KEMAS NUSANTARA": {
            title: "CV GRIYA KEMAS NUSANTARA",
            address: "Susukan RT 005/ RW 002, Grabag, Kec Grabag, Kab Magelang, Jawa Tengah",
            email: "griyakemasnusantara@gmail.com",
            phone: "081903487811",
            ahu: "SK AHU : AHU-0050604-AH.01.14 Tahun 2026",
            nib: "NIB: 3819034878111",
            accentColor: "#0284c7",
            darkColor: "#0e4da4",
            logo: "assets/logo_gkn.svg",
            bank: "BCA 1234567890 a.n CV GRIYA KEMAS NUSANTARA",
            signerName: "Ilham Dega Damawan",
            signerTitle: "Direktur"
        },
        "CV RAKSA GUNA UTAMA": {
            title: "CV RAKSA GUNA UTAMA",
            address: "Dusun Tanggulangin RT03/RW01, Desa Girikulon, Kec. Secang, Kab. Magelang Jawa Tengah",
            email: "raksagunautama@gmail.com",
            phone: "089518768553",
            ahu: "SK AHU : AHU-0050605-AH.01.14 Tahun 2026",
            nib: "NIB: 3895187685531",
            accentColor: "#0e3870",
            darkColor: "#16a34a",
            logo: "assets/logo_rgu.svg",
            bank: "BCA 1234567890 a.n CV RAKSA GUNA UTAMA",
            signerName: "Rizki Ayu Pudia Sari",
            signerTitle: "Direktur"
        },
        "CV UTAMA KARYA MANDIRI": {
            title: "CV UTAMA KARYA MANDIRI",
            address: "Jl. Pemuda No. 88, Magelang, Jawa Tengah",
            email: "utamakaryamandiri@gmail.com",
            phone: "081234567890",
            ahu: "SK AHU - 0012345-AH.01.14 Tahun 2026",
            nib: "NIB: 1234567890123",
            accentColor: "#0284c7",
            darkColor: "#0f172a",
            logo: "assets/logo.svg",
            bank: "Mandiri 9876543210 a.n CV UTAMA KARYA MANDIRI"
        },
        "CV BERKAH SEJAHTERA": {
            title: "CV BERKAH SEJAHTERA",
            address: "Jl. Raya Muntilan No. 45, Magelang, Jawa Tengah",
            email: "berkahsejahtera@gmail.com",
            phone: "081398765432",
            ahu: "SK AHU - 0098765-AH.01.14 Tahun 2026",
            nib: "NIB: 9876543210987",
            accentColor: "#059669",
            darkColor: "#064e3b",
            logo: "assets/logo.svg",
            bank: "BNI 5432167890 a.n CV BERKAH SEJAHTERA"
        },
        "CV BINTANG NUSANTARA": {
            title: "CV BINTANG NUSANTARA",
            address: "Jl. Gatot Subroto No. 12, Salatiga, Jawa Tengah",
            email: "bintangnusantara@gmail.com",
            phone: "085712345678",
            ahu: "SK AHU - 0045678-AH.01.14 Tahun 2026",
            nib: "NIB: 4567890123456",
            accentColor: "#1e3a8a",
            darkColor: "#0f172a",
            logo: "assets/logo.svg",
            bank: "BRI 1122334455 a.n CV BINTANG NUSANTARA"
        },
        "CV GRAHA JAYA MULTI": {
            title: "CV GRAHA JAYA MULTI",
            address: "Jl. Ahmad Yani No. 102, Wonosobo, Jawa Tengah",
            email: "grahajayamulti@gmail.com",
            phone: "082134567890",
            ahu: "SK AHU - 0077788-AH.01.14 Tahun 2026",
            nib: "NIB: 7778889990001",
            accentColor: "#334155",
            darkColor: "#0f172a",
            logo: "assets/logo.svg",
            bank: "BSI 7788990011 a.n CV GRAHA JAYA MULTI"
        },
        "CV MITRA BERSAMA": {
            title: "CV MITRA BERSAMA",
            address: "Jl. Pahlawan No. 25, Temanggung, Jawa Tengah",
            email: "mitrabersama@gmail.com",
            phone: "088812345678",
            ahu: "SK AHU - 0033344-AH.01.14 Tahun 2026",
            nib: "NIB: 3334445556667",
            accentColor: "#6366f1",
            darkColor: "#312e81",
            logo: "assets/logo.svg",
            bank: "BCA 5544332211 a.n CV MITRA BERSAMA"
        }
    };

    // Application State
    const state = {
        zoom: 1,
        docMode: 'kwitansi', // 'kwitansi' or 'invoice'
        kwTemplate: 'cv_asp', // 'cv_asp' or 'yayasan'
        autoTerbilang: true,
        signaturePad: null,
        history: JSON.parse(localStorage.getItem('kwitansi_history') || '[]'),
        yayasanLogos: JSON.parse(localStorage.getItem('yayasan_logos') || '{}'),
        yayasanCounters: JSON.parse(localStorage.getItem('yayasan_counters') || '{}'),
        yayasanSppgMap: JSON.parse(localStorage.getItem('yayasan_sppg_map') || 'null') || defaultYayasanSppgMap,
        cvProfiles: defaultCvProfiles,
        invItems: [
            { desc: 'Pembayaran Sewa Dapur Periode 28 September – 02 Oktober 2026', qty: 1, price: 30000000 }
        ],
        companyLogoUrl: 'assets/logo.svg',
        currentSignatureUrl: null
    };

    // Ensure all registered Yayasan exist in yayasanLogos
    Object.keys(state.yayasanSppgMap).forEach(yName => {
        if (!state.yayasanLogos[yName]) {
            state.yayasanLogos[yName] = 'assets/logo.svg';
        }
        if (state.yayasanCounters[yName] === undefined) {
            state.yayasanCounters[yName] = 36; // Default starting number
        }
    });

    // DOM Element References
    const elements = {
        // Mode Switcher Buttons
        btnModeKwitansi: document.getElementById('mode-btn-kwitansi'),
        btnModeInvoice: document.getElementById('mode-btn-invoice'),
        invoiceControlsGroup: document.getElementById('invoice-controls-group'),
        kwitansiPaper: document.getElementById('kwitansi-paper'),
        kwitansiPaperCv: document.getElementById('kwitansi-paper-cv'),
        kwitansiPaperAps: document.getElementById('kwitansi-paper-aps'),
        kwitansiPaperGsm: document.getElementById('kwitansi-paper-gsm'),
        kwitansiPaperGnm: document.getElementById('kwitansi-paper-gnm'),
        kwitansiPaperGkn: document.getElementById('kwitansi-paper-gkn'),
        kwitansiPaperRgu: document.getElementById('kwitansi-paper-rgu'),
        invoicePaper: document.getElementById('invoice-paper'),
        selectKwitansiTemplate: document.getElementById('select-kwitansi-template'),

        // Invoice Controls Elements
        selectPresetCv: document.getElementById('select-preset-cv'),
        inputInvNo: document.getElementById('input-inv-no'),
        inputInvDue: document.getElementById('input-inv-due'),
        inputInvPpn: document.getElementById('input-inv-ppn'),
        inputInvDiskon: document.getElementById('input-inv-diskon'),
        inputInvBank: document.getElementById('input-inv-bank'),
        btnAddInvItem: document.getElementById('btn-add-inv-item'),
        invFormItemsList: document.getElementById('inv-form-items-list'),

        // Form Inputs
        noKwitansi: document.getElementById('input-no'),
        autoNoBtn: document.getElementById('btn-auto-no'),
        kota: document.getElementById('input-kota'),
        tanggal: document.getElementById('input-tanggal'),
        selectSppg: document.getElementById('select-sppg'),
        sppgDatalist: document.getElementById('sppg-datalist'),
        telahDiterima: document.getElementById('input-terima'),
        jumlah: document.getElementById('input-jumlah'),
        terbilang: document.getElementById('input-terbilang'),
        autoTerbilangCheck: document.getElementById('check-auto-terbilang'),
        keterangan: document.getElementById('input-keterangan'),
        companyName: document.getElementById('input-company-name'),
        selectPresetYayasan: document.getElementById('select-preset-yayasan'),
        btnSaveYayasanLogo: document.getElementById('btn-save-yayasan-logo'),
        yayasanLogoList: document.getElementById('yayasan-logo-list'),
        yayasanCounterList: document.getElementById('yayasan-counter-list'),
        selectManageYayasan: document.getElementById('select-manage-yayasan'),
        inputNewSppg: document.getElementById('input-new-sppg'),
        btnAddSppg: document.getElementById('btn-add-sppg'),
        sppgManagerContainer: document.getElementById('sppg-manager-container'),
        signatureLabel: document.getElementById('input-sig-label'),
        logoUpload: document.getElementById('input-logo-upload'),
        sigUpload: document.getElementById('input-sig-upload'),
        
        // Kwitansi Preview Targets
        kwNo: document.getElementById('kw-no-val'),
        kwCity: document.getElementById('kw-city-val'),
        kwDate: document.getElementById('kw-date-val'),
        kwTerima: document.getElementById('kw-terima-val'),
        kwTerbilang: document.getElementById('kw-terbilang-val'),
        kwKeterangan: document.getElementById('kw-keterangan-val'),
        kwJumlah: document.getElementById('kw-jumlah-val'),
        kwCompanyHeader: document.getElementById('kw-company-header'),
        kwWatermarkText: document.getElementById('kw-watermark-text'),
        kwSigLabel: document.getElementById('kw-sig-label'),
        kwSigImg: document.getElementById('kw-sig-img'),
        kwLogoImg: document.getElementById('kw-logo-img'),
        kwWatermarkLogo: document.getElementById('kw-watermark-logo'),

        // UI & Containers
        paperContainer: document.getElementById('paper-container'),
        kwitansiPaper: document.getElementById('kwitansi-paper'),
        historyList: document.getElementById('history-list'),
        zoomVal: document.getElementById('zoom-val')
    };

    // Initialize Signature Pad
    state.signaturePad = new SignaturePadManager('sig-canvas', (dataUrl) => {
        state.currentSignatureUrl = dataUrl;
        updateSignaturePreview(dataUrl);
    });

    // Preset Default Data matching image
    function loadDefaultPreset() {
        const today = new Date();
        const formattedDate = formatDateIndonesian(today);
        
        elements.noKwitansi.value = "036/Ndh/X/26";
        elements.kota.value = "Magelang";
        elements.tanggal.value = "02 Oktober 2026";
        elements.telahDiterima.value = "SPPG NGADIHARJO, BOROBUDUR";
        elements.jumlah.value = "30000000";
        elements.keterangan.value = "Pembayaran Sewa Dapur Periode 28 September – 02 Oktober 2026";
        elements.companyName.value = "YAYASAN LAKSANA HARAPAN BANGSA (LHB)";
        elements.signatureLabel.value = "Penerima";

        syncFormToPreview();
    }

    // Helper to format date in Indonesian (e.g., 02 Oktober 2026)
    function formatDateIndonesian(dateObj) {
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = months[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        return `${day} ${month} ${year}`;
    }

    // Roman numeral converter for receipt numbering
    function getRomanMonth(monthIndex) {
        const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
        return romans[monthIndex] || "I";
    }

    // Extract Abbreviation Code for Receipt Numbering
    function getYayasanAbbr(name) {
        if (!name) return "Ndh";
        const match = name.match(/\(([^)]+)\)/);
        if (match && match[1]) {
            return match[1].trim();
        }
        const words = name.replace(/YAYASAN/gi, '').trim().split(/\s+/);
        if (words.length >= 2) {
            return words.map(w => w[0]).join('').toUpperCase();
        }
        return words[0] ? words[0].slice(0, 4).toUpperCase() : "Ndh";
    }

    // Get current sequential Kwitansi number for a specific Yayasan
    function getSequentialKwitansiNumber(yayasanName) {
        if (!yayasanName) yayasanName = elements.companyName.value || "YAYASAN LAKSANA HARAPAN BANGSA (LHB)";
        const clean = yayasanName.trim().toUpperCase();

        if (state.yayasanCounters[clean] === undefined) {
            state.yayasanCounters[clean] = 36; // Default starting sequence
        }

        const counter = state.yayasanCounters[clean];
        const padNo = String(counter).padStart(3, '0');
        const now = new Date();
        const monthRoman = getRomanMonth(now.getMonth());
        const yearShort = String(now.getFullYear()).slice(-2);
        const abbr = getYayasanAbbr(clean);

        return `${padNo}/${abbr}/${monthRoman}/${yearShort}`;
    }

    // Increment counter for a Yayasan and move to the next sequential number
    function incrementYayasanCounter(yayasanName) {
        if (!yayasanName) yayasanName = elements.companyName.value || "YAYASAN LAKSANA HARAPAN BANGSA (LHB)";
        const clean = yayasanName.trim().toUpperCase();

        const current = state.yayasanCounters[clean] !== undefined ? state.yayasanCounters[clean] : 36;
        state.yayasanCounters[clean] = current + 1;
        localStorage.setItem('yayasan_counters', JSON.stringify(state.yayasanCounters));

        // Auto update form input to the next sequential number
        const nextNo = getSequentialKwitansiNumber(clean);
        elements.noKwitansi.value = nextNo;
        syncFormToPreview();
        renderYayasanCounterList();
        showToast(`Nomor urut ${clean} otomatis berlanjut ke: ${nextNo}`);
    }

    // Auto Kwitansi Number Generator
    function generateKwitansiNumber() {
        const cName = elements.companyName.value || "YAYASAN LAKSANA HARAPAN BANGSA (LHB)";
        const newNo = getSequentialKwitansiNumber(cName);
        elements.noKwitansi.value = newNo;
        syncFormToPreview();
        showToast(`Nomor Kwitansi Urut: ${newNo}`);
    }

    // Synchronize Form Values to Preview Paper
    function syncFormToPreview() {
        const noVal = elements.noKwitansi.value || "---";
        const cityVal = elements.kota.value || "";
        const dateVal = elements.tanggal.value || "---";
        const terimaVal = elements.telahDiterima.value || "-";
        const rawAmount = elements.jumlah.value;
        const numAmount = parseFloat(rawAmount) || 0;
        const formattedRupiah = formatRupiah(numAmount);
        const ketVal = elements.keterangan.value || "-";
        const sigLabelVal = elements.signatureLabel.value || "Penerima";

        let terbilangText = elements.terbilang.value || "-";
        if (state.autoTerbilang) {
            terbilangText = convertToTerbilang(numAmount);
            elements.terbilang.value = terbilangText;
        }

        // --- 1. Sync Paper 1: Yayasan Paper ---
        if (elements.kwNo) elements.kwNo.textContent = noVal;
        if (elements.kwCity) elements.kwCity.textContent = cityVal ? `${cityVal},` : "";
        if (elements.kwDate) elements.kwDate.textContent = dateVal;
        if (elements.kwTerima) elements.kwTerima.textContent = terimaVal;
        if (elements.kwJumlah) elements.kwJumlah.textContent = formattedRupiah;
        if (elements.kwTerbilang) elements.kwTerbilang.textContent = terbilangText;
        if (elements.kwKeterangan) elements.kwKeterangan.textContent = ketVal;
        if (elements.kwSigLabel) elements.kwSigLabel.textContent = sigLabelVal;

        if (elements.selectSppg && elements.selectSppg.value !== terimaVal) {
            elements.selectSppg.value = terimaVal;
        }

        // --- 2. Sync Paper 2: CV ANDALAN SOLUSI PRIMA Paper ---
        const cvNoEl = document.getElementById('kw-cv-no-val');
        const cvDateEl = document.getElementById('kw-cv-date-val');
        const cvTerimaEl = document.getElementById('kw-cv-terima-val');
        const cvTerbilangEl = document.getElementById('kw-cv-terbilang-val');
        const cvKetEl = document.getElementById('kw-cv-keterangan-val');
        const cvJumlahEl = document.getElementById('kw-cv-jumlah-val');
        const cvCityEl = document.getElementById('kw-cv-city-val');
        const cvSigDateEl = document.getElementById('kw-cv-sig-date-val');
        const cvSigLabelEl = document.getElementById('kw-cv-sig-label-val');

        if (cvNoEl) cvNoEl.textContent = noVal;
        if (cvDateEl) cvDateEl.textContent = dateVal;
        if (cvTerimaEl) cvTerimaEl.textContent = terimaVal;
        if (cvTerbilangEl) cvTerbilangEl.textContent = terbilangText;
        if (cvKetEl) cvKetEl.textContent = ketVal;
        if (cvJumlahEl) cvJumlahEl.textContent = formattedRupiah;
        if (cvCityEl) cvCityEl.textContent = cityVal || "Magelang";
        if (cvSigDateEl) cvSigDateEl.textContent = dateVal;
        if (cvSigLabelEl) cvSigLabelEl.textContent = sigLabelVal;

        // --- 3. Sync Paper 3: CV ARTHA PENA SEJAHTERA Paper ---
        const apsNoEl = document.getElementById('kw-aps-no-val');
        const apsDateEl = document.getElementById('kw-aps-date-val');
        const apsTerimaEl = document.getElementById('kw-aps-terima-val');
        const apsTerbilangEl = document.getElementById('kw-aps-terbilang-val');
        const apsKetEl = document.getElementById('kw-aps-keterangan-val');
        const apsJumlahEl = document.getElementById('kw-aps-jumlah-val');
        const apsCityEl = document.getElementById('kw-aps-city-val');
        const apsSigDateEl = document.getElementById('kw-aps-sig-date-val');
        const apsSigLabelEl = document.getElementById('kw-aps-sig-label-val');

        if (apsNoEl) apsNoEl.textContent = noVal;
        if (apsDateEl) apsDateEl.textContent = dateVal;
        if (apsTerimaEl) apsTerimaEl.textContent = terimaVal;
        if (apsTerbilangEl) apsTerbilangEl.textContent = terbilangText;
        if (apsKetEl) apsKetEl.textContent = ketVal;
        if (apsJumlahEl) apsJumlahEl.textContent = formattedRupiah;
        if (apsCityEl) apsCityEl.textContent = cityVal || "Magelang";
        if (apsSigDateEl) apsSigDateEl.textContent = dateVal;
        if (apsSigLabelEl) apsSigLabelEl.textContent = sigLabelVal;

        // --- 4. Sync Paper 4: CV GARUDA SAFETY MANDIRI Paper ---
        const gsmNoEl = document.getElementById('kw-gsm-no-val');
        const gsmDateEl = document.getElementById('kw-gsm-date-val');
        const gsmTerimaEl = document.getElementById('kw-gsm-terima-val');
        const gsmTerbilangEl = document.getElementById('kw-gsm-terbilang-val');
        const gsmKetEl = document.getElementById('kw-gsm-keterangan-val');
        const gsmJumlahEl = document.getElementById('kw-gsm-jumlah-val');
        const gsmCityEl = document.getElementById('kw-gsm-city-val');
        const gsmSigDateEl = document.getElementById('kw-gsm-sig-date-val');
        const gsmSigLabelEl = document.getElementById('kw-gsm-sig-label-val');

        if (gsmNoEl) gsmNoEl.textContent = noVal;
        if (gsmDateEl) gsmDateEl.textContent = dateVal;
        if (gsmTerimaEl) gsmTerimaEl.textContent = terimaVal;
        if (gsmTerbilangEl) gsmTerbilangEl.textContent = terbilangText;
        if (gsmKetEl) gsmKetEl.textContent = ketVal;
        if (gsmJumlahEl) gsmJumlahEl.textContent = formattedRupiah;
        if (gsmCityEl) gsmCityEl.textContent = cityVal || "Magelang";
        if (gsmSigDateEl) gsmSigDateEl.textContent = dateVal;
        if (gsmSigLabelEl) gsmSigLabelEl.textContent = sigLabelVal;

        // --- 5. Sync Paper 5: CV GRAHA NUSA MEDIKA Paper ---
        const gnmNoEl = document.getElementById('kw-gnm-no-val');
        const gnmDateEl = document.getElementById('kw-gnm-date-val');
        const gnmTerimaEl = document.getElementById('kw-gnm-terima-val');
        const gnmTerbilangEl = document.getElementById('kw-gnm-terbilang-val');
        const gnmKetEl = document.getElementById('kw-gnm-keterangan-val');
        const gnmJumlahEl = document.getElementById('kw-gnm-jumlah-val');
        const gnmCityEl = document.getElementById('kw-gnm-city-val');
        const gnmSigDateEl = document.getElementById('kw-gnm-sig-date-val');
        const gnmSigLabelEl = document.getElementById('kw-gnm-sig-label-val');

        if (gnmNoEl) gnmNoEl.textContent = noVal;
        if (gnmDateEl) gnmDateEl.textContent = dateVal;
        if (gnmTerimaEl) gnmTerimaEl.textContent = terimaVal;
        if (gnmTerbilangEl) gnmTerbilangEl.textContent = terbilangText;
        if (gnmKetEl) gnmKetEl.textContent = ketVal;
        if (gnmJumlahEl) gnmJumlahEl.textContent = formattedRupiah;
        if (gnmCityEl) gnmCityEl.textContent = cityVal || "Magelang";
        if (gnmSigDateEl) gnmSigDateEl.textContent = dateVal;
        if (gnmSigLabelEl) gnmSigLabelEl.textContent = sigLabelVal;

        // --- 6. Sync Paper 6: CV GRIYA KEMAS NUSANTARA Paper ---
        const gknNoEl = document.getElementById('kw-gkn-no-val');
        const gknDateEl = document.getElementById('kw-gkn-date-val');
        const gknTerimaEl = document.getElementById('kw-gkn-terima-val');
        const gknTerbilangEl = document.getElementById('kw-gkn-terbilang-val');
        const gknKetEl = document.getElementById('kw-gkn-keterangan-val');
        const gknJumlahEl = document.getElementById('kw-gkn-jumlah-val');
        const gknCityEl = document.getElementById('kw-gkn-city-val');
        const gknSigDateEl = document.getElementById('kw-gkn-sig-date-val');

        if (gknNoEl) gknNoEl.textContent = noVal;
        if (gknDateEl) gknDateEl.textContent = dateVal;
        if (gknTerimaEl) gknTerimaEl.textContent = terimaVal;
        if (gknTerbilangEl) gknTerbilangEl.textContent = terbilangText;
        if (gknKetEl) gknKetEl.textContent = ketVal;
        if (gknJumlahEl) gknJumlahEl.textContent = formattedRupiah;
        if (gknCityEl) gknCityEl.textContent = cityVal || "Magelang";
        if (gknSigDateEl) gknSigDateEl.textContent = dateVal;

        // --- 7. Sync Paper 7: CV RAKSA GUNA UTAMA Paper ---
        const rguNoEl = document.getElementById('kw-rgu-no-val');
        const rguDateEl = document.getElementById('kw-rgu-date-val');
        const rguTerimaEl = document.getElementById('kw-rgu-terima-val');
        const rguTerbilangEl = document.getElementById('kw-rgu-terbilang-val');
        const rguKetEl = document.getElementById('kw-rgu-keterangan-val');
        const rguJumlahEl = document.getElementById('kw-rgu-jumlah-val');
        const rguCityEl = document.getElementById('kw-rgu-city-val');
        const rguSigDateEl = document.getElementById('kw-rgu-sig-date-val');

        if (rguNoEl) rguNoEl.textContent = noVal;
        if (rguDateEl) rguDateEl.textContent = dateVal;
        if (rguTerimaEl) rguTerimaEl.textContent = terimaVal;
        if (rguTerbilangEl) rguTerbilangEl.textContent = terbilangText;
        if (rguKetEl) rguKetEl.textContent = ketVal;
        if (rguJumlahEl) rguJumlahEl.textContent = formattedRupiah;
        if (rguCityEl) rguCityEl.textContent = cityVal || "Magelang";
        if (rguSigDateEl) rguSigDateEl.textContent = dateVal;

        // Auto resolve Yayasan from selected SPPG
        const resolvedYayasan = findYayasanBySppg(terimaVal);
        if (resolvedYayasan && elements.companyName.value !== resolvedYayasan) {
            elements.companyName.value = resolvedYayasan;
            if (elements.selectPresetYayasan) elements.selectPresetYayasan.value = resolvedYayasan;
            // Update sequential number automatically for new Yayasan
            const nextNo = getSequentialKwitansiNumber(resolvedYayasan);
            elements.noKwitansi.value = nextNo;
            if (elements.kwNo) elements.kwNo.textContent = nextNo;
            if (cvNoEl) cvNoEl.textContent = nextNo;
        }

        // Company Name & Signature Title for Yayasan Paper
        const cName = elements.companyName.value || "LAKSANA HARAPAN BANGSA";
        if (elements.kwCompanyHeader) elements.kwCompanyHeader.innerHTML = cName.replace(/\n/g, '<br>');
        if (elements.kwWatermarkText) elements.kwWatermarkText.innerHTML = cName.replace(/\n/g, '<br>');

        // Auto Load Logo for this Yayasan if saved
        autoLoadYayasanLogo(cName);
    }

    // Render Yayasan Counter List UI in Settings
    function renderYayasanCounterList() {
        const container = elements.yayasanCounterList;
        if (!container) return;

        const keys = Object.keys(state.yayasanSppgMap);
        container.innerHTML = keys.map(name => {
            const clean = name.trim().toUpperCase();
            const counter = state.yayasanCounters[clean] !== undefined ? state.yayasanCounters[clean] : 36;
            return `
                <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(15,23,42,0.6); padding:0.4rem 0.6rem; border-radius:6px; font-size:0.8rem; border:1px solid var(--border-color);">
                    <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:65%;">
                        <strong style="color:var(--accent-blue);">${escapeHtml(name)}</strong>
                    </div>
                    <div style="display:flex; align-items:center; gap:0.4rem;">
                        <span style="font-size:0.75rem; color:var(--text-muted);">Urut:</span>
                        <input type="number" class="input-counter-val" data-name="${escapeHtml(clean)}" value="${counter}" min="1" style="width:70px; padding:0.25rem 0.4rem; font-size:0.8rem; text-align:center;">
                    </div>
                </div>
            `;
        }).join('');

        container.querySelectorAll('.input-counter-val').forEach(input => {
            input.addEventListener('change', (e) => {
                const yName = e.target.dataset.name;
                const newVal = Math.max(1, parseInt(e.target.value) || 1);
                state.yayasanCounters[yName] = newVal;
                localStorage.setItem('yayasan_counters', JSON.stringify(state.yayasanCounters));
                if (elements.companyName.value.trim().toUpperCase() === yName) {
                    elements.noKwitansi.value = getSequentialKwitansiNumber(yName);
                    syncFormToPreview();
                }
                showToast(`Nomor urut ${yName} diubah ke ${newVal}`);
            });
        });
    }

    // Find matching Yayasan by SPPG name
    function findYayasanBySppg(sppgName) {
        if (!sppgName) return null;
        const clean = sppgName.trim().toLowerCase();
        for (const [yayasan, sppgList] of Object.entries(state.yayasanSppgMap)) {
            if (sppgList.some(s => s.trim().toLowerCase() === clean)) {
                return yayasan;
            }
        }
        return null;
    }

    // Render SPPG Dropdown Options grouped by Yayasan
    function renderSppgDropdownOptions() {
        if (!elements.selectSppg) return;

        let htmlSelect = `<option value="">-- Pilih dari Daftar SPPG (${countTotalSppg()} Lokasi) --</option>`;
        let htmlDatalist = '';

        for (const [yayasan, sppgList] of Object.entries(state.yayasanSppgMap)) {
            if (sppgList.length > 0) {
                htmlSelect += `<optgroup label="${escapeHtml(yayasan)}">`;
                sppgList.forEach(sppg => {
                    htmlSelect += `<option value="${escapeHtml(sppg)}">${escapeHtml(sppg)}</option>`;
                    htmlDatalist += `<option value="${escapeHtml(sppg)}"></option>`;
                });
                htmlSelect += `</optgroup>`;
            }
        }

        elements.selectSppg.innerHTML = htmlSelect;
        if (elements.sppgDatalist) {
            elements.sppgDatalist.innerHTML = htmlDatalist;
        }
    }

    function countTotalSppg() {
        let count = 0;
        for (const list of Object.values(state.yayasanSppgMap)) {
            count += list.length;
        }
        return count;
    }

    // Render SPPG Manager in Settings tab
    function renderManageYayasanSppg() {
        if (!elements.selectManageYayasan || !elements.sppgManagerContainer) return;

        // Render Yayasan list in manager dropdown
        const yayasanKeys = Object.keys(state.yayasanSppgMap);
        elements.selectManageYayasan.innerHTML = yayasanKeys.map(k => 
            `<option value="${escapeHtml(k)}">${escapeHtml(k)}</option>`
        ).join('');

        renderSppgManagerList();
    }

    function renderSppgManagerList() {
        if (!elements.selectManageYayasan || !elements.sppgManagerContainer) return;
        const selectedYayasan = elements.selectManageYayasan.value;
        const list = state.yayasanSppgMap[selectedYayasan] || [];

        if (list.length === 0) {
            elements.sppgManagerContainer.innerHTML = `<span style="font-size:0.75rem; color:var(--text-muted);">Belum ada SPPG untuk Yayasan ini.</span>`;
            return;
        }

        elements.sppgManagerContainer.innerHTML = list.map((sppg, idx) => `
            <div style="display:flex; justify-content:space-between; align-items:center; background:rgba(15,23,42,0.6); padding:0.4rem 0.6rem; border-radius:6px; font-size:0.8rem; border:1px solid var(--border-color);">
                <span>${idx + 1}. ${escapeHtml(sppg)}</span>
                <button class="btn btn-danger btn-sm btn-delete-sppg" data-yayasan="${escapeHtml(selectedYayasan)}" data-sppg="${escapeHtml(sppg)}" style="padding:0.15rem 0.4rem; font-size:0.7rem;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        elements.sppgManagerContainer.querySelectorAll('.btn-delete-sppg').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const yName = e.currentTarget.dataset.yayasan;
                const sName = e.currentTarget.dataset.sppg;
                deleteSppgFromYayasan(yName, sName);
            });
        });
    }

    function addNewSppgToYayasan() {
        const yayasan = elements.selectManageYayasan ? elements.selectManageYayasan.value : null;
        const newSppg = elements.inputNewSppg ? elements.inputNewSppg.value.trim().toUpperCase() : '';

        if (!yayasan) {
            showToast('Pilih Yayasan terlebih dahulu');
            return;
        }
        if (!newSppg) {
            showToast('Ketik nama SPPG baru terlebih dahulu');
            return;
        }

        if (!state.yayasanSppgMap[yayasan]) {
            state.yayasanSppgMap[yayasan] = [];
        }

        if (state.yayasanSppgMap[yayasan].includes(newSppg)) {
            showToast('SPPG ini sudah terdaftar');
            return;
        }

        state.yayasanSppgMap[yayasan].push(newSppg);
        localStorage.setItem('yayasan_sppg_map', JSON.stringify(state.yayasanSppgMap));
        elements.inputNewSppg.value = '';
        renderSppgDropdownOptions();
        renderSppgManagerList();
        showToast(`SPPG '${newSppg}' ditambahkan ke ${yayasan}!`);
    }

    function deleteSppgFromYayasan(yayasan, sppg) {
        if (!state.yayasanSppgMap[yayasan]) return;
        state.yayasanSppgMap[yayasan] = state.yayasanSppgMap[yayasan].filter(s => s !== sppg);
        localStorage.setItem('yayasan_sppg_map', JSON.stringify(state.yayasanSppgMap));
        renderSppgDropdownOptions();
        renderSppgManagerList();
        showToast(`SPPG dihapus dari ${yayasan}`);
    }

    // Automatically check and load logo for selected Yayasan
    function autoLoadYayasanLogo(name) {
        if (!name) return;
        const cleanName = name.trim().toUpperCase();
        if (state.yayasanLogos[cleanName]) {
            const logoUrl = state.yayasanLogos[cleanName];
            elements.kwLogoImg.src = logoUrl;
            elements.kwWatermarkLogo.src = logoUrl;
            state.companyLogoUrl = logoUrl;
        }
    }

    // Save Logo for current Yayasan Name
    function saveCurrentYayasanLogo() {
        const name = (elements.companyName.value || '').trim().toUpperCase();
        if (!name) {
            showToast('Isi nama Yayasan/Instansi terlebih dahulu');
            return;
        }

        state.yayasanLogos[name] = state.companyLogoUrl;
        localStorage.setItem('yayasan_logos', JSON.stringify(state.yayasanLogos));
        renderYayasanPresetOptions();
        renderYayasanLogoList();
        showToast(`Logo untuk ${name} berhasil disimpan!`);
    }

    // Render Preset Dropdown Options
    function renderYayasanPresetOptions() {
        if (!elements.selectPresetYayasan) return;
        const allKeys = Array.from(new Set([
            ...Object.keys(state.yayasanSppgMap),
            ...Object.keys(state.yayasanLogos)
        ]));
        elements.selectPresetYayasan.innerHTML = allKeys.map(k => 
            `<option value="${escapeHtml(k)}">${escapeHtml(k)}</option>`
        ).join('');
    }

    // Render Saved Yayasan Logo List UI
    function renderYayasanLogoList() {
        const listContainer = elements.yayasanLogoList;
        if (!listContainer) return;

        const keys = Object.keys(state.yayasanLogos);
        if (keys.length === 0) {
            listContainer.innerHTML = `<span style="font-size:0.75rem; color:var(--text-muted);">Belum ada logo tersimpan.</span>`;
            return;
        }

        listContainer.innerHTML = keys.map(name => {
            const logoUrl = state.yayasanLogos[name];
            return `
                <div class="yayasan-logo-card">
                    <div class="yayasan-card-left">
                        <img src="${logoUrl}" class="yayasan-card-thumb" alt="${escapeHtml(name)}">
                        <span class="yayasan-card-name" title="${escapeHtml(name)}">${escapeHtml(name)}</span>
                    </div>
                    <div style="display:flex; gap:0.3rem;">
                        <button class="btn btn-outline btn-sm btn-use-yayasan" data-name="${escapeHtml(name)}">Pakai</button>
                        ${name !== 'LAKSANA HARAPAN BANGSA' ? `<button class="btn btn-danger btn-sm btn-del-yayasan" data-name="${escapeHtml(name)}"><i class="fas fa-trash"></i></button>` : ''}
                    </div>
                </div>
            `;
        }).join('');

        // Attach click handlers
        listContainer.querySelectorAll('.btn-use-yayasan').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const yName = e.currentTarget.dataset.name;
                elements.companyName.value = yName;
                if (elements.selectPresetYayasan) elements.selectPresetYayasan.value = yName;
                
                const sppgList = state.yayasanSppgMap[yName] || [];
                if (sppgList.length > 0) {
                    elements.telahDiterima.value = sppgList[0];
                }

                elements.noKwitansi.value = getSequentialKwitansiNumber(yName);
                autoLoadYayasanLogo(yName);
                syncFormToPreview();
                showToast(`Memuat Yayasan: ${yName}`);
            });
        });

        listContainer.querySelectorAll('.btn-del-yayasan').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const yName = e.currentTarget.dataset.name;
                delete state.yayasanLogos[yName];
                localStorage.setItem('yayasan_logos', JSON.stringify(state.yayasanLogos));
                renderYayasanPresetOptions();
                renderYayasanLogoList();
                showToast(`Logo ${yName} dihapus`);
            });
        });
    }

    // Switch Kwitansi Template Model (CV ASP vs CV APS vs CV GSM vs CV GNM vs CV GKN vs CV RGU vs Yayasan LHB)
    function setKwitansiTemplate(tpl) {
        state.kwTemplate = tpl;
        if (state.docMode === 'kwitansi') {
            if (elements.kwitansiPaper) elements.kwitansiPaper.style.display = (tpl === 'yayasan') ? 'flex' : 'none';
            if (elements.kwitansiPaperCv) elements.kwitansiPaperCv.style.display = (tpl === 'cv_asp') ? 'flex' : 'none';
            if (elements.kwitansiPaperAps) elements.kwitansiPaperAps.style.display = (tpl === 'cv_aps') ? 'flex' : 'none';
            if (elements.kwitansiPaperGsm) elements.kwitansiPaperGsm.style.display = (tpl === 'cv_gsm') ? 'flex' : 'none';
            if (elements.kwitansiPaperGnm) elements.kwitansiPaperGnm.style.display = (tpl === 'cv_gnm') ? 'flex' : 'none';
            if (elements.kwitansiPaperGkn) elements.kwitansiPaperGkn.style.display = (tpl === 'cv_gkn') ? 'flex' : 'none';
            if (elements.kwitansiPaperRgu) elements.kwitansiPaperRgu.style.display = (tpl === 'cv_rgu') ? 'flex' : 'none';
        }
    }

    // Switch Document Mode (Kwitansi <-> Invoice)
    function setDocMode(mode) {
        state.docMode = mode;
        if (mode === 'kwitansi') {
            elements.btnModeKwitansi.classList.add('active');
            elements.btnModeInvoice.classList.remove('active');
            setKwitansiTemplate(state.kwTemplate);
            elements.invoicePaper.style.display = 'none';
            if (elements.invoiceControlsGroup) elements.invoiceControlsGroup.style.display = 'none';
            showToast('Mode Kwitansi Aktif');
        } else {
            elements.btnModeKwitansi.classList.remove('active');
            elements.btnModeInvoice.classList.add('active');
            if (elements.kwitansiPaper) elements.kwitansiPaper.style.display = 'none';
            if (elements.kwitansiPaperCv) elements.kwitansiPaperCv.style.display = 'none';
            if (elements.kwitansiPaperAps) elements.kwitansiPaperAps.style.display = 'none';
            if (elements.kwitansiPaperGsm) elements.kwitansiPaperGsm.style.display = 'none';
            if (elements.kwitansiPaperGnm) elements.kwitansiPaperGnm.style.display = 'none';
            if (elements.kwitansiPaperGkn) elements.kwitansiPaperGkn.style.display = 'none';
            if (elements.kwitansiPaperRgu) elements.kwitansiPaperRgu.style.display = 'none';
            elements.invoicePaper.style.display = 'flex';
            if (elements.invoiceControlsGroup) elements.invoiceControlsGroup.style.display = 'flex';
            
            // Auto apply default CV (CV ANDALAN SOLUSI PRIMA)
            const activeCv = elements.selectPresetCv ? elements.selectPresetCv.value : "CV ANDALAN SOLUSI PRIMA";
            applyCvProfile(activeCv);
            renderInvFormItems();
            syncInvoiceToPreview();
            showToast('Mode Invoice CV Aktif');
        }
    }

    // Apply CV Profile Theme & Details
    function applyCvProfile(cvName) {
        const profile = state.cvProfiles[cvName] || state.cvProfiles["CV ANDALAN SOLUSI PRIMA"];
        
        // Update Letterhead Elements
        document.getElementById('inv-company-title').textContent = profile.title;
        document.getElementById('inv-company-address').textContent = profile.address;
        document.getElementById('inv-email-val').textContent = profile.email;
        document.getElementById('inv-phone-val').textContent = profile.phone;
        document.getElementById('inv-ahu-val').textContent = profile.ahu;
        document.getElementById('inv-nib-val').textContent = profile.nib;
        document.getElementById('inv-cv-footer-name').textContent = profile.title;

        // Logos
        document.getElementById('inv-logo-img').src = profile.logo;
        document.getElementById('inv-watermark-logo').src = profile.logo;

        // Accent Colors
        document.getElementById('inv-line-left').style.backgroundColor = profile.accentColor;
        document.getElementById('inv-line-right').style.backgroundColor = profile.darkColor;
        document.getElementById('inv-footer-block').style.backgroundColor = profile.accentColor;
        document.getElementById('inv-grandtotal-val').style.color = profile.accentColor;

        // APS Theme Specific Toggles
        const isAps = (cvName === "CV ARTHA PENA SEJAHTERA");
        const isGsm = (cvName === "CV GARUDA SAFETY MANDIRI");
        const isGnm = (cvName === "CV GRAHA NUSA MEDIKA");
        const isGkn = (cvName === "CV GRIYA KEMAS NUSANTARA");
        const isRgu = (cvName === "CV RAKSA GUNA UTAMA");

        const paperEl = document.getElementById('invoice-paper');
        const topCornerEl = document.getElementById('inv-top-corner-accent');
        const goldDividerEl = document.getElementById('inv-gold-divider');
        const lineStripesEl = document.getElementById('inv-line-stripes');
        const bottomWaveEl = document.getElementById('inv-bottom-wave-aps');
        const contactSep1 = document.getElementById('inv-contact-sep-1');
        const iconAddr = document.getElementById('inv-icon-addr');
        const iconEmail = document.getElementById('inv-icon-email');

        // GSM Theme Elements
        const gsmHeaderRight = document.getElementById('inv-gsm-header-right');
        const gsmContactBar = document.getElementById('inv-gsm-contact-bar');
        const gsmFooterWave = document.getElementById('inv-gsm-footer-wave');
        const gsmTopAccent = document.getElementById('inv-gsm-top-accent');
        const signerTitleVal = document.getElementById('inv-signer-title-val');
        const gsmAddrVal = document.getElementById('gsm-addr-val');
        const gsmPhoneVal = document.getElementById('gsm-phone-val');
        const gsmEmailVal = document.getElementById('gsm-email-val');

        // GNM Theme Elements
        const gnmCornerArc = document.getElementById('inv-gnm-corner-arc');

        if (paperEl) {
            paperEl.classList.toggle('theme-aps', isAps);
            paperEl.classList.toggle('theme-gsm', isGsm);
            paperEl.classList.toggle('theme-gnm', isGnm);
            paperEl.classList.toggle('theme-gkn', isGkn);
            paperEl.classList.toggle('theme-rgu', isRgu);
        }

        if (topCornerEl) topCornerEl.style.display = isAps ? 'block' : 'none';
        if (goldDividerEl) goldDividerEl.style.display = isAps ? 'flex' : 'none';
        if (lineStripesEl) lineStripesEl.style.display = isAps ? 'flex' : 'none';
        if (bottomWaveEl) bottomWaveEl.style.display = isAps ? 'block' : 'none';
        if (contactSep1) contactSep1.style.display = isAps ? 'inline' : 'none';
        if (iconAddr) iconAddr.style.display = isAps ? 'inline' : 'none';
        if (iconEmail) iconEmail.style.display = isAps ? 'none' : 'inline';

        if (gsmHeaderRight) gsmHeaderRight.style.display = isGsm ? 'flex' : 'none';
        if (gsmContactBar) gsmContactBar.style.display = isGsm ? 'flex' : 'none';
        if (gsmFooterWave) gsmFooterWave.style.display = isGsm ? 'flex' : 'none';
        if (gsmTopAccent) gsmTopAccent.style.display = isGsm ? 'block' : 'none';
        if (signerTitleVal) {
            signerTitleVal.style.display = (isGsm || isGnm || isGkn || isRgu) ? 'block' : 'none';
            if (profile.signerTitle) signerTitleVal.textContent = profile.signerTitle;
        }

        if (gnmCornerArc) gnmCornerArc.style.display = (isGnm || isGkn || isRgu) ? 'block' : 'none';

        if (isGsm || isGkn || isRgu) {
            document.getElementById('inv-cv-footer-name').textContent = profile.signerName || profile.title;
        } else if (isGnm) {
            document.getElementById('inv-cv-footer-name').textContent = profile.signerName || profile.title;
        }

        // Bank info default
        if (elements.inputInvBank && (!elements.inputInvBank.value || elements.inputInvBank.value.includes('CV'))) {
            elements.inputInvBank.value = profile.bank;
        }

        // Set default invoice number prefix
        const abbr = getYayasanAbbr(profile.title);
        const now = new Date();
        const monthRoman = getRomanMonth(now.getMonth());
        if (elements.inputInvNo && !elements.inputInvNo.value) {
            elements.inputInvNo.value = `INV/${abbr}/${monthRoman}/${now.getFullYear()}`;
        }
    }

    // Render Dynamic Items Input Form
    function renderInvFormItems() {
        const container = elements.invFormItemsList;
        if (!container) return;

        container.innerHTML = state.invItems.map((item, idx) => `
            <div style="display:flex; gap:0.4rem; align-items:center; background:rgba(15,23,42,0.6); padding:0.4rem; border-radius:6px; border:1px solid var(--border-color);">
                <input type="text" class="inv-item-desc" data-idx="${idx}" value="${escapeHtml(item.desc)}" placeholder="Deskripsi..." style="flex:2; font-size:0.8rem; padding:0.4rem;">
                <input type="number" class="inv-item-qty" data-idx="${idx}" value="${item.qty}" min="1" placeholder="Qty" style="width:50px; font-size:0.8rem; padding:0.4rem; text-align:center;">
                <input type="number" class="inv-item-price" data-idx="${idx}" value="${item.price}" min="0" step="1000" placeholder="Harga" style="width:90px; font-size:0.8rem; padding:0.4rem;">
                ${state.invItems.length > 1 ? `<button type="button" class="btn btn-danger btn-sm btn-del-inv-item" data-idx="${idx}" style="padding:0.25rem 0.4rem; font-size:0.7rem;"><i class="fas fa-trash"></i></button>` : ''}
            </div>
        `).join('');

        // Attach listeners
        container.querySelectorAll('.inv-item-desc').forEach(inp => {
            inp.addEventListener('input', (e) => {
                const idx = Number(e.target.dataset.idx);
                state.invItems[idx].desc = e.target.value;
                syncInvoiceToPreview();
            });
        });

        container.querySelectorAll('.inv-item-qty').forEach(inp => {
            inp.addEventListener('input', (e) => {
                const idx = Number(e.target.dataset.idx);
                state.invItems[idx].qty = Math.max(1, parseInt(e.target.value) || 1);
                syncInvoiceToPreview();
            });
        });

        container.querySelectorAll('.inv-item-price').forEach(inp => {
            inp.addEventListener('input', (e) => {
                const idx = Number(e.target.dataset.idx);
                state.invItems[idx].price = parseFloat(e.target.value) || 0;
                syncInvoiceToPreview();
            });
        });

        container.querySelectorAll('.btn-del-inv-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = Number(e.currentTarget.dataset.idx);
                state.invItems.splice(idx, 1);
                renderInvFormItems();
                syncInvoiceToPreview();
            });
        });
    }

    // Synchronize Invoice Form to Printable Paper
    function syncInvoiceToPreview() {
        if (state.docMode !== 'invoice') return;

        document.getElementById('inv-no-val').textContent = elements.inputInvNo ? (elements.inputInvNo.value || 'INV/ASP/X/2026') : 'INV/ASP/X/2026';
        document.getElementById('inv-date-val').textContent = elements.tanggal.value || '02 Oktober 2026';
        document.getElementById('inv-due-val').textContent = elements.inputInvDue ? (elements.inputInvDue.value || '16 Oktober 2026') : '16 Oktober 2026';
        document.getElementById('inv-billto-val').textContent = elements.telahDiterima.value || 'SPPG NGADIHARJO, BOROBUDUR';
        document.getElementById('inv-bank-details-val').textContent = elements.inputInvBank ? (elements.inputInvBank.value || '-') : '-';

        // Render Table Body Items & Calculate Subtotal
        let subtotal = 0;
        const tbody = document.getElementById('inv-table-body');
        if (tbody) {
            tbody.innerHTML = state.invItems.map((item, idx) => {
                const itemTotal = (item.qty || 1) * (item.price || 0);
                subtotal += itemTotal;
                return `
                    <tr>
                        <td style="text-align:center;">${idx + 1}</td>
                        <td>${escapeHtml(item.desc)}</td>
                        <td style="text-align:center;">${item.qty}</td>
                        <td style="text-align:right;">${formatRupiah(item.price)}</td>
                        <td style="text-align:right; font-weight:700;">${formatRupiah(itemTotal)}</td>
                    </tr>
                `;
            }).join('');
        }

        // Calculate Totals
        const diskon = elements.inputInvDiskon ? (parseFloat(elements.inputInvDiskon.value) || 0) : 0;
        const afterDiskon = Math.max(0, subtotal - diskon);
        
        const ppnPercent = elements.inputInvPpn ? (parseFloat(elements.inputInvPpn.value) || 0) : 0;
        const ppnVal = (afterDiskon * ppnPercent) / 100;
        
        const grandTotal = afterDiskon + ppnVal;

        document.getElementById('inv-subtotal-val').textContent = formatRupiah(subtotal);
        document.getElementById('inv-diskon-val').textContent = formatRupiah(diskon);
        document.getElementById('inv-ppn-val').textContent = formatRupiah(ppnVal);
        document.getElementById('inv-grandtotal-val').textContent = formatRupiah(grandTotal);
        document.getElementById('inv-terbilang-val').textContent = convertToTerbilang(grandTotal);

        // Signature Sync
        const sigBox = document.getElementById('inv-signature-box');
        if (sigBox) {
            if (state.currentSignatureUrl) {
                sigBox.innerHTML = `<img src="${state.currentSignatureUrl}" style="max-height:45px; object-fit:contain;">`;
            } else {
                sigBox.innerHTML = '';
            }
        }
    }
    function updateSignaturePreview(dataUrl) {
        if (dataUrl) {
            if (elements.kwSigImg) {
                elements.kwSigImg.src = dataUrl;
                elements.kwSigImg.style.display = 'block';
            }
            const cvSigImg = document.getElementById('kw-cv-sig-img');
            if (cvSigImg) {
                cvSigImg.src = dataUrl;
                cvSigImg.style.display = 'block';
            }
            const apsSigImg = document.getElementById('kw-aps-sig-img');
            if (apsSigImg) {
                apsSigImg.src = dataUrl;
                apsSigImg.style.display = 'block';
            }
            const gsmSigImg = document.getElementById('kw-gsm-sig-img');
            if (gsmSigImg) {
                gsmSigImg.src = dataUrl;
                gsmSigImg.style.display = 'block';
            }
            const gnmSigImg = document.getElementById('kw-gnm-sig-img');
            if (gnmSigImg) {
                gnmSigImg.src = dataUrl;
                gnmSigImg.style.display = 'block';
            }
            const gknSigImg = document.getElementById('kw-gkn-sig-img');
            if (gknSigImg) {
                gknSigImg.src = dataUrl;
                gknSigImg.style.display = 'block';
            }
            const rguSigImg = document.getElementById('kw-rgu-sig-img');
            if (rguSigImg) {
                rguSigImg.src = dataUrl;
                rguSigImg.style.display = 'block';
            }
        } else {
            if (elements.kwSigImg) {
                elements.kwSigImg.src = '';
                elements.kwSigImg.style.display = 'none';
            }
            const cvSigImg = document.getElementById('kw-cv-sig-img');
            if (cvSigImg) {
                cvSigImg.src = '';
                cvSigImg.style.display = 'none';
            }
            const apsSigImg = document.getElementById('kw-aps-sig-img');
            if (apsSigImg) {
                apsSigImg.src = '';
                apsSigImg.style.display = 'none';
            }
            const gsmSigImg = document.getElementById('kw-gsm-sig-img');
            if (gsmSigImg) {
                gsmSigImg.src = '';
                gsmSigImg.style.display = 'none';
            }
            const gnmSigImg = document.getElementById('kw-gnm-sig-img');
            if (gnmSigImg) {
                gnmSigImg.src = '';
                gnmSigImg.style.display = 'none';
            }
            const gknSigImg = document.getElementById('kw-gkn-sig-img');
            if (gknSigImg) {
                gknSigImg.src = '';
                gknSigImg.style.display = 'none';
            }
            const rguSigImg = document.getElementById('kw-rgu-sig-img');
            if (rguSigImg) {
                rguSigImg.src = '';
                rguSigImg.style.display = 'none';
            }
        }
    }

    // Attach Event Listeners
    function attachEventListeners() {
        // Kwitansi Template Switcher
        if (elements.selectKwitansiTemplate) {
            elements.selectKwitansiTemplate.addEventListener('change', (e) => {
                setKwitansiTemplate(e.target.value);
                syncFormToPreview();
                const names = {
                    'cv_asp': 'CV ANDALAN SOLUSI PRIMA',
                    'cv_aps': 'CV ARTHA PENA SEJAHTERA',
                    'cv_gsm': 'CV GARUDA SAFETY MANDIRI',
                    'cv_gnm': 'CV GRAHA NUSA MEDIKA',
                    'cv_gkn': 'CV GRIYA KEMAS NUSANTARA',
                    'cv_rgu': 'CV RAKSA GUNA UTAMA',
                    'yayasan': 'YAYASAN LAKSANA HARAPAN BANGSA'
                };
                showToast(`Templat Kwitansi: ${names[e.target.value] || e.target.value}`);
            });
        }

        // Mode Switcher Buttons
        if (elements.btnModeKwitansi) {
            elements.btnModeKwitansi.addEventListener('click', () => setDocMode('kwitansi'));
        }
        if (elements.btnModeInvoice) {
            elements.btnModeInvoice.addEventListener('click', () => setDocMode('invoice'));
        }

        // Invoice Preset CV Dropdown
        if (elements.selectPresetCv) {
            elements.selectPresetCv.addEventListener('change', (e) => {
                applyCvProfile(e.target.value);
                syncInvoiceToPreview();
            });
        }

        // Add Invoice Item Button
        if (elements.btnAddInvItem) {
            elements.btnAddInvItem.addEventListener('click', () => {
                state.invItems.push({ desc: 'Item Jasa / Barang Baru', qty: 1, price: 0 });
                renderInvFormItems();
                syncInvoiceToPreview();
            });
        }

        // Invoice Live Inputs
        const invLiveInps = [
            elements.inputInvNo, elements.inputInvDue, elements.inputInvBank,
            elements.inputInvDiskon, elements.inputInvPpn
        ];
        invLiveInps.forEach(inp => {
            if (inp) {
                inp.addEventListener('input', syncInvoiceToPreview);
                inp.addEventListener('change', syncInvoiceToPreview);
            }
        });

        // Form Inputs Live Sync
        const liveInputs = [
            elements.noKwitansi, elements.kota, elements.tanggal, 
            elements.telahDiterima, elements.keterangan, elements.companyName, 
            elements.signatureLabel
        ];

        liveInputs.forEach(input => {
            if (input) {
                input.addEventListener('input', () => {
                    syncFormToPreview();
                    syncInvoiceToPreview();
                });
            }
        });

        // Dropdown SPPG Auto-Fill Listener
        if (elements.selectSppg) {
            elements.selectSppg.addEventListener('change', (e) => {
                if (e.target.value) {
                    elements.telahDiterima.value = e.target.value;
                    syncFormToPreview();
                }
            });
        }

        // Amount Input with Auto Terbilang
        elements.jumlah.addEventListener('input', () => {
            syncFormToPreview();
        });

        // Terbilang Manual Input
        elements.terbilang.addEventListener('input', () => {
            if (!state.autoTerbilang) {
                elements.kwTerbilang.textContent = elements.terbilang.value;
            }
        });

        // Auto Terbilang Toggle Checkbox
        elements.autoTerbilangCheck.addEventListener('change', (e) => {
            state.autoTerbilang = e.target.checked;
            elements.terbilang.disabled = state.autoTerbilang;
            syncFormToPreview();
        });

        // Generate Auto No Button
        elements.autoNoBtn.addEventListener('click', generateKwitansiNumber);

        // Clear & Undo Signature Buttons
        document.getElementById('btn-clear-sig').addEventListener('click', () => {
            state.signaturePad.clear();
        });

        document.getElementById('btn-undo-sig').addEventListener('click', () => {
            state.signaturePad.undo();
        });

        // Save Yayasan Logo Button
        if (elements.btnSaveYayasanLogo) {
            elements.btnSaveYayasanLogo.addEventListener('click', saveCurrentYayasanLogo);
        }

        // Add new SPPG to Yayasan listener
        if (elements.btnAddSppg) {
            elements.btnAddSppg.addEventListener('click', addNewSppgToYayasan);
        }

        // Manage Yayasan Dropdown change listener
        if (elements.selectManageYayasan) {
            elements.selectManageYayasan.addEventListener('change', renderSppgManagerList);
        }

        // Preset Yayasan Dropdown Select
        if (elements.selectPresetYayasan) {
            elements.selectPresetYayasan.addEventListener('change', (e) => {
                const selectedName = e.target.value;
                if (selectedName) {
                    elements.companyName.value = selectedName;
                    
                    const sppgList = state.yayasanSppgMap[selectedName] || [];
                    if (sppgList.length > 0) {
                        elements.telahDiterima.value = sppgList[0];
                    }

                    elements.noKwitansi.value = getSequentialKwitansiNumber(selectedName);
                    autoLoadYayasanLogo(selectedName);
                    syncFormToPreview();
                    showToast(`Yayasan dipilih: ${selectedName}`);
                }
            });
        }

        // Logo Upload
        elements.logoUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const dataUrl = event.target.result;
                    elements.kwLogoImg.src = dataUrl;
                    elements.kwWatermarkLogo.src = dataUrl;
                    state.companyLogoUrl = dataUrl;
                    
                    // Auto save logo for current company name
                    const cName = (elements.companyName.value || '').trim().toUpperCase();
                    if (cName) {
                        state.yayasanLogos[cName] = dataUrl;
                        localStorage.setItem('yayasan_logos', JSON.stringify(state.yayasanLogos));
                        renderYayasanPresetOptions();
                        renderYayasanLogoList();
                    }
                    showToast('Logo diunggah & otomatis terhubung!');
                };
                reader.readAsDataURL(file);
            }
        });

        // Signature Upload Image File
        elements.sigUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    state.signaturePad.loadImage(event.target.result);
                    showToast('Tanda tangan berhasil diunggah');
                };
                reader.readAsDataURL(file);
            }
        });

        // Zoom Controls
        document.getElementById('btn-zoom-in').addEventListener('click', () => setZoom(state.zoom + 0.1));
        document.getElementById('btn-zoom-out').addEventListener('click', () => setZoom(state.zoom - 0.1));
        document.getElementById('btn-zoom-reset').addEventListener('click', () => setZoom(1));

        // Tab Switcher
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const targetTab = e.currentTarget.dataset.tab;
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                e.currentTarget.classList.add('active');
                const targetEl = document.getElementById(`tab-${targetTab}`);
                if (targetEl) {
                    targetEl.classList.add('active');
                }
            });
        });

        // Action Buttons
        document.getElementById('btn-print').addEventListener('click', () => {
            window.print();
        });

        document.getElementById('btn-download-png').addEventListener('click', exportPNG);
        document.getElementById('btn-save-history').addEventListener('click', saveToHistory);
        document.getElementById('btn-reset-form').addEventListener('click', () => {
            loadDefaultPreset();
            state.signaturePad.clear();
            showToast('Formulir direset ke bawaan');
        });
        document.getElementById('btn-export-csv').addEventListener('click', exportCSV);

        // Review Modal Handlers
        const btnOpenReview = document.getElementById('btn-open-review');
        const btnCloseModal = document.getElementById('btn-close-modal');
        const btnModalEdit = document.getElementById('modal-btn-edit');
        const btnModalPng = document.getElementById('modal-btn-png');
        const btnModalPrint = document.getElementById('modal-btn-print');
        const modalReview = document.getElementById('modal-review');

        if (btnOpenReview) btnOpenReview.addEventListener('click', openReviewModal);
        if (btnCloseModal) btnCloseModal.addEventListener('click', closeReviewModal);
        if (btnModalEdit) btnModalEdit.addEventListener('click', closeReviewModal);
        if (btnModalPng) btnModalPng.addEventListener('click', () => { closeReviewModal(); exportPNG(); });
        if (btnModalPrint) btnModalPrint.addEventListener('click', () => { closeReviewModal(); window.print(); });

        if (modalReview) {
            modalReview.addEventListener('click', (e) => {
                if (e.target === modalReview) closeReviewModal();
            });
        }
    }

    // Open & Populate Review Modal
    function openReviewModal() {
        const modal = document.getElementById('modal-review');
        if (!modal) return;

        const revYayasanEl = document.getElementById('rev-yayasan');
        if (revYayasanEl) revYayasanEl.textContent = elements.companyName.value || '-';

        document.getElementById('rev-no').textContent = elements.noKwitansi.value || '-';
        document.getElementById('rev-date').textContent = `${elements.kota.value || ''}, ${elements.tanggal.value || ''}`;
        document.getElementById('rev-terima').textContent = elements.telahDiterima.value || '-';
        
        const numAmount = parseFloat(elements.jumlah.value) || 0;
        document.getElementById('rev-jumlah').textContent = formatRupiah(numAmount);
        document.getElementById('rev-terbilang').textContent = elements.terbilang.value || convertToTerbilang(numAmount);
        document.getElementById('rev-keterangan').textContent = elements.keterangan.value || '-';
        
        const hasSig = state.currentSignatureUrl ? 'Sudah Ditandatangani ✓' : 'Belum Tanda Tangan';
        document.getElementById('rev-sig-status').textContent = hasSig;

        modal.style.display = 'flex';
    }

    function closeReviewModal() {
        const modal = document.getElementById('modal-review');
        if (modal) modal.style.display = 'none';
    }

    // Set Zoom Level
    function setZoom(val) {
        state.zoom = Math.max(0.6, Math.min(1.4, val));
        elements.paperContainer.style.transform = `scale(${state.zoom})`;
        elements.zoomVal.textContent = `${Math.round(state.zoom * 100)}%`;
    }

    // Export Kwitansi to PNG Image
    function exportPNG() {
        showToast('Memproses gambar PNG...');
        
        if (typeof html2canvas === 'undefined') {
            showToast('Memuat pustaka html2canvas...');
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
            script.onload = () => captureCanvasPNG();
            document.head.appendChild(script);
        } else {
            captureCanvasPNG();
        }
    }

    function captureCanvasPNG() {
        let paper = elements.kwitansiPaper;
        if (state.docMode === 'invoice') {
            paper = elements.invoicePaper;
        } else if (state.kwTemplate === 'cv_asp' && elements.kwitansiPaperCv) {
            paper = elements.kwitansiPaperCv;
        } else if (state.kwTemplate === 'cv_aps' && elements.kwitansiPaperAps) {
            paper = elements.kwitansiPaperAps;
        } else if (state.kwTemplate === 'cv_gsm' && elements.kwitansiPaperGsm) {
            paper = elements.kwitansiPaperGsm;
        } else if (state.kwTemplate === 'cv_gnm' && elements.kwitansiPaperGnm) {
            paper = elements.kwitansiPaperGnm;
        } else if (state.kwTemplate === 'cv_gkn' && elements.kwitansiPaperGkn) {
            paper = elements.kwitansiPaperGkn;
        } else if (state.kwTemplate === 'cv_rgu' && elements.kwitansiPaperRgu) {
            paper = elements.kwitansiPaperRgu;
        }

        const filenamePrefix = (state.docMode === 'invoice') ? 'Invoice' : 'Kwitansi';
        const docNo = (state.docMode === 'invoice') ? (elements.inputInvNo ? elements.inputInvNo.value : 'INV') : elements.noKwitansi.value;
        
        html2canvas(paper, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            const link = document.createElement('a');
            const cleanNo = (docNo || filenamePrefix).replace(/[\/\\]/g, '-');
            link.download = `${filenamePrefix}_${cleanNo}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
            showToast(`Gambar PNG ${filenamePrefix} berhasil diunduh!`);
        }).catch(err => {
            console.error(err);
            showToast('Gagal mengunduh PNG');
        });
    }

    // Save Kwitansi Record to History LocalStorage
    function saveToHistory() {
        const record = {
            id: Date.now(),
            no: elements.noKwitansi.value,
            kota: elements.kota.value,
            tanggal: elements.tanggal.value,
            terima: elements.telahDiterima.value,
            jumlah: parseFloat(elements.jumlah.value) || 0,
            terbilang: elements.terbilang.value,
            keterangan: elements.keterangan.value,
            companyName: elements.companyName.value,
            sigLabel: elements.signatureLabel.value,
            signatureData: state.currentSignatureUrl,
            savedAt: new Date().toLocaleString('id-ID')
        };

        state.history.unshift(record);
        localStorage.setItem('kwitansi_history', JSON.stringify(state.history));
        renderHistory();
        showToast('Kwitansi berhasil disimpan ke riwayat!');

        // Auto increment counter for this Yayasan for the next receipt
        incrementYayasanCounter(elements.companyName.value);
    }

    // Calculate and update Rekap Summary (Total Transaksi & Nominal)
    function updateRekapSummary() {
        const countEl = document.getElementById('rekap-count');
        const totalEl = document.getElementById('rekap-total');
        if (!countEl || !totalEl) return;

        const count = state.history.length;
        const totalSum = state.history.reduce((acc, curr) => acc + (Number(curr.jumlah) || 0), 0);

        countEl.textContent = count;
        totalEl.textContent = formatRupiah(totalSum);
    }

    // Render History List UI
    function renderHistory() {
        updateRekapSummary();
        const list = elements.historyList;
        if (!list) return;

        if (state.history.length === 0) {
            list.innerHTML = `
                <div style="text-align: center; color: var(--text-muted); padding: 2rem 0; font-size: 0.85rem;">
                    Belum ada kwitansi tersimpan.
                </div>
            `;
            return;
        }

        list.innerHTML = state.history.map(item => `
            <div class="history-card" data-id="${item.id}">
                <div class="history-header">
                    <span class="history-no">No. ${escapeHtml(item.no || '-')}</span>
                    <span class="history-date">${escapeHtml(item.tanggal || '-')}</span>
                </div>
                <div class="history-body">
                    <div><strong>Dari:</strong> ${escapeHtml(item.terima || '-')}</div>
                    <div class="history-amount">${formatRupiah(item.jumlah)}</div>
                </div>
                <div class="history-actions">
                    <button class="btn btn-outline btn-sm btn-load-item" data-id="${item.id}">
                        <i class="fas fa-folder-open"></i> Buka
                    </button>
                    <button class="btn btn-danger btn-sm btn-delete-item" data-id="${item.id}">
                        <i class="fas fa-trash"></i> Hapus
                    </button>
                </div>
            </div>
        `).join('');

        // Attach action handlers for history items
        list.querySelectorAll('.btn-load-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = Number(e.currentTarget.dataset.id);
                const item = state.history.find(h => h.id === id);
                if (item) loadRecord(item);
            });
        });

        list.querySelectorAll('.btn-delete-item').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = Number(e.currentTarget.dataset.id);
                deleteRecord(id);
            });
        });
    }

    function loadRecord(item) {
        elements.noKwitansi.value = item.no || '';
        elements.kota.value = item.kota || '';
        elements.tanggal.value = item.tanggal || '';
        elements.telahDiterima.value = item.terima || '';
        elements.jumlah.value = item.jumlah || '';
        elements.terbilang.value = item.terbilang || '';
        elements.keterangan.value = item.keterangan || '';
        if (item.companyName) elements.companyName.value = item.companyName;
        if (item.sigLabel) elements.signatureLabel.value = item.sigLabel;

        if (item.signatureData) {
            state.signaturePad.loadImage(item.signatureData);
        } else {
            state.signaturePad.clear();
        }

        syncFormToPreview();
        showToast(`Memuat Kwitansi No. ${item.no}`);
    }

    function deleteRecord(id) {
        if (confirm('Apakah Anda yakin ingin menghapus kwitansi ini dari riwayat?')) {
            state.history = state.history.filter(item => item.id !== id);
            localStorage.setItem('kwitansi_history', JSON.stringify(state.history));
            renderHistory();
            showToast('Kwitansi dihapus');
        }
    }

    // Export History to CSV
    function exportCSV() {
        if (state.history.length === 0) {
            showToast('Tidak ada data riwayat untuk diexport');
            return;
        }

        const headers = ["ID", "No Kwitansi", "Kota", "Tanggal", "Diterima Dari", "Jumlah (Rp)", "Terbilang", "Keterangan", "Tanggal Simpan"];
        const rows = state.history.map(item => [
            item.id,
            `"${item.no || ''}"`,
            `"${item.kota || ''}"`,
            `"${item.tanggal || ''}"`,
            `"${item.terima || ''}"`,
            item.jumlah || 0,
            `"${item.terbilang || ''}"`,
            `"${item.keterangan || ''}"`,
            `"${item.savedAt || ''}"`
        ]);

        const csvContent = "data:text/csv;charset=utf-8,\uFEFF" 
            + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', `Riwayat_Kwitansi_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast('Export CSV berhasil');
    }

    // Utility: HTML Escaper
    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, function(m) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            }[m];
        });
    }

    // Toast Notification Banner
    function showToast(msg) {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-info-circle"></i> <span>${msg}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // App Initialization
    renderSppgDropdownOptions();
    renderYayasanPresetOptions();
    renderYayasanLogoList();
    renderManageYayasanSppg();
    renderYayasanCounterList();
    renderInvFormItems();
    loadDefaultPreset();
    attachEventListeners();
    setKwitansiTemplate(state.kwTemplate);
    renderHistory();
});
