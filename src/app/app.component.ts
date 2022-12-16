import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ["Angular", "React", "Vue"]
  topicHasError = true;
  errorMessage = "";

  userModel = new User('saurabh', 'saurabh.soni119@gmail.com', 9037111757,
   'default', 'morning', true)

   constructor( private ernollService: EnrollmentService){}


   validateTopic(value: string) {
    if(value === 'default'){
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
   }

   onSubmit(){ 
    this.ernollService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => this.errorMessage = error.statusText
    )
   }

}
