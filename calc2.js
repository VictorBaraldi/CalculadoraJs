function Calculadora(){
     this.display = document.querySelector('.display');
     
     this.inicia = function(){
        this.clicaBotao();
    }
    this.clearDisplay = function(){
        this.display.value = '';
    }
    this.deletaUltimo = function(){
        this.display.value = this.display.value.slice(0, -1)
    }
    this.realizaConta = function(){
        let conta = this.display.value;
        try {
            conta = eval(conta);
            if (!conta) {
                alert('Conta invalida');
            }
            this.display.value = String(conta);
        }catch (e) {
            alert('Conta Invalida')
        }
    }

    
    this.clicaBotao = function(){
        document.addEventListener('click', function(e){
            const elemento = e.target;
            console.log(elemento);

            if (elemento.classList.contains('btn-num')){
                this.btnParaDisplay(elemento.innerText);
            }

            if (elemento.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if (elemento.classList.contains('btn-del')){
                this.deletaUltimo();
            }

            if (elemento.classList.contains('btn-eq')){
                this.realizaConta();
            }
            

        }.bind(this))
    }  
    
    this.btnParaDisplay = function(valor){
        this.display.value += valor;
    }
}   

const calc = new Calculadora;
calc.inicia();