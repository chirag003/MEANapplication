import { Component, OnInit } from '@angular/core';
import { UserService } from '../../app/shared/user.service';
import { Router } from "@angular/router";
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  public show:boolean = true;
  startDate
  endDate
  data ={
    startDate : '',
    endDate : ''
  }
  chartData : any
  constructor(private userService: UserService,private router : Router) {
   }
  ngOnInit() {
  }

  changeEvent(input:any){
    return new Promise(async (resolve,reject)=>{

      this.startDate = input.text.split(' -')[0].toString()
      this.endDate = input.text.split('- ')[1]
      console.log(this.startDate)
      console.log(this.endDate)
      this.data.startDate = this.startDate
      this.data.endDate = this.endDate
  
      await this.userService.showData(this.data).subscribe(
        res=>{
          let chart = new CanvasJS.Chart("chartContainer",{
            theme:"light3",
            animationEnabled: true,
            title:{
              text: "API RESULT STATS"
            },
            axisY :{
              includeZero: false,
            },
            toolTip: {
              shared: "true"
            },
            legend:{
              cursor:"pointer",
            },
            data: res['data']
          });
          chart.render();
        }
      )
     this.show = !this.show
    })
  }

}
