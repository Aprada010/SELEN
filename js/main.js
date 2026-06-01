function cekQuizHC(){

let score = 0;

const q1 =
document.querySelector(
'input[name="q1"]:checked'
);

const q2 =
document.querySelector(
'input[name="q2"]:checked'
);

if(!q1 || !q2){

document.getElementById(
"hasilQuizHC"
).innerHTML =
"Jawab semua soal terlebih dahulu!";

return;
}

score += parseInt(q1.value);
score += parseInt(q2.value);

let nilai =
(score/2)*100;

document.getElementById(
"hasilQuizHC"
).innerHTML =

`
<div class="alert alert-info">

<h4>Hasil Quiz</h4>

<p>Skor : ${score}/2</p>

<p>Nilai : ${nilai}</p>

</div>
`;

}

function cekQuizDHT(){

let score = 0;

const q1 =
document.querySelector(
'input[name="q1dht"]:checked'
);

const q2 =
document.querySelector(
'input[name="q2dht"]:checked'
);

const q3 =
document.querySelector(
'input[name="q3dht"]:checked'
);

if(!q1 || !q2 || !q3){

document.getElementById(
"hasilQuizDHT"
).innerHTML =
"Jawab semua soal terlebih dahulu!";

return;
}

score += parseInt(q1.value);
score += parseInt(q2.value);
score += parseInt(q3.value);

let nilai =
(score/3)*100;

let kategori = "";

if(nilai >= 80){
kategori = "Sangat Baik";
}
else if(nilai >= 60){
kategori = "Baik";
}
else{
kategori = "Perlu Belajar Lagi";
}

document.getElementById(
"hasilQuizDHT"
).innerHTML =

`
<div class="alert alert-info">

<h4>Hasil Quiz</h4>

<p>Skor : ${score}/3</p>

<p>Nilai : ${nilai}</p>

<p>Kategori : ${kategori}</p>

</div>
`;

}

function cekQuizLDR(){

let score = 0;

const q1 =
document.querySelector(
'input[name="q1ldr"]:checked'
);

const q2 =
document.querySelector(
'input[name="q2ldr"]:checked'
);

const q3 =
document.querySelector(
'input[name="q3ldr"]:checked'
);

if(!q1 || !q2 || !q3){

document.getElementById(
"hasilQuizLDR"
).innerHTML =
"Jawab semua soal terlebih dahulu!";

return;
}

score += parseInt(q1.value);
score += parseInt(q2.value);
score += parseInt(q3.value);

let nilai = (score/3)*100;

let kategori = "";

if(nilai >= 80){
kategori = "Sangat Baik";
}
else if(nilai >= 60){
kategori = "Baik";
}
else{
kategori = "Perlu Belajar Lagi";
}

document.getElementById(
"hasilQuizLDR"
).innerHTML =

`
<div class="alert alert-info">

<h4>Hasil Quiz</h4>

<p>Skor : ${score}/3</p>

<p>Nilai : ${nilai}</p>

<p>Kategori : ${kategori}</p>

</div>
`;

}

function cekQuizMQ2(){

let score = 0;

const q1 =
document.querySelector(
'input[name="q1mq2"]:checked'
);

const q2 =
document.querySelector(
'input[name="q2mq2"]:checked'
);

const q3 =
document.querySelector(
'input[name="q3mq2"]:checked'
);

if(!q1 || !q2 || !q3){

document.getElementById(
"hasilQuizMQ2"
).innerHTML =
"Jawab semua soal terlebih dahulu!";

return;
}

score += parseInt(q1.value);
score += parseInt(q2.value);
score += parseInt(q3.value);

let nilai = (score/3)*100;

let kategori = "";

if(nilai >= 80){
kategori = "Sangat Baik";
}
else if(nilai >= 60){
kategori = "Baik";
}
else{
kategori = "Perlu Belajar Lagi";
}

document.getElementById(
"hasilQuizMQ2"
).innerHTML =

`
<div class="alert alert-info">

<h4>Hasil Quiz</h4>

<p>Skor : ${score}/3</p>

<p>Nilai : ${nilai}</p>

<p>Kategori : ${kategori}</p>

</div>
`;

}

function cekEvaluasi() {

    // Data soal dan jawaban benar
    const soal = [
        {
            nomor: 1,
            pertanyaan: "HC-SR04 digunakan untuk mengukur?",
            opsi: ["Jarak", "Suhu", "Cahaya", "Gas"],
            benar: "Jarak"
        },
        {
            nomor: 2,
            pertanyaan: "Pin yang mengirim gelombang ultrasonik pada HC-SR04 adalah?",
            opsi: ["ECHO", "TRIG", "VCC", "GND"],
            benar: "TRIG"
        },
        {
            nomor: 3,
            pertanyaan: "Pin ECHO pada HC-SR04 berfungsi untuk?",
            opsi: [
                "Mengirim gelombang ultrasonik",
                "Menerima pantulan gelombang ultrasonik",
                "Memberikan tegangan ke sensor",
                "Menghubungkan ke ground"
            ],
            benar: "Menerima pantulan gelombang ultrasonik"
        },
        {
            nomor: 4,
            pertanyaan: "Berapa tegangan operasi HC-SR04?",
            opsi: ["3.3V", "5V", "9V", "12V"],
            benar: "5V"
        },
        {
            nomor: 5,
            pertanyaan: "DHT22 digunakan untuk mengukur?",
            opsi: ["Jarak", "Suhu dan Kelembapan", "Cahaya", "Gas"],
            benar: "Suhu dan Kelembapan"
        },
        {
            nomor: 6,
            pertanyaan: "Rentang pengukuran suhu pada DHT22 adalah?",
            opsi: ["0°C hingga 50°C", "-40°C hingga 80°C", "-10°C hingga 60°C", "10°C hingga 100°C"],
            benar: "-40°C hingga 80°C"
        },
        {
            nomor: 7,
            pertanyaan: "Dibandingkan DHT11, DHT22 memiliki keunggulan berupa?",
            opsi: [
                "Harga lebih murah",
                "Ukuran lebih kecil",
                "Akurasi dan rentang pengukuran lebih baik",
                "Konsumsi daya lebih besar"
            ],
            benar: "Akurasi dan rentang pengukuran lebih baik"
        },
        {
            nomor: 8,
            pertanyaan: "LDR digunakan untuk mengukur?",
            opsi: ["Gas", "Intensitas Cahaya", "Suhu", "Jarak"],
            benar: "Intensitas Cahaya"
        },
        {
            nomor: 9,
            pertanyaan: "Saat kondisi gelap, nilai resistansi LDR akan?",
            opsi: [
                "Meningkat (resistansi tinggi)",
                "Menurun (resistansi rendah)",
                "Tetap sama",
                "Menjadi nol"
            ],
            benar: "Meningkat (resistansi tinggi)"
        },
        {
            nomor: 10,
            pertanyaan: "Pada rangkaian Arduino dengan LDR, komponen tambahan yang biasa dipasang seri adalah?",
            opsi: ["Kapasitor", "Resistor (sebagai voltage divider)", "Transistor", "Dioda"],
            benar: "Resistor (sebagai voltage divider)"
        },
        {
            nomor: 11,
            pertanyaan: "MQ-2 digunakan untuk mendeteksi?",
            opsi: ["Cahaya", "Gas dan Asap", "Suhu", "Jarak"],
            benar: "Gas dan Asap"
        },
        {
            nomor: 12,
            pertanyaan: "MQ-2 dapat mendeteksi gas berikut, KECUALI?",
            opsi: ["LPG", "Asap", "Uap air", "Metana"],
            benar: "Uap air"
        },
        {
            nomor: 13,
            pertanyaan: "Pin keluaran analog MQ-2 pada Arduino dihubungkan ke pin?",
            opsi: ["Pin digital (D2–D13)", "Pin analog (A0–A5)", "Pin 5V", "Pin GND"],
            benar: "Pin analog (A0–A5)"
        },
        {
            nomor: 14,
            pertanyaan: "Sensor manakah yang membaca data melalui protokol komunikasi digital one-wire?",
            opsi: ["HC-SR04", "DHT22", "LDR", "MQ-2"],
            benar: "DHT22"
        },
        {
            nomor: 15,
            pertanyaan: "Sensor mana yang outputnya berupa nilai analog dan memerlukan ADC untuk dibaca Arduino?",
            opsi: ["HC-SR04", "DHT22", "LDR dan MQ-2", "Semua sensor di atas"],
            benar: "LDR dan MQ-2"
        }
    ];

    let score = 0;
    let jawabanUser = [];

    // Cek semua soal dijawab dulu
    for (let i = 1; i <= 15; i++) {
        const jawaban = document.querySelector(`input[name="e${i}"]:checked`);
        if (!jawaban) {
            document.getElementById("hasilEvaluasi").innerHTML =
                "Jawab semua soal terlebih dahulu!";
            return;
        }
        score += parseInt(jawaban.value);

        // Simpan teks jawaban yang dipilih user
        const label = jawaban.parentElement
            ? jawaban.parentElement.textContent.trim()
            : "";
        jawabanUser.push(label);
    }

    let nilai = (score / 15) * 100;
    let kategori = "";

    if (nilai >= 80) {
        kategori = "Sangat Baik";
    } else if (nilai >= 60) {
        kategori = "Baik";
    } else {
        kategori = "Perlu Belajar Lagi";
    }

    // Buat tabel pembahasan per soal
    let pembahasanHTML = "";

    soal.forEach((s, index) => {
        const userJawab = jawabanUser[index];
        const benar = userJawab === s.benar;

        pembahasanHTML += `
            <div class="mb-2 p-3 rounded" style="background: ${benar ? "#d1f5d3" : "#fde8e8"}; border-left: 4px solid ${benar ? "#28a745" : "#dc3545"};">
                <strong>Soal ${s.nomor}:</strong> ${s.pertanyaan}<br>
                <span>Jawaban kamu : <b>${userJawab}</b></span><br>
                ${!benar ? `<span>Jawaban benar : <b style="color:#28a745">${s.benar}</b></span>` : ""}
                <span style="float:right; font-size:1.2rem;">${benar ? "✅" : "❌"}</span>
            </div>
        `;
    });

    document.getElementById("hasilEvaluasi").innerHTML = `
        <div class="alert alert-success">
            <h3>Hasil Evaluasi</h3>
            <p>Skor : ${score}/15</p>
            <p>Nilai : ${nilai.toFixed(0)}</p>
            <p>Kategori : ${kategori}</p>
        </div>

        <h5 class="mt-4 mb-3">Pembahasan Jawaban</h5>
        ${pembahasanHTML}
    `;

    // Scroll ke hasil
    document.getElementById("hasilEvaluasi").scrollIntoView({ behavior: "smooth" });
}

