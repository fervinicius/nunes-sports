import mongoose from 'mongoose';
import Produto from './model/produto';

mongoose.connect('mongodb://localhost:27017/nunes-sports');

// INSERIR UM DADO
const equipamentosDeCorrida = await Produto.create({
    nome: 'Tênis verde',
    codigo: '41',
    descricao: 'Para corridas até 10km',
    preco: '220.00'
});

console.log(equipamentosDeCorrida);


// ATUALIZAR DADOS
equipamentosDeCorrida.codigo = "40";
await equipamentosDeCorrida.save();

console.log(equipamentosDeCorrida);


// ENCONTRAR DADOS
const article = await Blog.findById(id).exec();
console.log(article);


// EXCLUIR DADOS
const equipamento = await Produto.deleteOne({ codigo: 40 })

console.log(equipamento);
