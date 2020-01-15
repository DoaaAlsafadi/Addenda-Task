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
  idToken;

  constructor(private http: HttpClient) {}
  // Observable<Tweet[]>
  getTweets():any{
    return this.http
      .get(
        "https://angular-sample-twitter.firebaseio.com/tweets.json?auth=" +
          this.idToken
      ).pipe(
        map((res: Response) => {
          console.log(res);
        })
    );

  }
}
