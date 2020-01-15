import { User } from './user.model';
import {Deserializable} from "./deserializable.model";

export class Tweet implements Deserializable {

    created_at:string
    users:User[]=[];


  deserialize(input: any) {
    Object.assign(this, input);
    this.users.concat(new User().deserialize(input.user))
    return this;
  }
}
