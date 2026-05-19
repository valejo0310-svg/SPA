# SPA Básica con JavaScript Vanilla + JSON Server

Proyecto desarrollado como práctica de una **SPA (Single Page Application)** utilizando únicamente tecnologías base del ecosistema web:

* HTML
* CSS
* JavaScript Vanilla
* JSON Server
* Axios

La aplicación permite navegar entre vistas sin recargar la página, realizar un login básico, consumir información desde una API falsa y mostrar formularios dinámicamente.

---

# Objetivo del Proyecto

El objetivo principal es comprender cómo funciona una SPA desde cero sin frameworks como React o Vue.

Este proyecto enseña:

* Manipulación del DOM
* Navegación dinámica
* Renderizado de vistas
* Consumo de APIs
* Validaciones básicas
* Uso de async/await
* Manejo básico de formularios

---

# Funcionalidades

## Login

* Validación de campos vacíos
* Validación de usuario
* Validación de contraseña
* Mensajes dinámicos con HTML y CSS

---

## Home

* Renderizado dinámico de productos
* Consumo de API usando Axios
* Navegación entre vistas

---

## Contacto

* Formulario dinámico
* Validación básica
* Regresar al Home sin recargar

---

# Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla
* Axios
* JSON Server

---

# Estructura del Proyecto

```bash
project/
│
├── index.html
├── style.css
├── main.js
├── db.json
├── app.js
```

---

# Instalación

## 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Instalar JSON Server

```bash
npm install -g json-server
```

---

## 3. Ejecutar JSON Server

```bash
json-server --watch db.json
```

La API estará disponible en:

```bash
http://localhost:3000
```

---

## 4. Ejecutar el proyecto

Abrir el archivo `index.html` con Live Server o desde el navegador.

---

# Concepto SPA

Una SPA (Single Page Application) funciona utilizando un único archivo HTML.

En lugar de recargar páginas completas, JavaScript cambia el contenido dinámicamente usando el DOM.

Ejemplo:

```javascript
app.innerHTML = `
  <h1>Home</h1>
`;
```

Eso permite:

* Navegar sin recargar
* Mostrar vistas dinámicamente
* Mejor experiencia de usuario

---

# Lógica Básica del Proyecto

## 1. Cambio de vistas

La aplicación utiliza funciones para mostrar distintas secciones:

```javascript
showView(homeView)
```

Esto oculta una vista y muestra otra sin recargar la página.

---

## 2. Consumo de API

Los datos se obtienen desde JSON Server usando Axios:

```javascript
axios.get("http://localhost:3000/products")
```

---

## 3. Validaciones

Las validaciones se realizan usando condicionales:

```javascript
if (!username || !password)
```

---

## 4. Renderizado dinámico

Los productos se muestran dinámicamente usando JavaScript:

```javascript
container.innerHTML += `
`
```

---

# ¿Qué vuelve esto una SPA?

- Solo existe un HTML principal
- No hay recarga de página
- El contenido cambia dinámicamente
- JavaScript controla la navegación

---

# Temas Aprendidos

* DOM
* Eventos
* async/await
* Axios
* APIs
* Validaciones
* SPA
* JSON Server
* Renderizado dinámico

---

Proyecto realizado como práctica de aprendizaje sobre SPA con JavaScript Vanilla.
