// Inicialización de partículas
document.addEventListener('DOMContentLoaded', function () {
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#f5d104"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#f5d104",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});
})

// 6.social-media-manager.js
// Función para los contadores animados con porcentaje
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    const counterAnimation = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const updateCounter = () => {
                const current = +counter.querySelector('.counter-number').textContent.replace('%', '');
                const increment = target / 200; // Ajusta la velocidad del contador aquí
                
                if (current < target) {
                    counter.querySelector('.counter-number').textContent = `${Math.ceil(current + increment)}%`;
                    setTimeout(updateCounter, 10);
                } else {
                    counter.querySelector('.counter-number').textContent = `${target}%`;
                }
            };
            updateCounter();
        });
    };

    // Ejecutar la animación cuando el contenedor está en la vista
    const scrollHandler = () => {
        const rect = document.querySelector('.stats-container').getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            counterAnimation();
            window.removeEventListener('scroll', scrollHandler);
        }
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler();  // Ejecutar en caso de que el contenedor ya esté en vista
});


// Código para el botón de AR
const arContainer = document.querySelector('#ar-container a');
arContainer.addEventListener('click', () => {
    window.open(arContainer.href, '_blank');
});

/* 7.ESTILO PESTAÑAS */
var floatingIcon = document.getElementById("floating-icon");
var tabs = document.getElementById("tabs");
var modalBackground = document.getElementById("modal-background");

floatingIcon.addEventListener("click", function() {
    tabs.style.display = (tabs.style.display === "block") ? "none" : "block";
    modalBackground.style.display = (modalBackground.style.display === "block") ? "none" : "block";
    document.body.classList.toggle('modal-open');
});

// Función para mostrar el contenido de la pestaña
function mostrarContenido(tab) {
// Verificar que tab no esté vacío o indefinido
if (!tab) {
    console.error("El nombre de la pestaña no está definido.");
    return;
}

// Si es la pestaña "Inicio", redirigir a la página principal
if (tab === "inicio") {
    window.location.href = "/";
    return;
}
}
// Construir la URL correspondiente al contenido de la pestaña
var url = "/" + tabs;
// Realizar solicitud AJAX para cargar el contenido de la pestaña
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
        // Actualizar el contenido del contenedor con la respuesta del servidor
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