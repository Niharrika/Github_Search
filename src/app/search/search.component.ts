import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../git-service.service';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
GitForm;
  constructor() { 
    this.GitForm=new FormGroup({
      userName : new FormControl('',Validators.required)
    })  
    //console.log(this.GitForm.value.userName)
  }

  ngOnInit(): void {
  }

}
