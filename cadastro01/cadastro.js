const realizarCadastro = (eventrec) => {
    //EVITAR O FORM DE FAZER RE-RENDER DA PAGINA
    event.preventDefault(eventrec);

    //PEGO OS VALORES DOS INPUTS DE CADASTRO
    const nomeInputValue = document.getElementById('nome1');
    const emailInputValue = document.getElementById('email1');
    const nascimentoInputValue = document.getElementById('nascimento1');
    const senhaInputValue = document.getElementById('senha1');
    const cepInputValue = document.getElementById('cep1');
    const enderecoInputValue = document.getElementById('endereco1');
    const numeroInputValue = document.getElementById('numero1');
    const bairroInputValue = document.getElementById('bairro1');


    //CRIO UM OBJETO COM OS DADOS DOS INPUTS A SEREM CADASTRADOS
    const usuarioASerSalvo = { nome: nomeInputValue.value, email: emailInputValue.value, nascimento: nascimentoInputValue.value, senha: senhaInputValue.value, cep: cepInputValue.value, enderco: enderecoInputValue.value, numero: numeroInputValue.value, bairro: bairroInputValue.value }

    //BUSCO NO BANCO DE DADOS LOCAL OS DADOS JÁ CADASTRADOS
    let valoresJaSalvos = JSON.parse(localStorage.getItem('usuariosParaLogin'));

    //VERIFICO SE JÁ EXISTEM DADOS NO BANCO DE DADOS LOCAL, SE NÃO EXISTIR, CRIO UMA LISTA VAZIA.
    if (!valoresJaSalvos) {
        valoresJaSalvos = [];

    }

    //ADICIONO O NOVO USUARIO A LISTA DOS USUARIOS JÁ CADATRADOS OU, SE ESTIVER VAZIO, ADICIONA NA LISTA VAZIA
    valoresJaSalvos.push(usuarioASerSalvo);

    //SUBTITUO O VALOR ANTIGO DO BANCO DE DADOS PELO NOVO VALOR DE {USUARIOS ANTIGOS + USUARIOS NOVOS}
    localStorage.setItem('usuariosParaLogin', JSON.stringify(valoresJaSalvos));
    window.location.href = "../index.html"
}

