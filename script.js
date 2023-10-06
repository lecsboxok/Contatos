//definindo a classe Contatos
class Contatos {
    constructor(nome, email, telefone, mensagem){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.mensagem = mensagem;
    }
}
//Definido a classe GerenciadorContatos
class GerenciadorContatos {
    //Iniciliza a lista de contatos vazia
    constructor(){
        this.contatos = []
    }

    adicionarContatos(contato){
        //Adiciona um contato alista de contatos
        this.contatos.push(contato);
    }

    exibirContatos(){
        //obtém a lista de contatos
        const listaContatos = document.getElementById('contato-lista')

        //Limpa a lista de contatos
        listaContatos.innerHTML = ''

        //Para cada novo contato na lista de contatos, cria um novo elemento 'li'  adiciona na lista de contatos
        for(const contato of this.contatos){
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.mensagem}`

            listaContatos.appendChild(li)
            
        }
    }
}
// Cria um objeto classe GerenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

//Cria os elementos necessários
const contatoForm = document.getElementById('contato-form');
const nomeForm = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('tel');
const mensagemForm = document.getElementById('mensagem')
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const nome = nomeForm.value;
    const email = emailForm.value;
    const telefone = telefoneForm.value;
    const mensagem = mensagemForm.value;

    //Criando objeto da classe contato
    const contato = new Contatos(nome, email, telefone, mensagem);

    gerenciadorContatos.adicionarContatos(contato)

    nomeForm.value = ''
    emailForm.value = ''
    telefoneForm.value = ''
    mensagemForm.value = ''
});

//Estamos adicionando um manipulador de eventos para o botão mostrar contatos, ele exibe a lista de contatos
mostrarContatos.addEventListener('click', function(){
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block'
});

ocultarContatos.addEventListener('click', function(){
    listaContatos.style.display = 'none'
});
