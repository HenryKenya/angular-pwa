import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Post} from '../../interfaces/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.dataService.getPosts().subscribe(data => {
     this.posts = data;
    });
  }
}
