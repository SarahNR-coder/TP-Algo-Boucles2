// Exercice 1 : écrire 50 fois "Bonjour" dans la console.
console.log("Exercice 1");
for(let i = 0 ; i < 50 ; i++) {
	console.log("Bonjour");
}

// Exercice 2 : écrire dans la console :
// A
// B
// A
// B
// A
// B
// A
// B
// A
// B
console.log("Exercice 2");
for(let i=0; i<5;i++){
    console.log("A");
    console.log("B");
}

// Exercice 3 : écrire dans la console :
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
// A
// A
// A
// A
// A
// B
console.log("Exercice 3");
for(let i=0; i<3; i++){
    for(let j=0; j<5; j++){
        console.log("A");
    }
    console.log("B");
}

// Exercice 4 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
console.log("Exercice 4");
for(let i=0; i<10; i++){
    console.log(i);
}

// Exercice 5 : écrire dans la console :
// Quand i vaut 0, 3
// Quand i vaut 1, 4
// Quand i vaut 2, 5
// 6
// 7
// 8
// Quand i vaut 6, 9
// 10
// 11
// 12
console.log("Exercice 5");
let digit=3;
for(let i=0; i<10; i++){
    console.log(digit);
    digit++;
}


console.log("Exercice 5 bis");
for(let i=0; i<10; i++){
    console.log(i+3);
}

// Exerice 6 : écrire dans la console :
// 0
// 1
// 2
// 3
// 0
// 1
// 2
// 3
// 0
// 1
console.log("Exercice 6");
let count=0;
for(let numberLines=0; numberLines<10; numberLines++){
    if(count < 3){
        console.log(count);
        count++;
    }else{
        console.log(count);
        count=0;
    }
}

console.log("Exercice 6 bis");
for(let i=0; i<10; i++){
    console.log(i%4);
}

// Exercice 7 : écrire dans la console :
// 0
// 1
// 2
// 3
// 4
// A
// A
// A
// 8
// 9
console.log("Exercice 7");
for(let nthLine=0; nthLine<10; nthLine++){
    if(nthLine >= 5 && nthLine <= 7){
        console.log("A");

    }else{
        console.log(nthLine);

    }
}
//Pas besoin de count

// Exercice 8 : écrire dans la console :
// 100
// 1
// 2
// 103
// 4
// 5
// 106
// 7
// 8
// 109
console.log("Exercice 8");
count=0;
let hundredNumbers = 100;
for(let numberLines=0; numberLines<10; numberLines++){
    if(count%3==0){
        console.log(hundredNumbers);
        hundredNumbers+=3;
    }else{
        console.log(count);
    }
    count++;
}
//Correction
for(let i=0; i<10; i++){
    if(i%3==0){
        console.log(i+100);
    }else{
        console.log(i);
    }
}

// Exercice 9 : écrire dans la console :
// 0
// 101
// 202
// 3
// 104
// 205
// 6
// 107
// 208
// 9
console.log("Exercice 9");
count=0;
hundredNumbers=100;
let twoHundredNumbers=200;
for(let numberLines=0; numberLines<10; numberLines++){
    if(count%3==0){
        console.log(count);
    }else if(count%3==1){
        console.log(hundredNumbers);
    }else{
        console.log(twoHundredNumbers);
    }
    count++;
    hundredNumbers++;
    twoHundredNumbers++;
}

//Correction
for(let i=0; i<10;i++){
    if(i%3==0){
        console.log(i);
    }else if(i%3==1){
        console.log(100+i);
    }else{
        console.log(200+i);
    }
}
//ou
console.log("Exercice 9 Correction");
for(let i=0; i<10;i++){
     console.log(i+i%3*100);
}

// Exercice 10 : écrire dans la console tous les résultats possibles de lancers de deux dés :
// 1 1
// 1 2
// 1 3
// ...
// 6 4
// 6 5
// 6 6
console.log("Exercice 10");
for(let faceDieOne=0; faceDieOne<=6; faceDieOne++){
    for(let numberFacesDiceTwo=0; numberFacesDiceTwo<=6; numberFacesDiceTwo++){
        console.log(faceDieOne+" "+numberFacesDiceTwo);
    }
}

// TODO

// Exercice 11 : adapter l'exercice précédent pour enlever les doublons (on ne veut pas afficher 1 2 et 2 1, mais seulement l'un des deux).
console.log("Exercice 11");
for(let numberFacesDiceOne=1; numberFacesDiceOne<=6; numberFacesDiceOne++){
    for(let numberFacesDiceTwo=1; numberFacesDiceTwo<=numberFacesDiceOne; numberFacesDiceTwo++){     
        console.log(numberFacesDiceOne+" "+numberFacesDiceTwo);
    }
}

// TODO

// Exercice 12 : en prenant des dés à 20 faces, combien de résultats différents (sans doublon) peut-on afficher ? (Autrement dit : adapter le code précédent pour compter les résultats au lieu de les afficher)
console.log("Exercice 12");
count = 0;
for(let numberFacesDiceOne=1; numberFacesDiceOne<=20; numberFacesDiceOne++){
    for(let numberFacesDiceTwo=0; numberFacesDiceTwo<=numberFacesDiceOne; numberFacesDiceTwo++){
        count++;
    }
}
console.log(count);

// Exercice 13 : afficher la table de multiplication de 1 (de 1 à 9):
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// 1x5 = 5
// 1x6 = 6
// 1x7 = 7
// 1x8 = 8
// 1x9 = 9
console.log("Exercice 13");
digit=1;
for(let i=1; i<=9; i++){
    console.log(digit+"x"+i+"="+i*digit);
}
// TODO

// Exercice 14 : que faut-il modifier du code précédent pour obtenir la table de 2 :
// 2x1 = 2
// 2x2 = 4
// 2x3 = 6
// 2x4 = 8
// 2x5 = 10
// 2x6 = 12
// 2x7 = 14
// 2x8 = 16
// 2x9 = 18
console.log("Exercice 14");
digit=2;
for(let i=1; i<=9; i++){
    console.log(digit+"x"+i+"="+i*digit);
}

// TODO

// Exercice 15 : comment généraliser pour afficher toutes les tables de multiplication de 1 à 9 :
// 1x1 = 1
// 1x2 = 2
// 1x3 = 3
// 1x4 = 4
// ...
// 9x7 = 63
// 9x8 = 72
// 9x9 = 81
console.log("Exercice 15");
for(let digit=1; digit<=9;digit++){
    for(let secondDigit=1; secondDigit<=9; secondDigit++){
        console.log(digit+"x"+secondDigit+"="+secondDigit*digit);
    }
}


// Exercice 16 : calculer 1+2+3+4+...+99+100. (Vous devriez trouver 5050)
console.log("Exercice 16");
let sum=0;
for(let i=1; i<=100; i++){
    sum+=i;
}
console.log(sum);


// Exercice 17 : trouver le nombre n tel que 1+2+3+4+5+...+(n-1)+n = 302253
console.log("Exercice 17");
let n=1;
for(let sum=1; sum<302253; sum+=n){
    n++;
}
console.log(n);
//while

// Exercice 18 : Afficher :
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
console.log("Exercice 18");
let nInitial=0;
let nPlusOne=1;
console.log(nPlusOne);
for(let numberLines=1; numberLines<10; numberLines++){
    let nPlusTwo=nPlusOne+nInitial;
    console.log(nPlusTwo);
    nInitial=nPlusOne;
    nPlusOne=nPlusTwo;
}




// Exercice 19 : compter combien il y a de nombres multiples de 3 ou de 7 entre 1234 et 5678
console.log("Exercice 19");
let number=1234;
count=0;
while(number<=5678){
    if(number%3==0 || number%7==0){
        count++;
    }
    number++;
}
console.log(count);



// Exercice 20 : afficher dans la console :
/*
*
**
***
****
*****
*/
console.log("Exercice 20");
let precedentlyWritten="";
for(let numberLines=0; numberLines<5; numberLines++){
    precedentlyWritten+="*"
    console.log(precedentlyWritten);
}

// Exercice 21 : afficher dans la console :
/*
    *
   **
  ***
 ****
*****
*/
console.log("Exercice 21");
let col1=" ";
let col2=" ";
let col3=" ";
let col4=" ";
let col5="*";
for(let numberLines=1; numberLines<=5; numberLines++){
    console.log(col1+col2+col3+col4+col5);
    col1=col2;
    col2=col3;
    col3=col4;
    col4=col5;  
}



// Exercice 22 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
*/
console.log("Exercice 22");
col1=" ";
col2=" ";
col3=" ";
col4=" ";
col5="*";
for(let numberLines=1; numberLines<=5; numberLines++){
    console.log(col1+col2+col3+col4+col5+col4+col3+col2+col1);
    col1=col2;
    col2=col3;
    col3=col4;
    col4=col5;  
}

// Exercice 23 : afficher dans la console :
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
console.log("Exercice 23");
col1=" ";
col2=" ";
col3=" ";
col4=" ";
col5="*";
for(let numberLines=1; numberLines<=10; numberLines++){
    if(numberLines<5){
        console.log(col1+col2+col3+col4+col5+col4+col3+col2+col1);
        col1=col2;
        col2=col3;
        col3=col4;
        col4=col5;  
    }else{
        console.log(col1+col2+col3+col4+col5+col4+col3+col2+col1);
        col5=col4;
        col4=col3;
        col3=col2;
        col2=col1;
        col1=" ";
    }
    
}
// TODO
