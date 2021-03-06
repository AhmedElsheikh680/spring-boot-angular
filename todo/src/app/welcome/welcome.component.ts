import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name='';
  welcomeMessageFromService:string;
  //Activated Route
  constructor(private route:ActivatedRoute
    ,private service:WelcomeDataService) { }

  ngOnInit(): void {  
    // console.log(this.route.snapshot.params['name']); 
    this.name=this.route.snapshot.params['name'];
  }
  getWelcomeMessage(){
    // console.log("Hello");
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response),
      error =>this.handleErrorResponse(error));
  }
  getWelcomeMessageWithParameter(){
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfullResponse(response),
      error =>this.handleErrorResponse(error)
    );
  }
  handleSuccessfullResponse(response){
    this.welcomeMessageFromService = response.message; 
    // console.log(response);
    // console.log(response.message);
  }
  handleErrorResponse(error){
    this.welcomeMessageFromService=error.error.message;
  
  }
}
