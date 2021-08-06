function obterUsuario(){
    setTimeout(function() {
        return {
            id:1,
            nome: 'Elipes',
            dataNacimento: new Date()
        }
    }, 1000);

}

function obterTelefone(idUsuario, callback){
    setTimeout(() =>{
        return callback(null, {
            telefone:'11993339900',
            ddd: 11
        })
    },2000);

}
function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            rua: 'dos bolos',
            numero: 0
        })
    }, 2000);

}

function resolverUsuario(erro, usuario){
    console.log('usuari', usuario)
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
                console.error('Deu Ruim em  TELEFONE', error)
                return;
            }

            console.log(`
            Nome: ${usuario.nome}, 
            Endereco: ${ endereso.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) ${telefone.telefone}
            `);
        } )
    })
})
//const usuario = obterTelefone(usuario.id)



