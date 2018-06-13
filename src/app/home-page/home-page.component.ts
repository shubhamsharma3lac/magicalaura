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

  selectGroup(group: Group) {
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

  selectPeriod(period: Period) {
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

  legendClick(event: any, category: string) {
    let target = event.target;

    if (this.previousLegend && this.previousLegend.innerText != target.innerText) {
      this.previousLegend.style.border = null;
    }

    this.clearFilters();

    this.previousLegend = target;
    if (target.style.border != '1px solid black') {
      target.style.border = '1px solid black';
      this.selectCategory(category);
    }
    else {
      target.style.border = null;
    }
  
  }

  groupClick(event: any, group: Group) {
    this.clearActiveElements();
    if (group.selected_style == 'header-item-selected') {
      group.selected_style = null;
    }
    else {
      this.clearFilters();
      this.clearLegend();
      group.selected_style = 'header-item-selected';
      this.selectGroup(group);
    }
  }

  periodClick(event: any, period: Period) {
    this.clearActiveElements();
    if (period.selected_style == 'header-item-selected') {
      period.selected_style = null;
    }
    else {
      this.clearFilters();
      this.clearLegend();
      period.selected_style = 'header-item-selected';
      this.selectPeriod(period);
    }
  }

  clearFilters() {
    this.table.elements.forEach(element => {
      element.common_style_selected = null;
      element.common_style_unselected = null;

    });

    this.table.offelements.forEach(element => {
      element.common_style_selected = null;
      element.common_style_unselected = null;

    });

    this.table.groups.forEach((group) => {
      group.selected_style = null;
    })

    this.table.periods.forEach((period) => {
      period.selected_style = null;
    })
  }

  clearActiveElements(){
    this.table.elements.forEach((element) => {
      element.common_style_selected = null;
      element.common_style_unselected = null;
    })

    this.table.offelements.forEach((element) => {
      element.common_style_selected = null;
      element.common_style_unselected = null;
    })
  }

  clearLegend(){
    if (this.previousLegend)
      this.previousLegend.style.border = null;
  }

}