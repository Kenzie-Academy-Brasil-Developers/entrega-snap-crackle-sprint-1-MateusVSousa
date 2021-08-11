/*
1 - Fazer uma string;
1.1 - Duvidas;
2 - Se for impar faz Snap;
3 - se for multiplo de 5 faz Crackle;
4 - se for multiplo de 5 e impar, faz snap crackle;
5 - devolver a string pra função;

Duvidas :

- Concatenar string;
- Concatenar string usando um for;
- Concatenar com condicional;
- Concatenar string usando um for dentro de uma função;
- Condicionar as concatenações de String com o "For";
- Chamar essa função através do Return;

*/

function snapCrackle (n){
    let strg = ""
    for (let i = 1; i <= n ; i++){
        if ((i%5 ===0) && (i%2 === 1 ))  {
            strg += "SnapCrackle, "
            
        }
        else if(i%2 > 0 ) {
            strg += "Snap, "
        }
        else if(i%5 === 0) {
            strg += "Crackle, "
        }

        else {
            strg += i + ", "  
        }
    
    }
    return strg
}