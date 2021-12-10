let envio = function Aluno(nome,quantidadeDeFaltas,notas){
    this.nome=nome;
    this.notas=notas;
    this.quantidadeDeFaltas=quantidadeDeFaltas;
    this.media=function(){
        let media =0;
        let soma=0;
        
        this.notas.forEach(
            item=>{
                soma +=item;
            }
        )
        media =soma/ this.notas.length;
        return media;
    }

    this.falta= function(){
        this.quantidadeDeFaltas+=1;
    }
}

module.exports = envio;