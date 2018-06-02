import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeriodicTable, Group, Period } from '../periodic-table';
import { PeriodicTableService } from '../periodic-table.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './button-styles.css'],
  providers: []
})
export class HomePageComponent implements OnInit, OnDestroy {

  public table: PeriodicTable;
  public activeElement: Element;

  constructor(public http: HttpClient) {
    this.table = new PeriodicTable(http);
  }

  ngOnInit() {

  }

  ngOnDestroy(){

  }

  mouseOverGroup(group : Group){
    this.table.elements.forEach((element) => {
      if(element.xpos.toString() === group.name){
        element.group_selected_style = 'group-selected';
      }
    })

    this.table.offelements.forEach((element) => {
      if(element.xpos === (Number.parseInt(group.name) - 1)){
        element.group_selected_style = 'group-selected';
      }
    })
  }

  mouseLeaveGroup(group : Group){
    this.table.elements.forEach((element) => {
      if(element.xpos.toString() === group.name){
        element.group_selected_style = null;
      }
    })

    this.table.offelements.forEach((element) => {
      if(element.xpos === (Number.parseInt(group.name) - 1)){
        element.group_selected_style = null;
      }
    })
  }

  mouseOverPeriod(period : Period){
    this.table.elements.forEach((element) => {
      if(element.period.toString() === period.name){
        element.group_selected_style = 'group-selected';
      }
    })

    this.table.offelements.forEach((element) => {
      if(element.period === (Number.parseInt(period.name))){
        element.group_selected_style = 'group-selected';
      }
    })
  }

  mouseLeavePeriod(period : Period){
    this.table.elements.forEach((element) => {
      if(element.period.toString() === period.name){
        element.group_selected_style = null;
      }
    })

    this.table.offelements.forEach((element) => {
      if(element.period === (Number.parseInt(period.name))){
        element.group_selected_style = null;
      }
    })
  }

  mouseOver(element: Element){
    this.activeElement = element;
  }

  mouseLeave(element: Element){
    this.activeElement = null;
  }

}