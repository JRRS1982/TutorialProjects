import { UserShow } from './UserShow';
import { UserForm } from './UserForm';
import { View } from "./View";
import { User, UserProps } from "../models/User";

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [key: string]: string } {  // override parent function
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    };
  }
  
  onRender(): void { // NESTING VIEWS HERE basically create two regions, one for show - the name and age and one for the form. 
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }
  
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}