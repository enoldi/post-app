import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post-list/post';
import {PostService} from '../service/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() articlePost: Post;

  constructor(private postService: PostService,
              private router: Router,
              ) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.articlePost.loveIts = this.articlePost.loveIts + 1;
    this.postService.savePosts();
    this.postService.emitPost();
  }

  onDontLoveIt() {
    console.log(this.articlePost.loveIts);
    this.articlePost.loveIts = this.articlePost.loveIts - 1;
    this.postService.savePosts();
    this.postService.emitPost();
  }

  onDeletePost(post: Post) {
    this.postService.removeBook(post);
  }

}
