import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livro',
  templateUrl: './listar-livro.component.html',
  styleUrls: ['./listar-livro.component.css']
})
export class ListarLivroComponent implements OnInit {
  livros:Livro[];

  constructor(private livroService : LivroService) { }

  ngOnInit(): void {
    this.livros = this.listarTodos();
    this.livros = [
      new Livro(1, "Vidas Secas", "Graciliano Ramos", 1938, true),
      new Livro(2, "Vidas Secas", "Graciliano Ramos", 1938, false)  

    ]
  }

  listarTodos(): Livro[]{
    return this.livroService.listarTodos();
  }
}
