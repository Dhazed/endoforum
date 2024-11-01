import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: any;
  topCommentedPosts: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCategories();
    this.getTopCommentedPosts();
  }

  getCategories(): void {
    this.http.get<any>('http://localhost:1337/api/categories').subscribe(response => {
      this.categories = response.data;
    });
  }

  getTopCommentedPosts(): void {
    this.http.get<any>('http://localhost:1337/api/posts').subscribe(response => {
      this.topCommentedPosts = response.data;
    });
  }
}