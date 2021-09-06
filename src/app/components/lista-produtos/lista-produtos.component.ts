import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  produtos: Produto[] = [];
  produtoSelecionado!: Produto | null;

  constructor(private router: Router, private produtoService: ProdutoService) { 
    this.obterProdutos();
  }

  ngOnInit() {
  }

  obterProdutos() {
    this.produtoService.listarProdutos().subscribe((lista) => {
      this.produtos = lista;
    });
  }

  removerSelecionado(produto: Produto) {
    if (window.confirm("Você realmente quer excluir o produto?")) {
      this.produtoService.removerProduto(produto.id)
      .subscribe(() => {
        this.obterProdutos();
        this.produtoSelecionado = null;
      });
    }
    
  }

  adicionar() {
    this.router.navigate(['produtos', 'cadastrar']);
  }

  editar(produto: { id: any; }) {
    this.router.navigate(['produtos', 'editar', produto.id]);
  }

  deselecionar() {
    this.produtoSelecionado = null;
  }

  selecionar(produto: Produto) {
    this.produtoSelecionado = produto;
  }
}
