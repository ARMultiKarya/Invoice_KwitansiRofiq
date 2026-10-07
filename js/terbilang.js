/**
 * Indonesian Terbilang Converter
 * Converts numeric amounts to Indonesian spoken words.
 */

function terbilangAngka(n) {
    n = Math.abs(Math.floor(n));
    const satuan = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
    
    if (n < 12) {
        return satuan[n];
    } else if (n < 20) {
        return terbilangAngka(n - 10) + " Belas";
    } else if (n < 100) {
        return terbilangAngka(Math.floor(n / 10)) + " Puluh " + terbilangAngka(n % 10);
    } else if (n < 200) {
        return "Seratus " + terbilangAngka(n - 100);
    } else if (n < 1000) {
        return terbilangAngka(Math.floor(n / 100)) + " Ratus " + terbilangAngka(n % 100);
    } else if (n < 2000) {
        return "Seribu " + terbilangAngka(n - 1000);
    } else if (n < 1000000) {
        return terbilangAngka(Math.floor(n / 1000)) + " Ribu " + terbilangAngka(n % 1000);
    } else if (n < 1000000000) {
        return terbilangAngka(Math.floor(n / 1000000)) + " Juta " + terbilangAngka(n % 1000000);
    } else if (n < 1000000000000) {
        return terbilangAngka(Math.floor(n / 1000000000)) + " Miliar " + terbilangAngka(n % 1000000000);
    } else if (n < 1000000000000000) {
        return terbilangAngka(Math.floor(n / 1000000000000)) + " Triliun " + terbilangAngka(n % 1000000000000);
    }
    return "";
}

function convertToTerbilang(amount) {
    if (amount === undefined || amount === null || isNaN(amount) || amount === 0) {
        return "Nol Rupiah";
    }

    let num = Number(amount);
    let result = terbilangAngka(num).trim().replace(/\s+/g, ' ');
    
    if (!result) return "";

    // Format Title Case e.g., "Tiga Puluh Juta Rupiah"
    return result + " Rupiah";
}

// Utility to format number as Rupiah currency string (e.g. 30000000 -> "30.000.000,00")
function formatRupiah(amount, includeSymbol = true) {
    if (isNaN(amount) || amount === "" || amount === null) amount = 0;
    let num = Number(amount);
    let formatted = num.toLocaleString('id-ID', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    return includeSymbol ? `Rp ${formatted}` : formatted;
}
