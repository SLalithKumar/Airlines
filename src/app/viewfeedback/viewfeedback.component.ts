import { Component, OnInit } from '@angular/core';
import { UserFeedback } from '../model/userfeedback';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  feedback:UserFeedback[]=[];
  constructor(private service:FeedbackService) { }

  ngOnInit(): void {
    this.findAll();
  }
  findAll(){
    this.service.getAllFeedback().subscribe(data=>{
      this.feedback=data;
      console.log(this.feedback);
    })
  }

}
