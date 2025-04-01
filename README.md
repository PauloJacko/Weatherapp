**Weather APP**

**CONSIDERACIONES:**

- HOME.PAGE.TS: Agregar API_KEY de MapBox
- WEATHERAPP.SERVICE.TS: Agregar API_KEY de WeatherAPI
- Instalar dependencias: npm install
- Una vez agregadas ambas API_KEYS e instaladas las dependencias, correr servidor con "ionic serve"

**ARQUITECTURA y VERSIONES:**

- Se utilizó un modelo arquitectónico MVC adaptado a Angular, que permite separar el codigo en distintas páginas y cada página separada a su vez en vista (HTML), diseño(SCSS), logica(JAVA, TS) y pruebas unitarias, generando un codigo ordenado, limpio y fácil de entender.

- FrameWorks utilizados fueron IONIC Standalone y Angular en su versión 19.2.4 (ng --version)


---------------------------------------------------------------------------------------------------------------------------------


A continuación explicaré como funciona la aplicación y las cosas que no tuve tiempo de realizar:

1. Home Page (home.page.ts)

Es el punto de entrada de la aplicación en el cual permite al usuario a través de un input agregar cualquier ciudad del mundo retornando el clima en tiempo real, a través de WeatherAPI, y mostrando un mapa de la ciudad consultada a través de la API de MapBox.


2. Weather Service (weatherapp.service.ts)

Se encarga de conectar a WeatherAPI para obtener datos del clima. Para esto, usa HttpClient, una herramienta que permite hacer solicitudes HTTP. Por lo tanto, cuando la persona ingresa una ciudad en el input, la aplicación le envía esa información a la API y recibe los datos del clima (emperatura, humedad, viento y condición climática). Luego, el servicio le devuelve esa información a home.page.ts, que se encarga de mostrarla en pantalla mediante el siguiente codigo:

      <div *ngIf="weatherData">
        <h2>{{ weatherData.location.name }}, {{ weatherData.location.country }}</h2> ------> Nombre locación, país
        <p>🌡️ Temperatura: {{ weatherData.current.temp_c }} °C</p>      ------------------> Temperatura en grados C
        <p>💧 Humedad: {{ weatherData.current.humidity }}%</p>          ------------------> Humedad
        <p>💨 Viento: {{ weatherData.current.wind_kph }} km/h</p>       ------------------> Viento
        <p>🌤️ Condición: {{ weatherData.current.condition.text }}</p>   ------------------> Condición climática
        <img [src]="weatherData.current.condition.icon" alt="Condición climática">
                  !-->Icono actualizado sobre la condición climática (soleado, nublado, parcialmente soleado, lluvioso, etc.)
      </div>


3. Mapa Interactivo (home.page.html y home.page.ts)

Cuando el usuario escribe el nombre de una ciudad en el input, el sistema toma ese nombre y lo envía al método getWeather(city) en home.page.ts. Luego, el servicio mapboxService hace una solicitud a la API de MapBox para obtener las coordenadas geográficas (latitud y longitud) de esa ciudad. Con las coordenadas obtenidas, el mapa se actualiza y se centra en la ubicación correspondiente de la ciudad en el mapa, mostrándola al usuario.


Todo esto se hizo a través de la siguiente clase:

export class HomePage implements AfterViewInit {
  city: string = ''; ------------------------------------------> CIUDAD INPUT
  weatherData: any;--------------------------------------------> CLIMA
  map!: mapboxgl.Map; ----------------------------------------> MAPA
  mapboxToken: string = ''; //AGREGAR API_KEY DE MAPBOX -------> API_KEY

**LUEGO VIENEN LOS CONSTRUCTORES PARA LA INFORMACION DEL CLIMA Y PARA EL MAPA


Toda esta información fue puesta en un modulo de IONIC y separada por DIV para hacer compartimentos separados y modificados en SCSS (home.page.scss) para darle estetica a la aplicación y que se vea como una aplicación real del tiempo.


**PRUEBAS UNITARIAS:**

Se utilizó JASMINE para realizar pruebas en home.page.spec.ts (ahí está alojado el código), se puede correr usando el codigo "ng test". Lo que hace es principalmente verificar que el componente HomePage se cree correctamente, y que todas las dependencias (como los servicios y módulos) estén configuradas adecuadamente para su funcionamiento.



❌ **COSAS QUE NO TUVE TIEMPO DE REALIZAR:**

- Hice la carpeta de "bienvenida" donde supuestamente esa sería la primera vista de la aplicación y donde pediría la ubicación, para luego con el modulo "import { Geolocation } from '@capacitor/geolocation';" poder saber tu ubicación y con esa ubicación ir a la HOMEPAGE y que se mostrara el clima y la ciudad automaticamente. Pero por el poco tiempo que tuve por mi vida principalmente, me di cuenta tarde de que para hacer eso tendría que modificar parte del codigo de homepage y la lógica para adaptarla a la nueva página de "bienvenida". Por lo que no me dió el tiempo de poder terminarlo. Por esto mismo el modulo ROUTES.TS deriva al HomePage a pesar de que bienvenida este creada (sin su lógica aún).


Sin más que agregar me despido cordialmente

Paulo Millán Hernández
Último año de Analista Programador
Duoc UC
