
let usuarios = [
    {
    login:'victor',
    pass: 'victor'
    },

    {
        login:'luan',
        pass: 'luan'
     },

    {
        login:'maria',
        pass: 'maria'
    },
]

function Entrar() {
    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;
    let validaLogin = false

    // validar diferentes usuarios
    for (let i in usuarios) {

        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
           validaLogin = true
            break // server para parar no usuario encontrado
        }
    }

    if(validaLogin == true) {
        location.href = "public/acesso-restrito/acesso.html"
    }else {
        alert('Usuario ou senha incorretos!')
    }

    // valida apenas um usuario
    /*if(usuario == "admin" && senha == "admin") {
        alert('Sucesso');
        location.href = "public/acesso-restrito/acesso.html"
    }else{
        alert('Usuario ou senha incorretos')
    }*/
}