# **🍅 Pomodoro Timer**

Un temporizador Pomodoro simple y minimalista de 25 minutos, creado con HTML, CSS y JavaScript vanilla.

<img width="1358" height="678" alt="image" src="https://github.com/user-attachments/assets/5f9086ce-f130-4e9e-abc4-334c100463a5" />


## ✨ **Características**

- ⏱️ Temporizador de 25 minutos (técnica Pomodoro)
- ▶️ Controles de Iniciar, Pausar y Reiniciar
- 🎨 Diseño limpio y minimalista con colores pastel
- 📱 Responsive y fácil de usar
- 🚀 Sin dependencias - Solo HTML, CSS y JS puro
- 🔔 Alerta cuando termina el tiempo

**## 🎯 ¿Qué es la técnica Pomodoro?**

La técnica Pomodoro es un método de gestión del tiempo que consiste en:
1. Trabajar durante 25 minutos enfocado
2. Tomar un descanso de 5 minutos
3. Repetir el proceso
4. Después de 4 "pomodoros", tomar un descanso largo (15-30 min)

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/abeelonchoo/pomodoroTimer.git
```

2. Navega al directorio:
```bash
cd pomodoroTimer
```

3. Abre `index.html` en tu navegador:
```bash
# En Windows
start index.html

# En macOS
open index.html

# En Linux
xdg-open index.html
```

¡O simplemente arrastra el archivo `index.html` a tu navegador!

## 🎮 **Uso**

1. **Iniciar**: Haz clic en el botón verde "Iniciar" para comenzar la cuenta regresiva
2. **Pausar**: Haz clic en el botón naranja "Pausar" para detener temporalmente
3. **Reiniciar**: Haz clic en el botón rojo "Reiniciar" para volver a 25:00

## 🛠️ **Personalización**

### Cambiar el tiempo del temporizador

En el archivo `index.html`, busca esta línea en el JavaScript:

```
var timeLeft = 25 * 60;  // 25 minutos en segundos
```

Cámbialo por el tiempo que desees:

```
var timeLeft = 15 * 60;  // 15 minutos
var timeLeft = 30 * 60;  // 30 minutos
var timeLeft = 5 * 60;   // 5 minutos
```

### Cambiar colores

En la sección `<style>`, puedes personalizar los colores:

```
body {
    background-color: #ffe9f3;  /* Fondo rosa claro */
}

.cajita {
    background-color: #cfd7fd;  /* Caja azul claro */
    border: 3px solid #bbc5f8;
}
```

## 🌐 **Navegadores soportados**

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 👤 **Autor**

- GitHub: [@abeelonchoo](https://github.com/abeelonchoo)


⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!
