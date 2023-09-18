import { Component } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos/produtos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  itensCarrinho: IProdutoCarrinho[] = [];
  total: number = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }
   
  removerProduto(id: number) {
    this.carrinhoService.removerProduto(id);
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    // this.total = 0
    // this.itensCarrinho.forEach(item => {
    //   this.total += item.preco * item.quantidade
    // })
    // return this.total

    this.total = this.itensCarrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0) 
  }

  comprar() {
    alert('Compra realizada com sucesso!');
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['/produtos']);
  }
}
