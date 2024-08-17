document.addEventListener('DOMContentLoaded', () => {
    // 1. menu Evento clic para mostrar/ocultar el menú de navegación y el fondo opaco
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


    // 2. Selecciona todos los elementos del menú
    const menuItems = document.querySelectorAll('.menu-item');
    
    // Selecciona todos los iconos dentro del contenedor de estadísticas
    const icons = document.querySelectorAll('.icon-stats .icon');
    
    // Crea un Intersection Observer para animar los iconos cuando entran en la vista
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { threshold: 0.5 }); // El umbral define cuánto del elemento debe ser visible antes de disparar la animación

    // Observa cada icono para aplicar la animación cuando entra en la vista
    icons.forEach(icon => {
        observer.observe(icon);
    });

    // Selecciona el contenedor de contenido y todos los elementos de contenido
    const contentContainer = document.querySelector('.content-container');
    const contents = document.querySelectorAll('.content');

    // Añade un event listener a cada elemento del menú para mostrar el contenido correspondiente
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            contents.forEach(content => {
                if (content.id === targetId) {
                    content.classList.add('active');
                    contentContainer.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Añade un event listener al contenedor de contenido para cerrar el contenido cuando se hace clic fuera de él
    contentContainer.addEventListener('click', (e) => {
        if (e.target === contentContainer) {
            contentContainer.classList.remove('active');
            contents.forEach(content => content.classList.remove('active'));
        }
    });

