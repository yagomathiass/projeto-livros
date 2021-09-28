import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable()
export class LivroService {

  constructor() { }

  listarTodos(): Livro[] {
    const livros = localStorage['livros']
    return livros ? JSON.parse(livros) : [];
  }
}
