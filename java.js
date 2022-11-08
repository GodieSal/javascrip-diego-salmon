let resultadosArraydolar = [];
let resultadosArrayeuro = [];
function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    var dolar = 238;
    var euro = 260;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        moneda = "dolar";
       
        alert ("El cambio de pesos Argentinos a Dolares es: $" + resultado.toFixed(2));

        console.log("El cambio de pesos Argentinos a Dolares es: $", + resultado.toFixed(2));

        resultadosArraydolar.push({"moneda" : "dolar" , "resultado" : resultado});  

    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        moneda = "euro";

        alert ("El cambio de pesos Argentinos a Euros es: $" + resultado.toFixed(2));
        
        console.log("El cambio de pesos Argentinos a Euros es: $", + resultado.toFixed(2));

        resultadosArrayeuro.push({"moneda" : "euro" , "resultado" : resultado}); 

    }
    else{   
        alert("Tienes que completar todos los requerimientos")
    }  
    console.log(resultadosArraydolar , resultadosArrayeuro);
    return ;
}
