//şifrele
function encrypt(text) {
    let sifrelenmis = '';
    for (let i = 0; i < text.length; i++) {
        sifrelenmis += String.fromCharCode(text.charCodeAt(i) + 1);
    }
    return sifrelenmis;
}

// buton tıklayınca
document.querySelector('.button1').addEventListener('click', function() {
    let inputText = document.getElementById('ŞifreText').value;
    let encryptedText = encrypt(inputText);
    document.getElementById('ÇikişText').value = encryptedText;
});

// Temizle
document.querySelector('.button3').addEventListener('click', function() {
    document.getElementById('ŞifreText').value = '';
    document.getElementById('ÇikişText').value = '';
});
