import { User } from './user.model';
import {Deserializable} from "./deserializable.model";

export class Tweet implements Deserializable {

    created_at:string;
    user:User;


  deserialize(input: any) {
    Object.assign(this, input);
    this.user = new User().deserialize(input.user);
    return this;
  }
}
