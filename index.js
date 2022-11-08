let ArrayDolar = [];
let ArrayEuro = [];
function convertir() {
    let valores = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    var dolar = 293;
    var euro = 294;
    if (document.getElementById("uno").checked){
        resultado = valores / dolar;
        moneda = "dolar";
       
        alert ("El valor de sus Pesos Argentinos en Dolares es: $" + resultado.toFixed(2));

        console.log("El valor de sus Pesos Argentinos en Dolares es: $", + resultado.toFixed(2));
        ArrayDolar.push({"moneda" : "dolar" , "resultado" : resultado});  

    }
    else if (document.getElementById("dos").checked){
        resultado = valores / euro;
        moneda = "euro";

        alert ("El Valor de sus pesos Argentinos en Euros es: $" + resultado.toFixed(2));
        
        console.log("El Valor de sus Argentinos en Euros es: $", + resultado.toFixed(2));

        ArrayEuro.push({"moneda" : "euro" , "resultado" : resultado}); 

    }
    else{   
        alert("Usted debe completar el campo con un valor correcto")
    }  
    console.log(Arraydolar , ArrayEuro);
    return ;
}



