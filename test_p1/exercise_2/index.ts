import data from "./data";
import {question} from 'readline-sync'


function mostrarVeiculos() {
    for (let marca in data) {
        console.log(
            marca,
            data[marca].map((modelo) => {
                return {
                    modelo: modelo.modelo,
                    cor: modelo.cor,
                    ano_fabricacao: modelo.ano_fabricacao,
                };
            })
        );
    }
}

function mostrarVeiculoAPartirDaMarca(marca: string) {
    console.log(
        data[marca].map((modelo) => {
            return {
                modelo: modelo.modelo,
                cor: modelo.cor,
                ano_fabricacao: modelo.ano_fabricacao,
            };
        })
    );
}

function init() {
    
    const resp1 = parseInt(question("Digite o que você quer fazer 0:listar tudo 1:filtrar por marca"));
    if (resp1 == 0) {
      mostrarVeiculos();
    } else if (resp1 == 1) {
        const resp2 = parseInt(question(
          "digite uma opção para o nome da marca 0:wolkswagen, 1:chevrolet, 2:fiat"
        ));

      if (resp2 == 0) {
        mostrarVeiculoAPartirDaMarca("wolkswagen");
      } else if (resp2 == 1) {
        mostrarVeiculoAPartirDaMarca("chevrolet");
      } else {
        mostrarVeiculoAPartirDaMarca("fiat");
      }
    }
    process.stdin.on('readable', async  () => {
        try {
            let option: number = await parseInt( process.stdin.read())
            
        } catch (e) {
            console.log(e.message)
        }
    })
}

init()