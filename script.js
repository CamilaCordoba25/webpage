// Seleccionamos el módulo de "Funcionamiento" y el contenedor de información
const moduloFuncionamiento = document.getElementById("modulo-funcionamiento");
const infoTitulo = document.getElementById("info-titulo");
const infoTexto = document.getElementById("info-texto");

// Información específica del módulo de Funcionamiento
const contenidoFuncionamiento = {
  titulo: "Funcionamiento",
  texto: "En esta sección se detalla el proceso completo de logística y transporte de American Cargo Diesel, garantizando eficacia en cada etapa del envío."
};

// Agregamos el evento de clic al módulo
moduloFuncionamiento.addEventListener("click", () => {
  // Actualizamos el contenido de los elementos en la página
  infoTitulo.textContent = contenidoFuncionamiento.titulo;
  infoTexto.textContent = contenidoFuncionamiento.texto;
});
