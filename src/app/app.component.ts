import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
faker.lorem.paragraph();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText=faker.lorem.paragraph();
  enteredText=' ';
  onInput(value:string){//event handler
    this.enteredText=value;
  }
  compare(randomLetter:string, enteredLetter:string){
    if(!enteredLetter){
      return 'pending'//will be applied to the span as a class name
    }
    return randomLetter===enteredLetter?'correct':'incorrect';
  }
}
//whenever we update a property on class it is updated in template automatically