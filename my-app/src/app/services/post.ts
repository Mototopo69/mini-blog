import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class PostService {
  private posts: Post[] = [
    { id: 1, title: 'Angular Basics', author: 'Mario', category: 'Angular', content: 'Introduzione ai componenti.', date: new Date() },
    { id: 2, title: 'Servizi Angular', author: 'Giulia', category: 'Angular', content: 'Come usare i servizi.', date: new Date() }
  ];

  getPostById(id: number): Post | undefined {
    return this.posts.find(p => p.id === id);
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter(p => p.id !== id);
  }

  getPosts(): Post[] {
    return this.posts;
  }
}
