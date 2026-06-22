let loginValido = []
const fazerLogin = (eventrec) => {
    //EVITAR O FORM DE FAZER RE-RENDER DA PAGINA
    event.preventDefault(eventrec);

    //PEGO OS VALORES DOS INPUTS DE LOGIN
    const usuario = document.getElementById("email1");
    const senhaUser = document.getElementById("password1");

    //BUSCO NO BANCO DE DADOS LOCAL OS DADOS JÁ CADASTRADOS
    const listaLoginsValidos = JSON.parse(localStorage.getItem('usuariosParaLogin'));

    //PERCORRO NA LISTA DOS DADOS LOCAIS JÁ CADASTRADOS SE EXISTE O USUARIO QUE DIGITEI PARA ENTRAR
    const usuarioValidado = listaLoginsValidos.find((item) =>
        item.email === usuario.value && item.senha === senhaUser.value
    );

    //SE O USUARIO FOR VALIDO, TOMO MINHA AÇÕES, SE NÃO TOMO OUTRAS.
    if (usuarioValidado) {
        console.log('ele pode entrar!', usuarioValidado);
        window.location.href = '../index.html';
    }
    else {
        console.log('ele não pode entrar!')
    }

}