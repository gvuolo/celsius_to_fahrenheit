/* ### Celsius para Fahrenheit, e Fahrenheit para Celsius

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra.

    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

function transformDegree(degree) {
    //transformar em maiúsculo a abreviação do grau
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')


    // fluxo de erro
    if(!celsiusExists && !fahrenheitExist){
        throw new Error('Grau não identificado')
    }


    // fluxo ideal F to C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

        // fluxo alternativo C to F 
        if(celsiusExists){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
        }

    return formula(updateDegree) + degreeSign
}

try{
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
    transformDegree('20Z')
}
catch(error){
     console.log(error.message)
    }
