function $(elemento){
    return document.getElementById(elemento)
};

const estatura = $("estatura");
const peso = $("peso");
const boton = $("boton_calcular")

let imc = () => {
    const resultado = peso.value / (estatura.value **2)
    alert(`El IMC de la persona es: ${resultado}`)
    estatura.value = "";
    peso.value = ""
}
