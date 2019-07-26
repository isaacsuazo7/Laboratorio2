//Lab 2, archivo para calcular areas geometricas

//Funcion cuadrada
const square=(s)=>{
    return s*s;
};

//Funcion rectangulo
const rectangle=(b,h)=>{
    return b*h;
};

//Funcion Triangulo
const triangule=(b,h)=>{
    return b*h/2;
};

//Funcion Circulo
const circle=(r)=>{
    return Math.PI *r*r;
}

//Funcion elipse
const elipse=(a,b)=>{
    return Math.PI *a*b;
}

module.exports={
    square,rectangle,triangule,circle,elipse
}