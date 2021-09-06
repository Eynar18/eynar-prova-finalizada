import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';
import { CadastroProdutoComponent } from './components/cadastro-produto/cadastro-produto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounteudoMedidaPipe } from './pipes/conteudo-medida.pipe';
import { SimNaoPipe } from './pipes/sim-nao.pipe';
import { RouterModule } from '@angular/router';
import { DetalhesProdutoComponent } from './components/detalhes-produto/detalhes-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { AppListaProdutosComponent } from './app-lista-produtos/app-lista-produtos.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppCadastroProdutoComponent } from './app-cadastro-produto/app-cadastro-produto.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    CadastroProdutoComponent,
    CounteudoMedidaPipe,
    SimNaoPipe,
    DetalhesProdutoComponent,
    AppListaProdutosComponent,
    AppCadastroProdutoComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'produtos',
        children: [
          {
            path: '', component: ListaProdutosComponent
          },
          {
            path: 'cadastrar', component: CadastroProdutoComponent
          },
          {
            path: 'editar/:id', component: CadastroProdutoComponent
          }
        ]
      },
      {
        path: '', component: AppComponent
      }
    ]),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
