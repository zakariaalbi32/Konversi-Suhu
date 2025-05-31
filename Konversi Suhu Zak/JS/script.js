// Ambil elemen input dan output
const inputSuhu = document.getElementById("input-suhu");
const btnKonversi = document.querySelector(".konversi");
const btnReset = document.querySelector(".reset");
const btnReverse = document.querySelector(".reverse");
const kolomHasil = document.querySelectorAll("textarea")[0];
const kolomPenjelasan = document.querySelectorAll("textarea")[1];

// Fungsi konversi Celcius ke Fahrenheit
function konversiSuhu() {
  const nilaiInput = parseFloat(inputSuhu.value);
  if (isNaN(nilaiInput)) {
    kolomHasil.value = "";
    kolomPenjelasan.value = "Masukkan angka yang valid!";
    return;
  }

  const hasil = (nilaiInput * 9) / 5 + 32;
  kolomHasil.value = hasil.toFixed(2);
  kolomPenjelasan.value = `${nilaiInput}°C x (9/5) + 32 = ${hasil.toFixed(
    2
  )}°F`;
}

// Fungsi reset
function resetSemua() {
  inputSuhu.value = "";
  kolomHasil.value = "";
  kolomPenjelasan.value = "";
}

// Fungsi reverse (tidak diminta oleh aturan, tapi tetap diperbaiki)
function reverseKonversi() {
  const nilaiInput = parseFloat(inputSuhu.value);
  if (isNaN(nilaiInput)) {
    kolomHasil.value = "";
    kolomPenjelasan.value = "Masukkan angka yang valid!";
    return;
  }

  const hasil = ((nilaiInput - 32) * 5) / 9;
  kolomHasil.value = hasil.toFixed(2);
  kolomPenjelasan.value = `(${nilaiInput}°F - 32) x 5/9 = ${hasil.toFixed(
    2
  )}°C`;
}

// Tambahkan event listener
btnKonversi.addEventListener("click", konversiSuhu);
btnReset.addEventListener("click", resetSemua);
btnReverse.addEventListener("click", reverseKonversi);
