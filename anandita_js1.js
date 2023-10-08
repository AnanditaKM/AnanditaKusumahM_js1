// If, Else, dan Nested If

const inputTinggi = document.getElementById("inputTinggi");
const inputBerat = document.getElementById("inputBerat");
const submit1 = document.getElementById("submit1");
const hasil1 = document.getElementById("hasil1");

submit1.addEventListener("click", function() {

    const tinggi = inputTinggi.value;
    const berat = inputBerat.value;

    if (tinggi > 140) {
        if (berat < 90) {
            hasil1.textContent = "Anda bisa menaiki Wahana ini";
        }
        else {
            hasil1.textContent = "Maaf berat badan anda tidak sesuai, Anda tidak bisa menaiki Wahana ini";
        }
    } else {
        hasil1.textContent = "Maaf tinggi badan anda kurang, Anda tidak bisa menaiki Wahana ini";
    }
});

// Switch Case

const inputNilai = document.getElementById("inputNilai");
const submit2 = document.getElementById("submit2");
const hasil2 = document.getElementById("hasil2");

submit2.addEventListener("click", function() {

    const nilai = inputNilai.value;
    
    switch (nilai) {
        case "A":
            hasil2.textContent = "Hebatt Sangat baik pertahankan.";
            break;
        case "B":
            hasil2.textContent = "Baik tingkatkan terus ya!!";
            break;
        case "C":
            hasil2.textContent = "Cukup baik semangat teruss";
            break;
        case "D":
            hasil2.textContent = "Belajar lebih giat lagi ya!";
            break;
        case "E":
            hasil2.textContent = "Kalau ada yang bingung tanya ya!!";
            break;
        default:
            hasil2.textContent = "Input tidak valid, tolong masukkan A, B, C, D, atau E.";
            break;
    }
});

// For Loop

const inputAngka = document.getElementById("inputAngka");
const submit3 = document.getElementById("submit3");
const hasil3 = document.getElementById("hasil3");

submit3.addEventListener("click", function() {

    const angka=inputAngka.value;

    hasil3.textContent = "";

    for (let i = angka; i > 0; i--) {
        hasil3.textContent += i + "... ";
    }

    hasil3.textContent += "Selamat Tahun Baru!";
});

// While Loop

const inputJarak = document.getElementById("inputJarak");
const inputKecepatan = document.getElementById("inputKecepatan");
const submit4 = document.getElementById("submit4");
const hasil4 = document.getElementById("hasil4");

submit4.addEventListener("click", function() {

    const jarak = parseFloat(inputJarak.value);
    const kecepatan = parseFloat(inputKecepatan.value);

    let posisi = 0;
    let waktu = 0;

    while (posisi < jarak) {
        posisi += kecepatan;
        waktu++;
    }
    //jika menggunakan do while
// do{
//     posisi += kecepatan;
//     waktu++;
// }while(posisi<jarak);

    hasil4.textContent = "Waktu yang dibutuhkan untuk mencapai tujuan adalah " + waktu + " detik.";
});




const inputtinggisegitiga = document.getElementById("inputtinggisegitiga");
const inputalas = document.getElementById("inputalas");
const submit5 = document.getElementById("submit5");
const hasil5 = document.getElementById("hasil5");

function hitungLuasSegitiga(tinggi, alas) {
    const luas = (tinggi * alas) / 2;
    return luas;
}
submit5.addEventListener("click", function() {

    const tinggiSegitiga = parseInt(inputtinggisegitiga.value);
    const alasSegitiga = parseInt(inputalas.value);
    
    const luasSegitiga = hitungLuasSegitiga(tinggiSegitiga, alasSegitiga);
    hasil5.textContent="Luas segitiga adalah: " + luasSegitiga;
   
});






