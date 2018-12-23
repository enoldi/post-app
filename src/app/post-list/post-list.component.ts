import { Component, OnInit, OnDestroy} from '@angular/core';
import { Post } from './post';
import { Subscription } from 'rxjs';
import { PostService } from '../service/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubcription: Subscription;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postsSubcription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );

    this.postService.getPosts();
    this.postService.emitPost();
  }

  ngOnDestroy(): void {
    this.postsSubcription.unsubscribe();
  }

}
