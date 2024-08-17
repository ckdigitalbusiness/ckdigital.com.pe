const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const port = 3000;

// Middleware para analizar cuerpos de solicitud JSON y urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, )));

// Ruta para la página principal
// Ruta para servir tu página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});  
  app.get('/servicios', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicios', 'servicios.html'));
  });
  app.get('/servicios/crear-pagina-web', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicios', 'crear-pagina-web', 'crear-pagina-web.html'));
  });
  app.get('/servicios/crear-logotipo', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicios', 'crear-logotipo', 'crear-logotipo.html'));
  });
  app.get('/servicios/social-media-manager', (req, res) => {
    res.sendFile(path.join(__dirname,'servicios', 'social-media-manager', 'social-media-manager.html'));
  });
  app.get('/servicios/Seo', (req, res) => {
    res.sendFile(path.join(__dirname,'servicios', 'Seo', 'Seo.html'));
  });
  app.get('/servicios/sem', (req, res) => {
    res.sendFile(path.join(__dirname, 'servicios', 'sem', 'sem.html'));
  });
  app.get('/quienes-somos', (req, res) => {
    res.sendFile(path.join(__dirname,  'quienes-somos', 'quienes-somos.html'));
  });
  app.get('/contactanos', (req, res) => {
    res.sendFile(path.join(__dirname,  'contactanos','contactanos.html'));
  });
app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);
  
    // Enviar respuesta HTML personalizada
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Respuesta del Formulario</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
          }
          .message {
            padding: 20px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          .message h1 {
            font-size: 2em;
            color: #333;
          }
          .message p {
            font-size: 1.2em;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="message">
          <h1>Formulario Enviado Correctamente</h1>
          <p>Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
        </div>
      </body>
      </html>
    `);
  });
  

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));  // Formulario apunta el html form action=/formulario
  // Configuración del servidor HTTP con Express
  const server = http.createServer(app);
  
  //8. formulario  Configurar bodyParser para manejar datos del formulario codificados como application/x-www-form-urlencoded
  // Middleware para parsear el cuerpo de las solicitudes del formulario
  app.post('/formulario', (req, res) => {
  console.log('Datos del formulario recibidos:', req.body);
  // Aquí puedes procesar los datos del formulario y enviar una respuesta al cliente si es necesario
      res.send('Formulario recibido, ¡pronto nos comunicaremos con usted!'); // Envía una respuesta al cliente
  });
  
  
  // 9. chatbot Servir archivos estáticos desde la carpeta donde se encuentra 'server.js'
  app.use(express.static(__dirname));
  
  // Servir archivos estáticos desde otras carpetas dentro de 'ckdigital'
  app.use('/Bot', express.static(path.join(__dirname, 'Public', 'Bot')));
  app.use('/Brochure', express.static(path.join(__dirname, 'Public', 'Brochure')));
  app.use('/favicon.io', express.static(path.join(__dirname, 'Public', 'favicon.io')));
  app.use('/Fonts', express.static(path.join(__dirname, 'Public', 'Fonts')));
  app.use('/iconos', express.static(path.join(__dirname, 'Public', 'iconos')));
  app.use('/images', express.static(path.join(__dirname, 'Public', 'images')));
  app.use('/logo', express.static(path.join(__dirname, 'Public', 'logo')));
  
  // Configurar la ruta para servir socket.io.js desde node_modules
  app.get('/socket.io/socket.io.js', (req, res) => {
      res.sendFile(path.join(__dirname, 'node_modules', 'socket.io', 'client-dist', 'socket.io.js'));
  });
  

  // Configuración de Socket.io
  const io = socketIo(server);
  
  // Manejo de eventos de Socket.io
  io.on('connection', (socket) => {
      console.log('Nuevo usuario conectado');
  
      socket.on('chat message', (msg) => {
          console.log('Mensaje recibido:', msg);
  
          // Procesamiento del mensaje y generación de respuesta
          const botResponse = getBotResponse(msg);
  
          // Envío de la respuesta al cliente que envió el mensaje
          socket.emit('chat message', botResponse);
      });
  
      socket.on('disconnect', () => {
          console.log('Usuario desconectado');
      });
  });
  
  // Función para generar la respuesta del bot hola
  // Función para generar la respuesta del bot
  function getBotResponse(message) {
      const lowerCaseMessage = message.toLowerCase();
      
      if (lowerCaseMessage.includes("hola")) {
          return "¡Hola! ¿En qué puedo ayudarte?";
                 
      } else if (lowerCaseMessage.includes("servicio")) {
          return "Tenemos los siguientes servicios:\n" +
                 "1. Creación de página web\n" +
                 "2. Creación de Logo\n" +
                 "3. Configuración de redes sociales\n" +
                 "4. Configuración de Google Business\n" +
                 "5. Creación de contenidos para Redes\n" +
                 "6. Estrategias SEM\n" +
                 "7. Posicionamiento SEO\n" +
                 "8. Brochure Corporativo\n" +
                 "9. Tarjeta Corporativa\n" +
                 "10. Edición de videos\n" +
                 "¿En cúal estas interesado?";
  
              } else if (lowerCaseMessage.includes("clima")) {
                  return "El clima de hoy es soleado y cálido.";
              } else if (lowerCaseMessage.includes("horario")) {
                  return "Nuestro horario de atención es de lunes a viernes, de 9 AM a 6 PM.";
              } else if (lowerCaseMessage.includes("ubicación")) {
                  return "Estamos ubicados en la calle Principal, número 123, Ciudad.";         
  
      } else {
          return "Lo siento, no entiendo tu mensaje.";
      }
  }
  // Iniciar el servidor
  server.listen(port, () => {
      console.log(`Servidor ejecutándose en http://localhost:${port}`);
  });
  