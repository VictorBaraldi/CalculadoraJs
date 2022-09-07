function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if(!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = String(conta);
            }catch (e) {
                alert('Conta invalida');
                return;
            }
        },

        inicia() {
            this.cliqueBotoes(); //precisa this para acessar o calculadora.cliqueBotoes
            this.pressEnter();

        },

        pressEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            });
        },

        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText) // esse innertext pega o que ta dentro do botao no html
                }

                if (el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq'))  {
                    this.realizaConta();
                }

            }.bind(this)) // basicamente faz a função usar o this para calculadora, no caso o this dentro se referia a documento
        },
        
        btnParaDisplay(valor){
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();