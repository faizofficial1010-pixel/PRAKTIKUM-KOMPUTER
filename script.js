function openModal() { document.getElementById('consultModal').style.display = 'block'; }
function closeModal() { document.getElementById('consultModal').style.display = 'none'; }

document.getElementById('consultForm').onsubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih, data telah diterima.");
    closeModal();
};
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s ease";
    setTimeout(() => { document.body.style.opacity = 1; }, 100);
});
document.getElementById('consultForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const data = {
        kategori: document.getElementById('kategori').value,
        nama: document.getElementById('nama').value,
        deskripsi: document.getElementById('deskripsi').value
    };
    
    console.log("Data Konsultasi:", data);
    alert("Terima kasih " + data.nama + ". Data konsultasi untuk kategori " + data.kategori + " telah dikirim ke admin kami.");
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}