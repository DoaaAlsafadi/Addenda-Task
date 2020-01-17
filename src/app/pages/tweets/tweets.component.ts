import { TweetsService } from './../../services/tweets.service';
import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: any;

  constructor(private tweetService: TweetsService) { }

  ngOnInit() {
    this.getTweets();
  }

  getTweets() {
    this.tweetService.getTweets().subscribe(res => {
      this.tweets = <Tweet[]>res;
      console.log(res);
    }, error => {
      console.log(error);
    })
  }
}
