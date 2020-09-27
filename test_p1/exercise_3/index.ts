import { question } from "readline-sync";
import data from './TesteMapaAluno'

function init() {
    let matricula: number;
    do {
        matricula = parseInt(question("Digite o número da matrícula ou 0 para sair: "));
        if (data[matricula]) {
            console.log(data[matricula])
        } else {
            console.log('Aluno não encontrado')
        }
    } while (matricula != 0)
}

init()