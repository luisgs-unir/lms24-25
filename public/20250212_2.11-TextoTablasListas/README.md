# 20250212 - 2.11 Texto, Tablas, Listas, mini-menú

## 📌 **Guion sobre propiedades CSS**

### ✍️ **Alineación de textos**
- **`text-align`**: Define la alineación del texto dentro de un elemento. Valores:
  - `left`, `right`, `center`, `justify`.
- **`text-indent`**: Controla la sangría de la primera línea de un párrafo. Ejemplo: `text-indent: 20px;`
- **`text-decoration`**: Añade efectos visuales al texto. Valores:
  - `none`, `underline`, `overline`, `line-through`.

---

### 🏛 **Propiedades para Tablas**
- **`border-collapse`**: Define si los bordes de las celdas deben fusionarse o mantenerse separados.
  - `collapse`: Bordes combinados.
  - `separate`: Bordes separados.
- **`border-spacing`**: Espaciado entre bordes cuando `border-collapse: separate;`.
- **`caption`**: Permite agregar un título a la tabla.
- **`caption-side`**: Define la posición del título (`top` o `bottom`).
- **`empty-cells`**: Controla la visibilidad de celdas vacías.
  - `show`: Muestra celdas vacías.
  - `hide`: Oculta celdas vacías.
- **`table-layout`**: Define el comportamiento del tamaño de la tabla.
  - `auto`: Ajuste dinámico según el contenido.
  - `fixed`: Las columnas mantienen el ancho predefinido.

---

### 📜 **Listas**
- **`list-style-type`**: Tipo de marcador en listas (`disc`, `circle`, `square`, `none`, `decimal`, etc.).
- **`list-style-image`**: Permite usar una imagen en lugar de los marcadores predeterminados.
- **`list-style-position`**: Ubicación del marcador (`inside`, `outside`).

---

### 📌 **Menú Horizontal**
- **Lista con `float`**: Cada elemento flota a la izquierda (`float: left;`).
- **Lista con `display: inline-block`**: Permite alinear los elementos sin flotarlos.
- **Pseudo-clase `:hover`**: Define un estilo cuando el usuario pasa el ratón sobre un elemento.

---

### 🎯 **Cursor del ratón**
- **`cursor`**: Cambia la apariencia del cursor (`pointer`, `crosshair`, `wait`, `move`, etc.).

---

### 🎨 **Contornos**
- **`outline`**: Borde exterior que no afecta el tamaño total del elemento.
- **`outline-color`**: Color del contorno.
- **`outline-width`**: Grosor del contorno.
- **`outline-style`**: Estilo del contorno (`solid`, `dotted`, `dashed`, `double`, etc.).
- **`outline vs border`**: 
  - `border` afecta el tamaño del elemento.
  - `outline` no modifica el tamaño y se dibuja fuera del borde.

---

## 📝 **Código HTML y CSS**
Aquí tienes el código que aplica todas estas propiedades.

El código HTML y CSS cubre todas las propiedades que mencionaste, aplicándolas en ejemplos concretos. Si necesitas modificaciones o una explicación más detallada de alguna propiedad, dime y lo ajustamos.