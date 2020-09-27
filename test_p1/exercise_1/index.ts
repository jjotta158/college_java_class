import Proprietario from "./proprietario";
import Endereco from "./Endereco";
import Marca from "./Marca";
import Carro from "./carro";

const endereco = new Endereco('Horacio dePaula Ramos', 'Jardim Leoni', "lins", 'São Pulo', 16401380);
const proprietario = new Proprietario('JAiro', 46046085803, 12345678898, endereco)
const marca = new Marca('renault', 10, '1920', 1001)
const carro = new Carro("Ford KA","preto","2010", 1234321,proprietario, marca)

console.log(endereco,proprietario, marca, carro)