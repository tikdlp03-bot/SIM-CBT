// ============================================================
//  DATA SOAL (10 soal dengan 5 opsi)
//  Mengacu pada contoh soal UTBK SNBT 2025
// ============================================================
const soalData = [{
    id: 1,
    subtest: 'Penalaran Matematika',
    text: 'Jika karyawan libur hari Selasa, maka hari Sabtu masuk kerja. Hari ini adalah Rabu. Manakah simpulan yang BENAR?',
    options: [
        'A. Karyawan libur hari Selasa',
        'B. Karyawan masuk kerja hari Sabtu',
        'C. Karyawan tidak libur hari Selasa',
        'D. Karyawan libur hari Rabu',
        'E. Tidak dapat disimpulkan'
    ],
    jawaban: 1 // indeks 0-based -> B
}, {
    id: 2,
    subtest: 'Penalaran Matematika',
    text: 'Penjualan kue cromboloni dalam lima hari terakhir: 23, 28, 33, 38, 43 buah. Jika tren konstan, berapa penjualan pada hari ke-7?',
    options: [
        'A. 48',
        'B. 50',
        'C. 53',
        'D. 55',
        'E. 58'
    ],
    jawaban: 2 // 43 + 5 + 5 = 53 -> C
}, {
    id: 3,
    subtest: 'Penalaran Matematika',
    text: 'Diketahui fungsi f(x) = x² + 2x. Berapakah nilai f(−3)?',
    options: [
        'A. −15',
        'B. −9',
        'C. 3',
        'D. 9',
        'E. 15'
    ],
    jawaban: 2 // 9 - 6 = 3 -> C
}, {
    id: 4,
    subtest: 'Literasi Bahasa Indonesia',
    text: 'Bu Mus adalah seorang guru yang pandai, kharismatik, dan memiliki pandangan jauh ke depan. Gambaran karakter Bu Mus yang paling tepat adalah …',
    options: [
        'A. Guru yang tegas dan disiplin',
        'B. Guru yang bijaksana dan visioner',
        'C. Guru yang ramah dan populer',
        'D. Guru yang perfeksionis',
        'E. Guru yang kaku dan otoriter'
    ],
    jawaban: 1 // B
}, {
    id: 5,
    subtest: 'Literasi Bahasa Indonesia',
    text: 'Tujuan penulisan ungkapan seperti "menggumam" dan "tertawa" pada bacaan tentang perkembangan bahasa bayi adalah untuk …',
    options: [
        'A. Menyatakan proses perkembangan bahasa bayi',
        'B. Menggambarkan ekspresi bayi secara konkret',
        'C. Membandingkan bayi dengan orang dewasa',
        'D. Menjelaskan tahapan belajar bicara',
        'E. Memberikan contoh kalimat yang tepat'
    ],
    jawaban: 0 // A
}, {
    id: 6,
    subtest: 'Penalaran Umum',
    text: 'Manakah simpulan berikut yang BENAR? "Jika Faiz tidak dapat menyelesaikan tugas sebelum akhir minggu, maka Faiz tidak mengikuti magang."',
    options: [
        'A. Faiz menyelesaikan tugas, maka ia magang',
        'B. Faiz tidak magang, maka ia tidak menyelesaikan tugas',
        'C. Faiz magang, maka ia menyelesaikan tugas',
        'D. Faiz tidak menyelesaikan tugas, maka ia magang',
        'E. Tidak ada simpulan yang benar'
    ],
    jawaban: 2 // C (kontraposisi: magang -> selesai)
}, {
    id: 7,
    subtest: 'Penalaran Umum',
    text: 'Deri adalah murid paling gemuk di kelasnya. Mahmud lebih gemuk daripada Deri. Hanya murid yang gemuk yang boleh mengikuti kompetisi sumo. Simpulan yang tepat:',
    options: [
        'A. Mahmud boleh mengikuti sumo',
        'B. Deri tidak boleh mengikuti sumo',
        'C. Mahmud tidak boleh mengikuti sumo',
        'D. Deri dan Mahmud boleh mengikuti sumo',
        'E. Tidak dapat disimpulkan'
    ],
    jawaban: 0 // A
}, {
    id: 8,
    subtest: 'Penalaran Umum',
    text: 'Kadar gula yang tinggi dalam darah meningkatkan risiko penyakit kardiovaskular. Penderita diabetes memiliki kadar gula darah tinggi. Simpulan:',
    options: [
        'A. Semua penderita diabetes berisiko kardiovaskular',
        'B. Tidak semua penderita diabetes berisiko',
        'C. Penderita diabetes pasti terkena kardiovaskular',
        'D. Risiko kardiovaskular hanya pada diabetes',
        'E. Tidak ada hubungan antara diabetes dan kardiovaskular'
    ],
    jawaban: 0 // A
}, {
    id: 9,
    subtest: 'Pengetahuan & Pemahaman Umum',
    text: 'Kota A memiliki jumlah penduduk 2,5 juta jiwa dengan luas 1.200 km². Kepadatan penduduk Kota A adalah …',
    options: [
        'A. 1.800 jiwa/km²',
        'B. 2.000 jiwa/km²',
        'C. 2.083 jiwa/km²',
        'D. 2.500 jiwa/km²',
        'E. 3.000 jiwa/km²'
    ],
    jawaban: 2 // 2.500.000 / 1.200 = 2083,33 -> C
}, {
    id: 10,
    subtest: 'Pengetahuan & Pemahaman Umum',
    text: 'Negara X mengalami inflasi 6% per tahun. Jika harga barang saat ini Rp100.000, berapa harga barang tersebut setelah satu tahun?',
    options: [
        'A. Rp100.000',
        'B. Rp102.000',
        'C. Rp104.000',
        'D. Rp106.000',
        'E. Rp108.000'
    ],
    jawaban: 3 // 100.000 * 1,06 = 106.000 -> D
}];

// ============================================================
//  STATE APLIKASI
// ============================================================
const state = {
    currentIndex: 0,
    jawaban: new Array(soalData.length).fill(null), // null = belum dijawab
    ragu: new Array(soalData.length).fill(false),
    timerSeconds: 20 * 60, // 20 menit
    timerInterval: null,
    isFinished: false,
    namaPeserta: 'Andika Pratama'
};

// DOM refs
const soalArea = document.getElementById('soalArea');
const nomorGrid = document.getElementById('nomorGrid');
const currentSoalDisplay = document.getElementById('currentSoalDisplay');
const totalSoalDisplay = document.getElementById('totalSoalDisplay');
const posIndicator = document.getElementById('posIndicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const raguBtn = document.getElementById('raguBtn');
const clearBtn = document.getElementById('clearBtn');
const submitBtn = document.getElementById('submitBtn');
const timerDisplay = document.getElementById('timerDisplay');
const timerBox = document.getElementById('timerBox');
const subtestBadge = document.getElementById('subtestBadge');
const namaPesertaEl = document.getElementById('namaPeserta');

// Modal
const resultModal = document.getElementById('resultModal');
const finalScore = document.getElementById('finalScore');
const finalTotal = document.getElementById('finalTotal');
const summaryBenar = document.getElementById('summaryBenar');
const summarySalah = document.getElementById('summarySalah');
const summaryRagu = document.getElementById('summaryRagu');
const summaryKosong = document.getElementById('summaryKosong');
const closeModalBtn = document.getElementById('closeModalBtn');

// ============================================================
//  FUNGSI RENDER
// ============================================================

function renderSoal() {
    const idx = state.currentIndex;
    const soal = soalData[idx];
    const jawabanUser = state.jawaban[idx];
    const isRagu = state.ragu[idx];

    // Update badge
    subtestBadge.textContent = `📘 ${soal.subtest}`;
    currentSoalDisplay.textContent = idx + 1;
    totalSoalDisplay.textContent = soalData.length;
    posIndicator.textContent = `${idx + 1} / ${soalData.length}`;

    // Navigasi
    prevBtn.disabled = idx === 0;
    nextBtn.disabled = idx === soalData.length - 1;

    // Render soal
    let html = `
        <div class="soal-number">Soal ${idx + 1}</div>
        <div class="soal-text">${soal.text}</div>
        <div class="options">
    `;

    soal.options.forEach((opt, oi) => {
        const checked = (jawabanUser === oi) ? 'checked' : '';
        const selectedClass = (jawabanUser === oi) ? 'selected' : '';
        html += `
            <div class="option-item ${selectedClass}" data-opt-index="${oi}">
                <input type="radio" name="jawaban" value="${oi}" ${checked} id="opt_${oi}" />
                <label class="label" for="opt_${oi}">${opt}</label>
            </div>
        `;
    });

    html += `</div>`;
    soalArea.innerHTML = html;

    // Event listener untuk opsi (delegasi)
    document.querySelectorAll('.option-item').forEach(el => {
        el.addEventListener('click', function(e) {
            // Cari radio di dalamnya
            const radio = this.querySelector('input[type="radio"]');
            if (radio) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change'));
            }
        });
    });

    // Event listener perubahan radio
    document.querySelectorAll('input[name="jawaban"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const val = parseInt(this.value);
            state.jawaban[idx] = val;
            // Jika jawaban diubah, ragu otomatis false
            state.ragu[idx] = false;
            renderNavigator();
            renderSoal(); // re-render untuk update class selected
        });
    });

    // Jika ada jawaban, tandai
    if (jawabanUser !== null) {
        const radio = document.querySelector(`input[name="jawaban"][value="${jawabanUser}"]`);
        if (radio) radio.checked = true;
    }

    // Update status ragu di tombol
    raguBtn.textContent = isRagu ? '✅ Tidak Ragu' : '❓ Ragu-ragu';
    raguBtn.style.background = isRagu ? '#fff3d6' : '';
    raguBtn.style.borderColor = isRagu ? '#f9b81b' : '';

    renderNavigator();
}

function renderNavigator() {
    let html = '';
    soalData.forEach((soal, i) => {
        let cls = 'nomor-btn';
        if (i === state.currentIndex) cls += ' active';
        if (state.jawaban[i] !== null) cls += ' answered';
        if (state.ragu[i]) cls += ' ragu';
        html += `<button class="${cls}" data-index="${i}">${i + 1}</button>`;
    });
    nomorGrid.innerHTML = html;

    // Event listener navigasi
    document.querySelectorAll('.nomor-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.dataset.index);
            if (!isNaN(idx) && idx !== state.currentIndex) {
                state.currentIndex = idx;
                renderSoal();
            }
        });
    });
}

// ============================================================
//  TIMER
// ============================================================

function startTimer() {
    if (state.timerInterval) return;
    state.timerInterval = setInterval(() => {
        state.timerSeconds--;
        updateTimerDisplay();

        if (state.timerSeconds <= 60) {
            timerBox.classList.add('warning');
        }

        if (state.timerSeconds <= 0) {
            clearInterval(state.timerInterval);
            state.timerInterval = null;
            timerDisplay.textContent = '00:00';
            alert('⏰ Waktu habis! Simulasi akan dikirim otomatis.');
            submitSimulation();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(state.timerSeconds / 60);
    const s = state.timerSeconds % 60;
    timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ============================================================
//  SUBMIT & HASIL
// ============================================================

function submitSimulation() {
    if (state.isFinished) return;
    state.isFinished = true;
    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }

    // Hitung hasil
    let benar = 0,
        salah = 0,
        ragu = 0,
        kosong = 0;
    soalData.forEach((soal, i) => {
        const jawab = state.jawaban[i];
        if (jawab === null) {
            kosong++;
        } else if (state.ragu[i]) {
            ragu++;
            if (jawab === soal.jawaban) benar++;
            else salah++;
        } else {
            if (jawab === soal.jawaban) benar++;
            else salah++;
        }
    });

    // Tampilkan modal
    finalScore.textContent = benar;
    finalTotal.textContent = soalData.length;
    summaryBenar.textContent = benar;
    summarySalah.textContent = salah;
    summaryRagu.textContent = ragu;
    summaryKosong.textContent = kosong;

    resultModal.classList.add('show');
}

// ============================================================
//  RESET / ULANGI
// ============================================================

function resetSimulation() {
    state.currentIndex = 0;
    state.jawaban = new Array(soalData.length).fill(null);
    state.ragu = new Array(soalData.length).fill(false);
    state.isFinished = false;
    state.timerSeconds = 20 * 60;

    if (state.timerInterval) {
        clearInterval(state.timerInterval);
        state.timerInterval = null;
    }
    timerBox.classList.remove('warning');
    updateTimerDisplay();
    resultModal.classList.remove('show');
    renderSoal();
    startTimer();
}

// ============================================================
//  EVENT LISTENERS
// ============================================================

// Navigasi
prevBtn.addEventListener('click', () => {
    if (state.currentIndex > 0) {
        state.currentIndex--;
        renderSoal();
    }
});
nextBtn.addEventListener('click', () => {
    if (state.currentIndex < soalData.length - 1) {
        state.currentIndex++;
        renderSoal();
    }
});

// Ragu
raguBtn.addEventListener('click', () => {
    const idx = state.currentIndex;
    state.ragu[idx] = !state.ragu[idx];
    // Jika ragu, tapi belum dijawab, tidak apa
    renderSoal();
});

// Kosongkan
clearBtn.addEventListener('click', () => {
    const idx = state.currentIndex;
    state.jawaban[idx] = null;
    state.ragu[idx] = false;
    renderSoal();
});

// Submit
submitBtn.addEventListener('click', () => {
    if (confirm('Yakin ingin mengirim jawaban? Waktu masih tersisa.')) {
        submitSimulation();
    }
});

// Modal tutup / ulangi
closeModalBtn.addEventListener('click', resetSimulation);

// Tutup modal klik di luar
resultModal.addEventListener('click', (e) => {
    if (e.target === resultModal) {
        // tidak apa
    }
});

// Keyboard shortcut
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
        prevBtn.click();
    } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
        nextBtn.click();
    } else if (e.key === 'r' || e.key === 'R') {
        raguBtn.click();
    }
});

// ============================================================
//  INISIALISASI
// ============================================================

namaPesertaEl.textContent = state.namaPeserta;
totalSoalDisplay.textContent = soalData.length;
renderSoal();
updateTimerDisplay();
startTimer();

console.log('✅ Simulasi UTBK siap! Gunakan panah kiri/kanan untuk navigasi.');