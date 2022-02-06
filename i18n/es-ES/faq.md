## ¿Qué es Genshin Wishes?
Genshin Wishes es un sitio gratuito [con codificación pública](https://github.com/genshin-wishes) que facilita la conservación y la visualización de tus deseos fuera del juego. Está siendo creado y mantenido por [Colin Auberger](https://www.linkedin.com/in/colin-auberger/) y [Jimmy Vergerolle](https://vergerolle.fr).

- Respalda tus deseos siempre y cuando lo desees
- Visualiza tu pity en todos los banners de evento y permanentes
- Navega a través de tus deseos con filtros elaborados
- Visualiza estadísticas detalladas de tus deseos (para los nerds como nosotros a quienes nos gusta verlas 🤓)

## ¿Cómo lográis obtener mis deseos dentro del juego?
Nosotros simplemente los obtenemos de tu historial de deseos. El historial de deseos en Genshin Impact es una página web mostrada en el juego, así que incluso tú podrías ingresar si tuvieras el enlace. Lo único que necesitamos es la llave proveída por el juego. Esta llave temporal es el enlace que solicitamos para importar tus deseos.

## ¿Cómo puedo encontrar la llave para importar mis deseos?

> 📢 Desde la version 2.3 de Genshin Impact, la URL proporcionada por el método anterior a dejado de funcionar.

### PC
1. Abre Genshin Impact en tu PC
2. Ve a tu Historial de Deseos y espera a que cargue
3. Presiona la tecla de Windows
4. En el menu de busqueda escribe "Powershell" y abre "Windows Powershell"
5. Copia el siguiente código y pégalo en la ventana de “Windows Powershell”
```
iex ((New-Object System.Net.WebClient).DownloadString('https://raw.githubusercontent.com/genshin-wishes/genshin-wishes-getlink/main/global.ps1'));
```
6. Presiona ENTER, un link se habrá copiado en tu portapapeles. Presiona ENTER otra vez para redirigirte a Genshin Wishes
7. Pega tu enlace y súbelo

### Android
1. Ve a tu Historial de Deseos
2. Desactiva tu WiFi y tu conexión de datos móviles
3. Presiona el botón de actualizar en la esquina superior derecha
4. La página debería dar un error, mostrando una URL
5. Copia la URL y pégala en Genshin Wishes

### iOS
> ✳️ Antes de usar este metodo necesitas leer nuestra guía sobre [como instalar y usar la app Stream](https://drive.google.com/file/d/14Q_6v60qLPunrpmA9Bf1KlvsKhaRyPzz/view?usp=sharing).

1. Abre Genshin Impact y ve a la pestaña de Gachapón
2. Mientras Genshin Impact este abierto, ve a Stream y presiona “Sniff Now”
3. Vuelve a Genshin Impact y abre tu Historial de Deseos
4. Cuando tu lista de deseos haya cargado vuelve a Stream y presiona “Stop Sniffing”
5. Presiona “Sniff History” y elige la primera opción que te sale en la lista
6. Presiona la “Request” que empieza por 'GET https://hk4e-api-os...'
7. Presiona en la pestaña de “Request”
8. Presiona el texto que empieza por "GET /event/gacha_info..."
9. Finalmente presiona “Copiar URL” y pégala en Genshin Wishes

### Consolas
> ⚠️ Desde la version 2.3 de Genshin Impact, la URL proporcionada por el método anterior a dejado de funcionar.

Aun así, puedes [enlazar tu cuenta de PlayStation con una cuenta de miHoYo](https://www.hoyolab.com/article/533197) y usar el método de PC/Android/iOS.

## ¿Es seguro de usar?
Sí. Como jugadores de Genshin Impact nosotros también nos preocupamos mucho por la seguridad de las cuentas.
- **No necesitamos que instales nada** en tu ordenador o teléfono móvil
- **No necesitamos la contraseña de tu cuenta de Genshin Impact**
- Tu llave temporal no se almacena en nuestros servidores, sino **en tu dispositivo**
- Cada enlace solo es válido por 24 horas, después de este tiempo tendrás que crear uno nuevo para mantener tus deseos sincronizados
- Este token NO nos permite ingresar a tu cuenta de ninguna forma
- Posees la opción de borrar toda tu información guardada en nuestros servidores siempre que lo desees (incluyendo los deseos)
- Usamos encriptación SSL

## ¿Existe algún riesgo de ser baneado por usar esta herramienta?
Absolutamente no. Usamos los mismos métodos que el juego para indagar en tus deseos (usando la API pública de MiHoYo), así que no hay ningún riesgo de ser baneado. Lo hemos usado en nuestras propias cuentas ya por meses. MiHoYo ha hecho algunas [declaraciones acerca de herramientas de terceros](https://genshin.mihoyo.com/en/news/detail/5763), y nuestra herramienta es legítima.

## ¿Qué lenguajes posee?
El sitio se mantiene en Inglés y Francés, los otros lenguajes son mantenidos por [contribuidores](https://github.com/genshin-wishes/genshin-wishes-i18n/blob/main/CONTRIBUTORS.md) en [este proyecto](https://github.com/genshin-wishes/genshin-wishes-i18n).
