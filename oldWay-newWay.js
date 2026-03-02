const estoque = 10;

/* Jeito antigo

let status;
if (estoque > 0) {
    status = 'Disponível';
} else {
    status = 'Esgotado';
}
*/

// Jeito atual


const status = estoque > 0 ? 'Disponível' : 'Esgotado';

console.log(status);
