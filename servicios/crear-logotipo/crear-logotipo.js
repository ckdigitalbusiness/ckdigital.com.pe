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
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#ffffff"
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
                "color": "#ffffff",
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

        // Crear gráficos con Chart.js
    
        // Identidad de Marca
        var ctxIdentity = document.getElementById('identityChart').getContext('2d');
        var identityChart = new Chart(ctxIdentity, {
            type: 'pie',
            data: {
                labels: ['Recomendación', 'Otros'],
                datasets: [{
                    label: 'Identidad de Marca',
                    data: [60, 40],
                    backgroundColor: ['#0c9de0', '#e0e0e0']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    legend: {
                        display: true
                    }
                }
            }
        });
    
        // Primera Impresión
        var ctxImpression = document.getElementById('impressionChart').getContext('2d');
        var impressionChart = new Chart(ctxImpression, {
            type: 'pie',
            data: {
                labels: ['Primera Impresión', 'Otros'],
                datasets: [{
                    label: 'Primera Impresión',
                    data: [94, 6],
                    backgroundColor: ['#ff5733', '#e0e0e0']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    legend: {
                        display: true
                    }
                }
            }
        });
    
        // Profesionalismo
        var ctxProfessionalism = document.getElementById('professionalismChart').getContext('2d');
        var professionalismChart = new Chart(ctxProfessionalism, {
            type: 'doughnut',
            data: {
                labels: ['Profesionalismo', 'Otros'],
                datasets: [{
                    label: 'Profesionalismo',
                    data: [75, 25],
                    backgroundColor: ['#28a745', '#e0e0e0']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    legend: {
                        display: true
                    }
                }
            }
        });
    
        // Diferenciación
        var ctxDifferentiation = document.getElementById('differentiationChart').getContext('2d');
        var differentiationChart = new Chart(ctxDifferentiation, {
            type: 'pie',
            data: {
                labels: ['Recuerdo', 'Otros'],
                datasets: [{
                    label: 'Diferenciación',
                    data: [78, 22],
                    backgroundColor: ['#ffc107', '#e0e0e0']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    legend: {
                        display: true
                    }
                }
            }
        });
    
        // Consistencia
        var ctxConsistency = document.getElementById('consistencyChart').getContext('2d');
        var consistencyChart = new Chart(ctxConsistency, {
            type: 'pie',
            data: {
                labels: ['Consistencia', 'Otros'],
                datasets: [{
                    label: 'Consistencia',
                    data: [23, 77],
                    backgroundColor: ['#17a2b8', '#e0e0e0']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    legend: {
                        display: true
                    }
                }
            }
        });
    
        // Recordación
        var ctxRecall = document.getElementById('recallChart').getContext('2d');
        var recallChart = new Chart(ctxRecall, {
            type: 'pie',
            data: {
                labels: ['Identificación', 'Otros'],
                datasets: [{
                    label: 'Recordación',
                    data: [80, 20],
                    backgroundColor: ['#6f42c1', '#e0e0e0']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    legend: {
                        display: true
                    }
                }
            }
        });
    
        // Fidelización
        var ctxLoyalty = document.getElementById('loyaltyChart').getContext('2d');
        var loyaltyChart = new Chart(ctxLoyalty, {
            type: 'doughnut',
            data: {
                labels: ['Fidelización', 'Otros'],
                datasets: [{
                    label: 'Fidelización',
                    data: [89, 11],
                    backgroundColor: ['#e83e8c', '#e0e0e0']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                            }
                        }
                    },
                    legend: {
                        display: true
                    }
                }
            }
        });
    });

/*Sección de carrusel de imágenes*/
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentSlide = 0;

    // Clonar las primeras y últimas tres diapositivas para crear un efecto continuo
    const cloneFirstSlides = slides.slice(0, 3).map(slide => slide.cloneNode(true));
    const cloneLastSlides = slides.slice(-3).map(slide => slide.cloneNode(true));
    
    cloneFirstSlides.forEach(clone => track.appendChild(clone));
    cloneLastSlides.forEach(clone => track.insertBefore(clone, slides[0]));

    currentSlide = 3; // Iniciar en la cuarta diapositiva para mostrar las tres primeras originales
    track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';

    const moveToNextSlide = () => {
        track.style.transition = 'transform 0.5s ease-in-out';
        currentSlide++;
        track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';

        // Cuando llegamos al final, reiniciamos sin transición
        if (currentSlide === slides.length + 3) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentSlide = 3;
                track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';
            }, 500); // Retardo para igualar el tiempo de la transición
        }
    };

    const moveToPrevSlide = () => {
        track.style.transition = 'transform 1.5s ease-in-out';
        currentSlide--;
        track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';

        // Cuando llegamos al inicio, reiniciamos sin transición
        if (currentSlide === 2) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentSlide = slides.length + 2;
                track.style.transform = 'translateX(-' + slideWidth * currentSlide + 'px)';
            }, 500); // Retardo para igualar el tiempo de la transición
        }
    };

    setInterval(() => {
        moveToNextSlide();
    }, 8000); // Cambia cada 3 segundos

    // Event listeners for manual controls
    document.querySelector('.carousel-control.next').addEventListener('click', moveToNextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', moveToPrevSlide);


