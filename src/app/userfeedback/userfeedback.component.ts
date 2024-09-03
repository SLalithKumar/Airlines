import { Component, OnInit } from '@angular/core';
import { UserFeedback } from '../model/userfeedback';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-userfeedback',
  templateUrl: './userfeedback.component.html',
  styleUrls: ['./userfeedback.component.css']
})
export class UserfeedbackComponent implements OnInit {
  feed=new UserFeedback();
  constructor(private service:FeedbackService) { }

  ngOnInit(): void {
  }

  feedbacksubmit(){
    this.service.feedbackpost(this.feed).subscribe(data=>{
      alert("Feedback submitted successfully");
      this.feed=new UserFeedback();
    })
  }

}
