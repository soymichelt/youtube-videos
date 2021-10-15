# 👨‍💻 Optimiza tus app's distribuyendo la carga mediante [Load Balancer con Docker y Nginx](https://youtu.be/IrPT8zH4qVM) | soymichel.dev

Cuando estamos desarrollando software con un enfoque monolítico, y este ha llegado a crecer tanto en funcionalidades, como en la cantidad de usuarios que acceden a él, nos empezamos a encontrar algunos problemas como la ralentización de los procesos del sistema, el servidor por momentos deja de responder nuevas peticiones porque se queda sin recursos o que nuestros servicio simplemente crashea quedándonos fuera de línea. En este punto lo mejor que podríamos hacer quizás sería cambiar el enfoque monolítico, a un enfoque de micro-servicios que nos permita escalar verticalmente. El problema con esto es que un nuevo desarrollo tomará mucho tiempo de trabajo y una nueva reestructuración del personal encargado; y el sistema debe seguir funcionando. Es por eso que en este vídeo te enseñaré como levantar varias copias del backend de una aplicación y balancear la carga de trabajo usando Nginx y Docker.

Estaremos corriendo nuestra API de ExpressJS en múltiples contenedores de Docker de manera independiente, pero accederemos a estos mediante un contenedor con NGINX que estará al frente recibiendo las peticiones y las redirigirá a los contenedores de API's, esto es lo que se conoce como **Load Balancing**. Mientras los contenedores de API's se estarán conectando a un contenedor de SQL Server, en donde alojaremos nuestra base de datos; aquí cabe mencionar que esto no es lo mejor, porque el cuello de botella estaría en la base de datos, lo ideal sería configurar un Cluster de la base de datos con escalado vertical o usar un servicio de base de datos de alta disponibilidad y rendimiento en la nube, como **Azure SQL Database**. Al final obtendremos una serie de servicios que estarán trabajando de manera conjunta, dando la sensación de que fuera uno solo, esto se conoce como Cluster.

[Haz click aquí para ver el vídeo](https://youtu.be/IrPT8zH4qVM). Si te gusta este vídeo, por favor deja tu like y suscríbete ya que pronto estaré trayendo más contenido sobre estrategias de escalado vertical, tales como la configuración de cluster de bases de datos, balancear la carga de un sitio entre diferentes versiones de la app, configuración de microservicios, arquitectura serverless y más 🤘👌.

Puedes encontrar más vídeos como este en mi canal de [YouTube Soymichel Dev](https://youtube.soymichel.dev) 👨‍💻👩‍💻👩‍💻.

# Información de Contacto
- [LinkedIn](https://www.linkedin.com/in/soymichelt)
- [WhatsApp](https://wa.me/50583671719)

Visita mi sitio web [https://soymichel.dev](https://soymichel.dev)

<p align="center">
  <a href="https://soymichel.dev"><b>Michel Roberto Traña Tablada</b></a>
  <br />
  Software Engineer | FullStack Developer
  <br />
  <br />
  <img width="48" height="48" src="https://github.com/soymichelt/CV/raw/master/public/res/circleProfile64x64.png" alt="Michel Roberto Trañata Tablada | soymichel.dev">
</p>
