const form2 = document.querySelector("#form-register");

const btnSiguiente = document.querySelector("#siguiente");

const input1 = document.querySelector("#form-input-text-1");
const input2 = document.querySelector("#form-input-text-2");
const email = document.querySelector(".form-register-email");

const radio1 = document.querySelector("#form-radio-1");
const radio2 = document.querySelector("#form-radio-2");

const radio3 = document.querySelector("#form-radio-3");
const radio4 = document.querySelector("#form-radio-4");
const radio5 = document.querySelector("#form-radio-5");
const radio6 = document.querySelector("#form-radio-6");
const radio7 = document.querySelector("#form-radio-7");

const checkbox1 = document.querySelector("#form-checkbox-1");
const checkbox2 = document.querySelector("#form-checkbox-2");
const checkbox3 = document.querySelector("#form-checkbox-3");

const formSelect = document.querySelector(".form-input-select");

let pagina = 1;

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", iniciarApp);

  if (input1) {
    input1.addEventListener("change", validarCheckbox);
  }

  if (input2) {
    input2.addEventListener("change", validarCheckbox);
  }

  if (email) {
    email.addEventListener("change", validarCheckbox);
  }

  if (radio1) {
    radio1.addEventListener("change", validarCheckbox);
  }

  if (radio2) {
    radio2.addEventListener("change", validarCheckbox);
  }

  if (radio3) {
    radio3.addEventListener("change", validarCheckbox2);
  }

  if (radio4) {
    radio4.addEventListener("change", validarCheckbox2);
  }

  if (radio5) {
    radio5.addEventListener("change", validarCheckbox2);
  }
  if (radio6) {
    radio6.addEventListener("change", validarCheckbox2);
  }
  if (radio7) {
    radio7.addEventListener("change", validarCheckbox2);
  }

  if (checkbox1) {
    checkbox1.addEventListener("change", validarCheckbox2);
  }

  if (checkbox2) {
    checkbox2.addEventListener("change", validarCheckbox2);
  }

  if (checkbox3) {
    checkbox3.addEventListener("change", validarCheckbox2);
  }

  pasarela();
  mostrarSeccion();
  paginaSiguiente();
}

function iniciarApp() {
  btnSiguiente.disabled = true;
  btnSiguiente.classList.remove("active");
}

function paginaSiguiente() {
  const paginaSiguiente = document.querySelector("#siguiente");
  paginaSiguiente.addEventListener("click", (e) => {
    pagina++;
    console.log(pagina);
    pasarela();
    mostrarSeccion();
    iniciarApp();
    formSelect.classList.add("none");
  });
}

function mostrarSeccion() {
  const seccionAnterior = document.querySelector(".mostrar-seccion");

  if (seccionAnterior) {
    seccionAnterior.classList.remove("mostrar-seccion");
  }

  const seccionActual = document.querySelector(`#paso-${pagina}`);
  seccionActual.classList.add("mostrar-seccion");
}

function validarCheckbox(e) {
  if (radio1.checked) {
    formSelect.classList.remove("none");
  }
  if (radio2.checked) {
    formSelect.classList.add("none");
  }

  if ((radio1.checked || radio2.checked) && e.target.value.length > 0) {
    btnSiguiente.disabled = false;
    btnSiguiente.classList.add("active");
  }
}

function validarCheckbox2(e) {
  if (
    (radio3.checked ||
      radio4.checked ||
      radio5.checked ||
      radio6.checked ||
      radio7.checked) &&
    checkbox1.checked &&
    checkbox2.checked &&
    checkbox3.checked
  ) {
    btnSiguiente.disabled = false;
    btnSiguiente.classList.add("active");
  }
}

function pasarela() {
  if (pagina === 2) {
    const svg = document.querySelector(".nav-box-border").children[0];
    const navContent = document.querySelector(".nav-content");
    const line = document.querySelector(".line");
    navContent.classList.add("is-active");
    svg.classList.remove("none");
    line.classList.add("is-active");
  }
  if (pagina === 3) {
    location.href = "index.html";
  }
}
