console.log('Aplicacion calculadora');

function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado = 'La operacion no incluye números';
    } //isNan valia si el resultado es nulo o valido      
    document.getElementById('resultadoSuma').innerHTML = `Resultado:  ${resultado}`;
    console.log(`Resultado:  ${resultado}`);
    }


function resta(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);

    if(isNaN(resultado)){
        resultado = 'La operacion no incluye números';
    }//isNan valia si el resultado es nulo o valido
        
        document.getElementById('resultadoResta').innerHTML = `Resultado:  ${resultado}`;
    
    console.log(`Resultado:  ${resultado}`);
    }
