import { TweetsService } from './../../services/tweets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {

  constructor(private tweetService:TweetsService) { }

  ngOnInit() {
  }

  getTweets(){
this.tweetService.getTweets().subscribe(res=> {
  console.log(res);

})
  }
}
