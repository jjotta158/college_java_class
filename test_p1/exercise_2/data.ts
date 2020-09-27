import Veiculo from './Veiculo'

const fake_hash_map = {
    wolkswagen: [
        new Veiculo('Gol', 'preto', '2020'),
        new Veiculo('Fox', 'prato', '2018'),
        new Veiculo('Golf', 'cinza', '2010'),
        new Veiculo('Jetta', 'preto', '2021'),
    ],
    chevrolet: [
        new Veiculo('Corsa', 'vermelho', '2000'),
        new Veiculo('Vectra', 'preto', '2010'),
        new Veiculo('Monza', 'preto', '2014'),
        new Veiculo('Astra', 'preto', '2020'),
    ],
    fiat: [
        new Veiculo('Uno', 'preto', '2020'),
        new Veiculo('Toro', 'prato', '2011'),
        new Veiculo('Palio', 'cinza', '2017'),
        new Veiculo('Punto', 'azul', '2021'),
    ]
}

export default fake_hash_map