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
//sección 1.3. pestañas
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
//sección 2. formulario//
    const codigoPaisInput = document.getElementById('codigoPais');
    const listaPaises = document.querySelector('.lista-paises');
  
    codigoPaisInput.addEventListener('click', function () {
      listaPaises.style.display = listaPaises.style.display === 'none' ? 'block' : 'none';
    });
  
    listaPaises.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
        const codigoArea = e.target.getAttribute('data-codigo-area');
        codigoPaisInput.value = codigoArea;
        listaPaises.style.display = 'none';
      }
    });
  
    document.addEventListener('click', function (e) {
      if (!codigoPaisInput.contains(e.target) && !listaPaises.contains(e.target)) {
        listaPaises.style.display = 'none';
      }
    });

// Mostrar lista de países al hacer clic
document.getElementById('codigoPais').addEventListener('click', function() {
  document.querySelector('.lista-paises').style.display = 'block';
});

// Seleccionar código de país
document.querySelectorAll('.lista-paises li').forEach(function(item) {
  item.addEventListener('click', function() {
    document.getElementById('codigoPais').value = this.getAttribute('data-codigo-area');
    document.querySelector('.lista-paises').style.display = 'none';
  });
});

// Ocultar lista de países al hacer clic fuera
window.addEventListener('click', function(e) {
  if (!document.querySelector('.codigo-area-panel').contains(e.target)) {
    document.querySelector('.lista-paises').style.display = 'none';
  }
});

event.preventDefault(); // Evita que el formulario se envíe automáticamente

// Mostrar el mensaje solo cuando se envíe 
document.getElementById('mensaje').classList.remove('oculto');

// Aquí puedes agregar lógica adicional, como enviar el formulario a través de AJAX

//mostrar error si el formulario esta mal ingresado//
let isValid = true;
const fields = ['Nombre', 'Empresa', 'Correo', 'Teléfono', 'Mensaje', 'Servicio'];
fields.forEach(field => {
   const input = document.getElementById(field);
   const error = input.nextElementSibling;
   if (!input.value) {
      isValid = false;
      error.style.display = 'block';
   } else {
      error.style.display = 'none';
   }
});

if (!isValid) {
   event.preventDefault();
}
