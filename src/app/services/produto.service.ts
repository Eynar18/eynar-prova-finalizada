import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }
  
  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`http://localhost:3000/produtos`);
  }

  obterDadosProduto(id: string): Observable<Produto> {
    return this.http.get<Produto>(`http://localhost:3000/produtos/${id}`);
  }

  adicionarProduto(produto:Produto): Observable<Produto> {
    return this.http.post<Produto>(`http://localhost:3000/produtos`, produto);
  }

  removerProduto(id: number): Observable<Produto> {
    return this.http.delete<Produto>(`http://localhost:3000/produtos/${id}`);
  }

  alterarProduto(id: string, produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`http://localhost:3000/produtos/${id}`, produto);
  }
}
