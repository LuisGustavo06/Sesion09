function Imprimir1al100(){
    /*Primer Segmento
    Valores iniciales a las variables en ese segmento
    Segundo Segmento
    Condicion o condiciones agrupadas con operadores logicos
    Tercer Segmento
    Operaciones de aumento o disminucion
    */
    for(i=1;i<=100;i++){ //i=i+2 para aumentar de 2 en 2
        console.log(i);
    }
}
function ImprimirMultiplos3(){
    for(i=0;i<=100;i+=3){ //i=i+2 para aumentar de 2 en 2
        console.log(i);
    }
}
function ImprimirMultiplos32(){
    for(i=1;i<=100;i++){ //i=i+2 para aumentar de 2 en 2
        if(i%3==0)
            console.log(i);
    }
}
function SumaParesImpares(){
       pares=0;
       impares=0;
       for (i=1;i<=50;i+=2){
        pares+=i+1;
        impares+=i;
       }
       console.log(pares);
       console.log(impares);
}
function SumaParesImpares2(){
    pares=0;
    impares=0;
    for (i=1;i<=50;i++){
        if(i%2==1) impares+=i;
        else par+=i;
    }
    console.log(pares);
    console.log(impares);
}
function SumaParesImparesM1W(){
    pares=0;
    impares=0;
    i=1; //valores inciales
    while (i<=50){
        pares+=i+1;
        impares+=i;
        i+=2;
    }
    console.log(pares);
    console.log(impares);
}
function Secuencia(){
    let limiteSec = 8
    for(let i=0; i<limiteSec; i++){ //Secuencia 1 // 1 0 1 0 1 0 1 0
        if(i%2 == 0){
            console.log("1");
        }
        else{
            console.log("0");
        }
    }
}
function Secuencia2(){
    let limiteSec = 8
    for(let i=0; i<limiteSec; i++){ //Secuencia 2 //-1 1 -1 1 -1 1 -1 1
        if (i%2 == 0){
            console.log("-1");
        }
        else {
            console.log("1");
        }
    }
 }
 function Secuencia3(){
    let limiteSec = 8
    for(let i=1; i<=limiteSec; i++){ //Secuencia 3 // 1 2 -1 -2 1 2 -1 -2
        if(i%4 == 1){
            console.log("1");
        }
        else if(i%4 == 2) {
            console.log("2");
        }
        else if(i%4 == 3) {
            console.log("-1");
        }
        else if(i%4 == 0) {
            console.log("-2");
        }
    }
 }
 function Secuencia4(){
    let limiteSec = 8
    for (let i=1; i<=limiteSec; i++) { // Secuencia 4 // 3 4 5 3 4 5 3 4
        if (i%3 == 1) {
            console.log("3")
        }
        if (i%3 == 2) {
            console.log("4")
        }
        if (i%3 == 0) {
            console.log("5")
        }
    }
 }