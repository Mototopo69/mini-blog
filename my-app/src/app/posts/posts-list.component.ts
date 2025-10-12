import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../services/post';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Lista Post</h2>
    <ul>
      <li *ngFor="let p of posts">
        <a [routerLink]="['/posts', p.id]">{{ p.title }}</a>
      </li>
    </ul>
  `
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
