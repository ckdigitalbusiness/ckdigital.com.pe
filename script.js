
// Definir una función para saludar
function saludar() {
    alert('¡Hola desde el script externo!');
}
//1. imagen//
const images = document.querySelectorAll('.servicios-carousel-img');
let currentImageIndex = 0;

function changeImage() {
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.opacity = 1;
}

setInterval(changeImage, 4000); // Cambia la imagen cada 4 segundos
// indicadores de objetivos//
// Función para los contadores animados con porcentaje
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    const counterAnimation = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const updateCounter = () => {
                const current = +counter.querySelector('.counter-number').textContent.replace('%', '');
                const increment = target / 9000; // Ajusta la velocidad del contador aquí
                
                if (current < target) {
                    counter.querySelector('.counter-number').textContent = `${Math.ceil(current + increment)}%`;
                    setTimeout(updateCounter, 20);
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

/* 4.LOGO EN LA PARTE SUPERIOR DENTRO DEL BANNER  */
// Función para manejar el desplazamiento del logo y mostrar/ocultar el encabezado superior
window.addEventListener('scroll', function() {
    var header = document.querySelector('.logo-header'); // Obtener el encabezado (logo)
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.top = "0"; // Mostrar el encabezado cuando se desplaza hacia abajo(logo)
    } else {
        header.style.top = "-100px"; // Ocultar el encabezado cuando se desplaza hacia arriba(logo)
    }
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

/* 5.FORMULARIO */
// Script JavaScript para mostrar/ocultar el formulario al hacer clic en la pestaña
document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formulario");
    var textoFlotante = document.getElementById("floating-text"); // Botón para mostrar el formulario

    // Mostrar/ocultar formulario al hacer clic en el texto flotante
    textoFlotante.addEventListener("click", function() {
        formulario.style.display = (formulario.style.display === "block") ? "none" : "block";
});

    // Establecer valor por defecto del código de país
    var codigoPaisInput = document.getElementById("codigoPais");
    var codigoPeru = "+51";
    codigoPaisInput.value = codigoPeru;

    // Mostrar lista de países al hacer clic en el input
    codigoPaisInput.addEventListener("click", function() {
        document.querySelector(".lista-paises").style.display = "block";
    });

    // Seleccionar un país de la lista y ocultar la lista
    var listaPaises = document.querySelector(".lista-paises");
    var paises = document.querySelectorAll(".lista-paises li");

    paises.forEach(function(pais) {
        pais.addEventListener("click", function() {
            var codigoArea = this.getAttribute("data-codigo-area");
            codigoPaisInput.value = codigoArea;
            listaPaises.style.display = "none";
        });
    });
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtener los datos del formulario
        var formData = new FormData(formulario);

        // Realizar la solicitud AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/formulario");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log("Formulario enviado correctamente");
                // Mostrar mensaje de confirmación
                mensaje.classList.remove("oculto");
            } else {
                console.error("Error al enviar el formulario");
                // Aquí puedes manejar errores de envío del formulario
            }
        };

        xhr.onerror = function() {
            console.error("Error de conexión al enviar el formulario");
            // Aquí puedes manejar errores de conexión
        };

        // Convertir los datos del formulario a JSON y enviarlos
        xhr.send(JSON.stringify(Object.fromEntries(formData.entries())));
    });

    // Ocultar lista de países al hacer clic fuera del input o la lista
    document.addEventListener("click", function(event) {
        if (!codigoPaisInput.contains(event.target) && !listaPaises.contains(event.target)) {
            listaPaises.style.display = "none";
        }
    });
  });



/* 9. Chat bot */
// Inicializa Socket.IO y establece la conexión con el servidor
const socket = io();

// Maneja la conexión exitosa al servidor de Socket.IO
socket.on('connect', () => {
    console.log('Conectado al servidor de Socket.IO');
});

// Función para enviar el mensaje al chatbot utilizando Socket.IO
function sendMessageToChatbot(message) {
    mostrarMensajeUsuario(message); // Mostrar el mensaje del usuario en el chat
    socket.emit('chat message', message);
    console.log('Mensaje enviado al servidor:', message);
    focusChatInput(); // Enfocar automáticamente la caja de entrada después de enviar el mensaje(importante)
}

// Función para enfocar automáticamente la caja de entrada de chat
function focusChatInput() {
    document.getElementById('user-input').focus();
}


// Función para mostrar los mensajes del usuario en la interfaz de usuario
function mostrarMensajeUsuario(mensaje) {
    var chatbox = document.getElementById('chatbox');
    var mensajeElemento = document.createElement('div');
    mensajeElemento.textContent = 'Usuario: ' + mensaje;
    mensajeElemento.classList.add('mensaje-usuario');
    chatbox.appendChild(mensajeElemento);

}
// Función para simular el efecto de escritura
function efectoEscritura(texto) {
    var chatbox = document.getElementById('chatbox');
    var respuestaElemento = document.createElement('div');
    respuestaElemento.classList.add('mensaje-chatbot');
    chatbox.appendChild(respuestaElemento);

    let i = 0;
    function escribir() {
        if (i < texto.length) {
            respuestaElemento.textContent += texto.charAt(i);
            i++;
            setTimeout(escribir, 50); // Ajusta este valor para cambiar la velocidad de escritura
        }
    }

    escribir();
}

// Maneja los mensajes del servidor y muestra la respuesta en la interfaz de usuario
socket.on('chat message', function(msg) {
    console.log('Respuesta del servidor:', msg);
    mostrarRespuestaConRetraso(msg);
});

// Abre el chatbot
function openChatbot() {
    document.getElementById('chatbot-container').style.display = 'block';
    console.log('Chatbot abierto');
}
// Función para mostrar la respuesta del chatbot con un efecto de retraso
function mostrarRespuestaConRetraso(mensaje) {
    setTimeout(() => {
        efectoEscritura(mensaje);
    }, 1000); // Ajusta este valor para cambiar el retraso antes de mostrar la respuesta
}

// Cierra el chatbot
function closeChatbot() {
    document.getElementById('chatbot-container').style.display = 'none';
    console.log('Chatbot cerrado');
}

// Escucha el clic en el botón de cerrar el chatbot
document.getElementById('close-chatbot-btn').addEventListener('click', closeChatbot);

// Escucha el clic en el botón de abrir el livechat
document.getElementById('open-livechat-btn').addEventListener('click', function() {
    document.getElementById('livechat-popup').style.display = 'block';
    document.getElementById('chatbot-container').style.display = 'none';
    console.log('Livechat abierto');
});

// Escucha el clic en el botón de enviar
document.getElementById('send-btn').addEventListener('click', function() {
    console.log('Se hizo clic en el botón enviar');

    var message = document.getElementById('user-input').value;
    console.log('Mensaje a enviar:', message);

    if (message.trim() !== '') {
        sendMessageToChatbot(message);
        document.getElementById('user-input').value = '';
        console.log('Campo de entrada limpiado');
    } else {
        console.log('Mensaje vacío, no se envió');
    }
});
//chat in live//
// Evento para abrir WhatsApp al hacer clic en el botón
document.getElementById('open-livechat-btn').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=%2B51933838792', '_blank');
});







    






