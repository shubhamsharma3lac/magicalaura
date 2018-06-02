import "./data.json";
import { HttpClient } from '@angular/common/http'
import { PeriodicTableService } from "./periodic-table.service";

export class PeriodicTable {

    public groups: Group[];
    public periods: Period[];

    public elements: Element[];
    public offelements: Element[];


    constructor(private http: HttpClient) {
        this.groups = new Array<Group>();
        this.periods = new Array<Period>();

        this.elements = new Array<Element>();
        this.offelements = new Array<Element>();
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
        this.getJSON().then((res) => {
            var elements = res.elements;
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
        });
    }

    getJSON() {
        let promise = new Promise<any>((resolve, reject) => {
            this.http.get('./assets/data.json').toPromise()
                .then((result) => {
                    resolve(result);
                }, (err) => {
                    reject(err);
                })
        })

        return promise;
    }
}

export class Element {
    public style?: Object;
    public group_selected_style?: Object;

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
}

export class Group {
    constructor(
        public name: string
    ) { }
}

export class Period {
    constructor(
        public name: string
    ) { }
}