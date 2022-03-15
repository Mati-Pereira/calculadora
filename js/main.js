function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    inicia() {
      this.clickBtn();
    },

    clearDisplay() {
      this.display.value = "";
    },

    delUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    equal() {
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
    },

    clickBtn() {
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
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
