import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
  id!: string | null;
  produtoForm: FormGroup;

  constructor(private router: Router, private produtoService: ProdutoService, private route: ActivatedRoute) { 
    this.produtoForm = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      fabricante: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
      conteudo: new FormControl(null, [Validators.required, Validators.min(10)]),
      medida: new FormControl(null, Validators.required),
      dataVencimento: new FormControl(null, Validators.required),
      emEstoque: new FormControl()
    });
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id")  });

    if (this.id) {
      this.produtoService.obterDadosProduto(this.id)
        .subscribe((produto) => {
          this.produtoForm.patchValue(produto);
      });
    }
  }

  salvar() {
    if (this.produtoForm.valid) {
      if (this.id) {
        this.produtoService.alterarProduto(this.id, this.produtoForm.value)
          .pipe(first())
            .subscribe(() => {});
            this.router.navigate(['produtos']);
      } else {
        const novoProduto = this.produtoForm.getRawValue();

        this.produtoService.adicionarProduto(novoProduto)
          .subscribe(() => {
            this.router.navigate(['produtos']);
        });
      }
    } else {
      console.error('Formulário inválido')
    }
  }
}
