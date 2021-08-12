import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-othercase',
  templateUrl: './othercase.page.html',
  styleUrls: ['./othercase.page.scss'],
})
export class OthercasePage implements OnInit {
  
  mode = "collect";
  searchKeyword = '';
  
  constructor() { }

  ngOnInit() {
  }

  onChangeKeyword(event: any) {
    console.log(event.target.value);
    this.searchKeyword = event.target.value.trim();
  }

}
