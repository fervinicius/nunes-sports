import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const produtoSchema = new Schema({
    nome: String,
    codigo: String,
    descricao: String,
    preco: Number, 
});

const Produto = model('Produto', produtoSchema);
export default Produto;
