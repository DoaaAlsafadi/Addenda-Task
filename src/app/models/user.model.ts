import {Deserializable} from "./deserializable.model";

export class User implements Deserializable {

  id:string;

  name:string;

  screen_name:string

  indices:Number[];


   deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
