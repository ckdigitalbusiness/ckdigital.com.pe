document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.servicios');
    let index = 0;
    // Evento clic para mostrar/ocultar el menú de navegación y el fondo opaco
    var floatingIcon = document.getElementById("floating-icon");
    var tabs = document.getElementById("tabs");
    var modalBackground = document.getElementById("modal-background");

    floatingIcon.addEventListener("click", function() {
        tabs.style.display = (tabs.style.display === "block") ? "none" : "block";
        modalBackground.style.display = (modalBackground.style.display === "block") ? "none" : "block";
        document.body.classList.toggle('modal-open');
    });

    // Función para cargar contenido dinámicamente en las pestañas
    function mostrarContenido(tab) {
        if (!tab) {
            console.error("El nombre de la pestaña no está definido.");
            return;
        }

        if (tab === "inicio") {
            window.location.href = "/";
            return;
        }

        var url = "/" + tab;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 400) {
                var tabContent = document.getElementById("tab-content");
                tabContent.innerHTML = xhr.responseText;
            } else {
                console.error("Error al cargar el contenido de la pestaña.");
            }
        };
        xhr.onerror = function() {
            console.error("Error de conexión al realizar la solicitud.");
        };
        xhr.send();
    }
});
/* 2.BANNER PARTE SUPERIOR */
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var banner = document.querySelector('.banner');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        banner.classList.add('visible');
    } else {
        banner.classList.remove('visible');
    }
}

