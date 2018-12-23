import {Post} from '../post-list/post';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class PostService {
  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {}

  emitPost() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
            .on(
              'value', (data) => {
                this.posts = data.val() ? data.val() : [];
                this.emitPost();
              }
            );
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPost();
  }

  removeBook(post: Post) {
    const postIndexRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );

    this.posts.splice(postIndexRemove, 1);
    this.savePosts();
    this.emitPost();
  }
}
