import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[] = []

  constructor() { }

  adicionar(produto: IProdutoCarrinho) {
    this.itens.push(produto)
    localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }

  obterCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
    return carrinho;
  }

  limparCarrinho() {
    this.itens = []
    localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }

  removerProduto(id: number) {
    this.itens = this.itens.filter(item => item.id !== id)
    localStorage.setItem('carrinho', JSON.stringify(this.itens))
  }
}
