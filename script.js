// let alunos = [
//     {
//         nome: "gleidson",
//         email: "gleidson@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Fortaleza"
//     },
//     {
//         nome: "bruno",
//         email: "bruno@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Fortaleza"
//     },
//     {
//         nome: "kevin",
//         email: "kevin@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Fortaleza"
//     },
//     {
//         nome: "sarah",
//         email: "sarah@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Fortaleza"
//     },
//     {
//         nome: "lucas",
//         email: "lucas@gmail.com",
//         telefone: "(00) 12345-6789",
//         cidade: "Fortaleza"
//     },
// ];

function listarAluno(){
    let tabela = document.querySelector("#tabela");
    tabela.innerHTML = "";

    let lista = JSON.parse(localStorage.getItem("lista")) || [];

    for(let i = 0; i < lista.length; i++){
        tabela.innerHTML += `<tr>
                                <td>${lista[i].nome}</td>
                                <td>${lista[i].email}</td>
                                <td>${lista[i].telefone}</td>
                                <td>${lista[i].cidade}</td>
                                <td>
                                    <button class="btn btn-warning" type="button" 
                                    data-bs-toggle="offcanvas" 
                                    data-bs-target="#offcanvasRightEditar" 
                                    onclick="preencherForm(${i})"
                                    aria-controls="offcanvasRightEditar">Editar</button>

                                    <button class="btn btn-danger" onclick="deletarAluno(${i})">Apagar</button>
                            </tr>`
    }
} listarAluno();


function adicionarAluno(){
    event.preventDefault();
    let lista = JSON.parse(localStorage.getItem('lista')) || [];
    let aluno = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        cidade: cidade.value
    }
    // .push(aluno);
    lista.push(aluno);

    localStorage.setItem("lista", JSON.stringify(lista));

    cadastro.reset();

    let fechar = document.querySelector("#cadastro-fechar");
    fechar.dispatchEvent(new Event("click"));

    listarAluno();
}
function preencherForm(posicao)
{
    let lista = JSON.parse(localStorage.getItem("lista")) || [];
    e_nome.value = lista[posicao].nome;
    e_email.value = lista[posicao].email;
    e_telefone.value = lista[posicao].telefone;
    e_cidade.value = lista[posicao].cidade;
}
function editarAluno()
{

}


function deletarAluno(posicao) {
    let lista = JSON.parse(localStorage.getItem("lista")) || [];
    let novaLista = [];
    for(let i = 0; i < lista.length; i++){
        if(i != posicao){
            novaLista.push(lista[i]);
        }
    }
    localStorage.setItem("lista", JSON.stringify(novaLista))
    listarAluno();
}