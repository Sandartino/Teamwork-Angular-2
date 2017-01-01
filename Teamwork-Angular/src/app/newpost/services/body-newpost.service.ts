import {Injectable} from '@angular/core';

@Injectable()
export class BodyNewPostService {
  template:{};

  makeBody(title:string, imageurl:string, content:string) {

    return this.template = {
      "_acl": {
        "creator": "kid_rylCvcWSl"
      },
      "title": title,
      "content": {
        "_acl": {
          "creator": "kid_rylCvcWSl"
        },
        "isHovered": true,
        "image": imageurl,
        "content": content,
        "title": title
      },
      "image": imageurl,
      "_kmd": {
        "lmt": "2016-12-31T14:24:48.682Z",
        "ect": "2016-12-31T14:24:48.682Z"
      }
    }

  }

}
