import { Component, OnInit, Input } from '@angular/core';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  @Input() produto!: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
