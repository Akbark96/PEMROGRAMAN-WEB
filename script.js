document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Contoh data pengguna
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk refresh halaman

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            // Jika login berhasil
            message.textContent = 'Login berhasil! Mengarahkan ke halaman utama...';
            message.classList.remove('error');
            message.classList.add('success');

            // Mengarahkan ke halaman lain setelah 2 detik
            setTimeout(() => {
                window.location.href = 'halaman_utama.html'; // Ganti dengan nama file halaman tujuan
            }, 2000);

        } else {
            // Jika login gagal
            message.textContent = 'Nama pengguna atau kata sandi salah.';
            message.classList.remove('success');
            message.classList.add('error');
        }
    });
});