document.addEventListener('DOMContentLoaded', function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "size": {
                "value": 3
            },
            "move": {
                "enable": true,
                "speed": 2
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                }
            }
        }
    });
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

/*modales*/
var chartInstances = {};

function openModal(modalId) {
    console.log('Abriendo modal con ID:', modalId);
    document.getElementById(modalId).style.display = 'block';
    var chartId = modalId.replace('modal', 'chart');
    if (chartInstances[chartId]) {
        console.log('Destruyendo gráfico existente con ID:', chartId);
        chartInstances[chartId].destroy();
    }
    createChart(chartId);
}

function closeModal(modalId) {
    console.log('Cerrando modal con ID:', modalId);
    document.getElementById(modalId).style.display = 'none';
}

function createChart(chartId) {
    console.log('Creando gráfico con ID:', chartId);
    var canvas = document.getElementById(chartId);
    if (canvas) {
        var ctx = canvas.getContext('2d');
        var chartConfig = getChartConfig(chartId);
        chartInstances[chartId] = new Chart(ctx, chartConfig);
    } else {
        console.error('Elemento de lienzo con ID ' + chartId + ' no encontrado.');
    }
}

function getChartConfig(chartId) {
    switch (chartId) {
        case 'chart1':
            return {
                type: 'bar',
                data: {
                    labels: ['Usuarios móviles', 'Otros'],
                    datasets: [{
                        data: [90, 10],
                        backgroundColor: ['#FF6384', '#36A2EB'],
                    }]
                },
                options: {
                    responsive: true,
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'white'
                            }
                        }
                    }
                }
            };
        case 'chart2':
            return {
                type: 'polarArea',
                data: {
                    labels: ['Con página web', 'Solo redes sociales'],
                    datasets: [{
                        label: 'Credibilidad',
                        data: [84, 16],
                        backgroundColor: ['#FF6384', '#FFCE56'],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuad'
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    }
                }
            };
        case 'chart3':
            return {
                type: 'bar',
                data: {
                    labels: ['Tienda física', 'Página web'],
                    datasets: [{
                        label: 'Disponibilidad',
                        data: [12, 24],
                        backgroundColor: ['#FF6384', '#36A2EB'],
                    }]
                },
                options: {
                    responsive: true,
                    animation: {
                        duration: 2000,
                        easing: 'easeOutBounce'
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'white'
                            }
                        },
                        y: {
                            ticks: {
                                color: 'white'
                            }
                        }
                    }
                }
            };
        case 'chart4':
            return {
                type: 'line',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        label: 'Prioridad en SEO',
                        data: [40, 55, 70, 85],
                        backgroundColor: 'rgba(5, 255, 128, 0.8)',
                        borderColor: 'rgba(75, 192, 192, 0.8)',
                        borderWidth: 1,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart'
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    },
                    scales: {
                        x: {
                            ticks: {
                                color: 'white'
                            }
                        },
                        y: {
                            ticks: {
                                color: 'white'
                            }
                        }
                    }
                }
            };
        case 'chart5':
            return {
                type: 'polarArea',
                data: {
                    labels: ['Pymes digitales', 'Pymes tradicionales'],
                    datasets: [{
                        data: [26, 10],
                        backgroundColor: ['#FF6384', '#FFCE56'],
                    }]
                },
                options: {
                    responsive: true,
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    }
                }
            };
        case 'chart6':
            return {
                type: 'bar',
                data: {
                    labels: ['Tráfico Web', 'Tasa de Conversión', 'Tiempo de Permanencia', 'Tasa de Rebote'],
                    datasets: [{
                        label: 'Datos de Análisis Web',
                        data: [60, 2.5, 137, 50],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1,
                        labelColor: 'white'
                    }]
                },
                options: {
                    responsive: true,
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuad'
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: 'white'
                            },
                            title: {
                                display: true,
                                color: 'white',
                                text: 'Porcentaje / Tiempo (segundos)'
                            }
                        },
                        x: {
                            ticks: {
                                color: 'white'
                            },
                            title: {
                                display: true,
                                color: 'white',
                                text: 'Métricas'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    },
                    plugins: [{
                        beforeInit: function(chart) {
                            chart.data.datasets.forEach(function(dataset) {
                                dataset.labelTextColor = dataset.labelColor;
                            });
                        }
                    }]
                }
            };
        case 'chart7':
            return {
                type: 'bar',
                data: {
                    labels: ['Expectativa de respuesta inmediata', 'Otras expectativas'],
                    datasets: [{
                        label: 'Clientes',
                        data: [75, 25],
                        backgroundColor: ['#36A2EB', '#FFCE56'],
                    }]
                },
                options: {
                    responsive: true,
                    indexAxis: 'y',
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutBounce'
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            ticks: {
                                color: 'white'
                            },
                            title: {
                                display: true,
                                color: 'white',
                                text: 'Porcentaje'
                            }
                        },
                        y: {
                            ticks: {
                                color: 'white'
                            },
                            title: {
                                display: true,
                                color: 'white',
                                text: 'Expectativas'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: {
                                color: 'white'
                            }
                        }
                    }
                }
            };
        case 'chart8':
            return {
                type: 'bar',
                data: {
                    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
                    datasets: [{
                        label: 'Ventas de e-commerce (billones USD)',
                        data: [3.5, 4.2, 4.9, 5.5, 6.0, 6.4],
                        backgroundColor: ['#2903fd', '#06f893', '#8f8f8f'],
                        borderColor: ['#2903fd', '#06f893', '#8f8f8f'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                color: 'white'
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return tooltipItem.label + ': ' + tooltipItem.raw;
                                }
                            }
                        },
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuad'
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: 'white'
                            },
                            title: {
                                display: true,
                                color: 'white',
                                text: 'Ventas de e-commerce (billones USD)'
                            }
                        },
                        x: {
                            ticks: {
                                color: 'white'
                            }
                        }
                    }
                }
            };
    }
}
