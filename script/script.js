document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    });

    // ✅ Fecha o menu ao clicar em um link
    document.querySelectorAll('#sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
});
