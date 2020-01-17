import { Tweet } from "./../models/tweet.model";
import { HttpClient } from "@angular/common/http";
// import { Response } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class TweetsService {
  idToken=localStorage.getItem('idToken');

  constructor(private http: HttpClient) {}
  // Observable<Tweet[]>
  getTweets():Observable<Tweet[]>{
    return this.http
      .get(
        "https://angular-sample-twitter.firebaseio.com/tweets.json?auth=" +
          this.idToken
      ).pipe(map((data:Tweet[])=>{
        data.map(ele => {
          new Tweet().deserialize(ele)
        });
        console.log(data,"898989");
        return data;
      }))

  }
}
