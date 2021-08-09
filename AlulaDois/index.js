const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)

function obterUsuario(){
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(function() {
            return resolve({
                id:1,
                nome: 'Elipes',
                dataNacimento: new Date()
            })
        }, 1000);

    })

}

function obterTelefone(idUsuario, callback){
                setTimeout(() => {
                    return callback(null,{
                    telefone:'11993339900',
                    ddd: 11
                })
        },2000);

    }



function obterEndereco(idUsuario){
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: 'dos bolos',
                numero: 0
            })
        }, 2000);
    })

}


const usuarioPromise = obterUsuario()

usuarioPromise
.then(function (usuario) {
    return obterTelefone(usuario.id)    
        .then (function resolverTelefone(result){
            return{
                usuario:{
                    nome: usuario.nome,
                    id: usuario.id
                },
                telefone:result 
            }  
        })
        
})
.then(function(resultado){
    const endereco = obterEnderecoAsync(resultado.usuario.id)
    return endereco.then(function resolverEndereco(result){
            return{
                usuario: resultado.usuario,
                telefone: resultado.telefone, 
                endereco: result
            }
    })
})
.then(function(resultado){
    console.log(`
    Nome:${resultado.usuario.nome}
    Endereco:${resultado.endereco.rua}, ${resultado.endereco.numero}
    Telenone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
    `);
    
})

.catch (function (error) {
    console.error('Deu Ruim', error)    
})

/* function resolverUsuario(error, usuario){
    console.log('usuario', usuario)
}

obterUsuario (function resolverUsuario(error, usuario){
    if(error) {
        console.error('DEU RUIM em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error('Deu Ruim em  TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2){
                console.error('Deu Ruim em  ENDEREÇO', error)
                return;
            }

            console.log(`
            Nome: ${usuario.nome}, 
            Endereco: ${endereso.rua},${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
        } )
    })
})
//const usuario = obterTelefone(usuario.id) */
