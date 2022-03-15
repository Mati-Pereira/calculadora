function CriaCalculadora() {
  this.display = document.querySelector(".display");
  this.btnClear = document.querySelector(".btn-clear");

  this.inicia = function () {
    this.clickBtn();
  };

  this.clearDisplay = function () {
    this.display.value = "";
  };

  this.delUm = function () {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.equal = function () {
    let resultado = this.display.value;
    try {
      resultado = eval(resultado);
      if (!resultado) {
        alert("Conta Invalida");
        return;
      }
      this.display.value = resultado;
    } catch (e) {
      alert("Conta Invalida");
    }
  };

  this.clickBtn = function () {
    document.addEventListener(
      "click",
      function (e) {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnParaDisplay(el.innerText);
        }
        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }
        if (el.classList.contains("btn-del")) {
          this.delUm();
        }
        if (el.classList.contains("btn-eq")) {
          this.equal();
        }
      }.bind(this)
    );
  };
  this.btnParaDisplay = function (valor) {
    this.display.value += valor;
  };
}

const calculadora = new CriaCalculadora();
calculadora.inicia();


