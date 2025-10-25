/*


    O b j e t o s   e m   J S


*/

/**
 * Neste código iremos ver objetos em JS (JSON)
 * JSON = JavaScript Object Notation
 */


const meuObjeto = {
    "nome": "Filipe",
    "endereco": "Rua das Ruas",
    "numero": 15,
    "ehFumante": false,
    'ola': ()=> {
        console.log("Olá mundo!")
    },
    'telefones' : {
        'residencial': '14 123456789',
        'comercial': '14 987654321'
    }
}

meuObjeto.ola();
console.log(meuObjeto);

// Transformando objeto JSON em texto
console.log(JSON.stringify(meuObjeto))

// Transformando texto em objeto JSON
const txtObject = '{"codigo": 1234, "preco": 15.32' + ', "descricao": "teste"}';
const obj = JSON.parse(txtObject);
console.log(obj)