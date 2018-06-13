import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeriodicTable, Group, Period, PeriodicTableElement } from '../periodic-table';
import { PeriodicTableService } from '../periodic-table.service';
import { HttpClient } from '@angular/common/http'
import { ElementData } from '@angular/core/src/view';
import { PeriodicTableElementsData } from '../../assets/data-update';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css', './button-styles.css', './element-colors.css', './element-styles.css', './legend-styles.css'],
  providers: []
})
export class HomePageComponent implements OnInit, OnDestroy {

  public table: PeriodicTable;
  public activeElement: PeriodicTableElement;
  public periodicTableData: PeriodicTableElementsData;

  public previousLegend: any;
  public previousGroup: any;
  public previousPeriod: any;

  constructor(public http: HttpClient) {
    this.table = new PeriodicTable(http);
    this.periodicTableData = new PeriodicTableElementsData();
    this.activeElement = new PeriodicTableElement();
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  mouseOverGroup(group: Group) {
    this.table.elements.forEach((element) => {
      if (element.xpos.toString() === group.name) {
        element.common_style_selected = 'opacity-dark';
      }
      else {
        element.common_style_unselected = 'opacity-faint';
      }
    })

    this.table.offelements.forEach((element) => {
      element.common_style_unselected = 'opacity-faint';
    })
  }

  mouseLeaveGroup(group: Group) {
    this.table.elements.forEach((element) => {
      element.common_style_selected = null;
      element.common_style_unselected = null;
    })

    this.table.offelements.forEach((element) => {
      element.common_style_selected = null;
      element.common_style_unselected = null;
    })
  }

  mouseOverPeriod(period: Period) {
    this.table.elements.forEach((element) => {
      if (element.period.toString() === period.name) {
        element.common_style_selected = 'opacity-dark';
      }
      else {
        element.common_style_unselected = 'opacity-faint';
      }
    })

    this.table.offelements.forEach((element) => {
      if (element.period === (Number.parseInt(period.name))) {
        element.common_style_selected = 'opacity-dark';
      }
      else {
        element.common_style_unselected = 'opacity-faint';
      }
    })
  }

  mouseLeavePeriod(period: Period) {
    this.table.elements.forEach((element) => {
      element.common_style_selected = null;
      element.common_style_unselected = null;
    })

    this.table.offelements.forEach((element) => {
      element.common_style_selected = null;
      element.common_style_unselected = null;
    })
  }

  mouseOver(element: PeriodicTableElement) {
    Object.keys(element).forEach((key) => {
      this.activeElement[key] = element[key];
    })

    Object.keys(this.periodicTableData.elements[element.number - 1]).forEach((key) => {
      this.activeElement[key] = this.periodicTableData.elements[element.number - 1][key];
    })
  }

  mouseLeave(element: PeriodicTableElement) {
    this.activeElement = new PeriodicTableElement();
  }

  selectCategory(category: string) {
    this.table.elements.forEach(element => {
      if (element.category.toLowerCase().includes(category)) {
        element.common_style_selected = 'opacity-dark';
      }
      else {
        element.common_style_unselected = 'opacity-faint';
      }
    });

    this.table.offelements.forEach(element => {
      if (element.category.toLowerCase().includes(category)) {
        element.common_style_selected = 'opacity-dark';
      }
      else {
        element.common_style_unselected = 'opacity-faint';
      }
    });
  }

  deselectCategory() {
    this.table.elements.forEach(element => {
      element.common_style_selected = null;
      element.common_style_unselected = null;

    });

    this.table.offelements.forEach(element => {
      element.common_style_selected = null;
      element.common_style_unselected = null;

    });
  }

  legendClick(event: any, category: string) {
    this.deselectCategory();
    let target = event.target;

    if (this.previousLegend && this.previousLegend != target) {
      this.previousLegend.style.border = null;
    }

    this.previousLegend = target;
    if (target.style.border != '1px solid black') {
      target.style.border = '1px solid black';
      this.selectCategory(category);
    }
    else {
      target.style.border = null;
    }
  }

  groupClick(event: any) {
    if (this.previousGroup) {
      this.previousGroup.style.color = 'grey';
    }
    
    let target = event.target;
    this.previousGroup = target;
    if (target.style.color != 'black') {
      target.style.color = 'black';
    }
    else {
      target.style.color = 'grey';

    }
  }

}