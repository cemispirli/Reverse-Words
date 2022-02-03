function reword() {
    let word = prompt("Lutfen bir cmle giriniz: ");
    let reversedword = "";
    let i = word.length - 1;
    for (i; i >= 0; i--){
        reversedword += word[i];
        
        
    }
    return reversedword;
       
    
}
console.log(reword());


// function reword() {
//     let word = prompt("ltfen bir kelime giriniz :)")
//     let reversedword = "";
//     let i = word.length - 1
//     for (i ; i >= 0; i--)
//         reversedword += word[i];
//     return reversedword;
// }
// console.log(reword());

// let str = 'Hello Clarusway'
// let liste = ['h','e','l','l','o'];
// function reverse(s){
//     return s.split("").reverse().join("");
// }
// console.log(reverse(str));
// console.log(liste.reverse());
// console.log(str.split("").reverse().join(""));



// let sayı1 = +prompt("1.sayıyı girin")
// let sayı2 = +prompt("2. sayıyı girin")
// let operator = prompt("operatör girin")


// switch (operator) {
//     case '+' :
//         result = sayı1 + sayı2
//         break;
//     case '-' :
//         result = sayı1 - sayı2
//         break;
//     case '*' :
//         result = sayı1 * sayı2
//         break;
//     case '/' :
//         result = sayı1 / sayı2
//         break;

//     default:
//         console.log('geçersiz operatör seçimi');
//         break;
// }
// console.log(result);
