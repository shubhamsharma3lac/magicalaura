
import { HttpClient } from '@angular/common/http'
import { PeriodicTableService } from "./periodic-table.service";
import { Data } from '../assets/data';

export class PeriodicTable {

    public groups: Group[];
    public periods: Period[];

    public elements: PeriodicTableElement[];
    public offelements: PeriodicTableElement[];


    constructor(private http: HttpClient) {
        this.groups = new Array<Group>();
        this.periods = new Array<Period>();

        this.elements = new Array<PeriodicTableElement>();
        this.offelements = new Array<PeriodicTableElement>();
        this.initialize();
    }

    initialize() {
        for (let index = 1; index < 19; index++) {
            this.groups.push(new Group(index.toString()));
        }

        for (let index = 1; index < 8; index++) {
            this.periods.push(new Period(index.toString()));
        }

        var that = this; // Preserve context

        let elements = this.getJSON();
        elements.forEach((element) => {


            if ((element.number > 56 && element.number < 72) ||
                (element.number > 88 && element.number < 104)) {
                element.style = {
                    'grid-column': element.xpos + 1
                }
                that.offelements.push(element);

            }
            else {
                if (element.number !== 119) {
                    element.style = {
                        'grid-column': element.xpos
                    }
                    that.elements.push(element);
                }
            }
        });
    }

    getJSON() {
        return new Data().elements;
    }
}

export class PeriodicTableElement {
    public style?: Object;
    public common_style_selected?: Object;
    public common_style_unselected?: Object;


    public name: string;
    public appearance: string;
    public atomic_mass: number;
    public boil?: number;
    public category: string;
    public color: string;
    public density?: number;
    public discovered_by: string;
    public melt?: number;
    public molar_heat?: number;
    public named_by: string;
    public number: number;
    public period: number;
    public phase: string;
    public source: string;
    public spectral_img: string;
    public summary: string;
    public symbol: string;
    public xpos: number;
    public ypos: number;
    public shells: number[];
    public atomicNumber: number;
    public atomicMass: string;
    public cpkHexColor: string;
    public electronicConfiguration: string;
    public electronegativity: number;
    public atomicRadius: number;
    public ionRadius: string;
    public vanDelWaalsRadius: number;
    public ionizationEnergy: number;
    public electronAffinity: number;
    public oxidationStates: string;
    public standardState: string;
    public bondingType: string;
    public meltingPoint: number;
    public boilingPoint: number;
    public groupBlock: string;
    public yearDiscovered: number;
}

export class Group {
    constructor(
        public name: string
    ) { }

    public selected_style: Object;
}

export class Period {
    constructor(
        public name: string
    ) { }

    public selected_style: Object;
}