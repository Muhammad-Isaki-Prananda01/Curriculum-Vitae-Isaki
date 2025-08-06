AOS.init({
  duration: 800, // Durasi animasi dalam milidetik
  once: true,    // Apakah animasi hanya terjadi sekali
});

// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const themeKey = 'theme-preference';

// Fungsi untuk menerapkan tema yang tersimpan
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
};

// Cek preferensi tema yang tersimpan saat halaman dimuat
const savedTheme = localStorage.getItem(themeKey);
if (savedTheme) {
    applyTheme(savedTheme);
}

// Event listener untuk tombol toggle
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Simpan preferensi baru ke localStorage
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem(themeKey, currentTheme);
});