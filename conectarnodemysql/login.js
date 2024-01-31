

    function logar() {
        let nomes = document.getElementById('nomes').value
        let senha = document.getElementById('senha').value

        console.log(JSON.stringify({
            nomes:nomes,
            senha:senha
        }))

        fetch("login", {
            method:'POST',
            body: JSON.stringify({
                nomes:nomes,
                senha:senha
            }),
            headers: {"content-type" : "application/json"}
        })

        .then(async (resp) => {
            let status = await resp.text();
            console.log(status)
            if(status == 'conectado') {
                location.href = '/acesso-restito/acesso.html'
            } else {
                alert('nome ou senha invalidos!')
            }
        })
    }