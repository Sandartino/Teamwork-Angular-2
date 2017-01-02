import {Component, Input, OnInit } from '@angular/core';
import { IComment } from './Comments';
import { CommentsService } from '../services/comments.service';
import { Router } from '@angular/router';

@Component({
    selector : 'comment-box',
    templateUrl : './comments.component.html',
    styleUrls : [ './comments.component.css' ],
    providers : [ CommentsService ]
})

export class CommentComponent implements OnInit {
    comments: IComment[];
    private commentService: CommentsService;
    @Input() articleId: string;
    errorMessage: any;
    private currentUser = sessionStorage.getItem('username');

    commentData = {
        content: ''
    };

    constructor(commentService: CommentsService, private router: Router) {
        this.commentService = commentService;
    }

    addComment() {
        const { content } = this.commentData;
        this.commentData['author'] = sessionStorage.getItem('username');
        this.commentData['articleId'] = this.articleId;
        this.commentService.postComment(this.commentData)
            .subscribe(
                () => {
                        this.router.navigate(['/articles']);
                },
                        error => this.errorMessage = <any>error
            );
    }

    ngOnInit(): void {
        this.commentService.getComments(this.articleId)
            .subscribe(
                commentsArr => {
                    for (let i = 0; i < commentsArr.length; i++) {
                        let comment = commentsArr[i];
                        if (comment.articleId !== this.articleId) {
                            commentsArr.splice(i, 1);
                            i--;
                        }
                    }
                    this.comments = commentsArr;
                },
                        error => this.errorMessage = <any>error
            );
    }

    deleteComment(_id: string) {
      this.commentService.deleteComment(_id)
          .subscribe(
              userInfo => {
                this.router.navigate(['/articles']);
              },
              () => {
                console.log('Error occurred');
              }
          );
  }
}
