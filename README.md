# Docker Multistage Builds: Optimiza la construcción de tus imágenes de Docker 👨‍💻👨‍💻👨‍💻

En este vídeo verás como utilizar Multistage Builds, una característica de Docker, que nos permite optimizar nuestras imágenes. Esto lo lograremos diviendo los archivos Dockerfile's en múltiples stages, en donde cada stage se define con una capa FROM. Esto es algo que tiene muchas ventajas, primero porque podemos tener diferentes imágenes en las que cada una ralice una tarea diferente y segundo porque de cada stage solo requerimos copiar aquello que necesitemos, lo demás lo descartará Docker automáticamente logrando así que nuestra imagen resultante no esté libre del uso de recursos innecesarios.

## Comprendiendo el problema

En el sitio oficial de Docker, explican el problema de la siguiente manera:
> Una de las cosas más desafiantes de la creación de imágenes es mantener el tamaño de la imagen bajo. Cada instrucción en el Dockerfile agrega una capa a la imagen, y debe recordar limpiar cualquier artefacto que no necesite antes de pasar a la siguiente capa. Para escribir un Dockerfile realmente eficiente, tradicionalmente ha necesitado emplear trucos de shell y otra lógica para mantener las capas lo más pequeñas posible y asegurarse de que cada capa tenga los artefactos que necesita de la capa anterior y nada más. En realidad, era muy común tener un Dockerfile para usar en desarrollo (que contenía todo lo necesario para construir su aplicación) y uno más reducido para usar en producción, que solo contenía su aplicación y exactamente lo que se necesitaba para ejecutarla. Esto se ha denominado "patrón de construcción". Mantener dos Dockerfiles no es ideal. - [Docker Docs](https://docs.docker.com/develop/develop-images/multistage-build/)

## Solución

Para solucionar este problema, se añadió la característica Multistage Builds a Docker, con la cúal podemos crear nuestras imágenes usando como base otras imágenes, en la que cada imagen es un stage (Recuerde que anteriormente no era popsible crear una imagen a partir de múltiples imágenes en un mismo Dockerfile, por lo que solo podíamos usar una imagen base).  Cuando un stage finaliza, no debemos preocuparnos nosotros por limpiar los artefactos, que ya no utilizaremos, debido a que Docker se encarga de ellos y a nosotros solo debe importarnos aquellos artefactos que si requerimos y podemos copiarlos de un stage a otro hasta obtener el resultado final deseado 😁.

Este vídeo podrás encontrarlo en el siguiente enlace [Docker Multistage Builds](https://youtu.be/wtOS1_JHRLM) 👨‍💻🎉. Si te gusta este vídeo, por favor deja tu like y suscríbete si deseas recibir más contenido relacionado al desarrollo de software.

Puedes encontrar más vídeos como este en mi canal de YouTube [Soymichel Dev](https://youtube.soymichel.dev) 👨‍💻👩‍💻👩‍💻.

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
