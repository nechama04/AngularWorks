import { Component } from "@angular/core";


@Component({
    templateUrl: "app.component.html",
    selector: "app-root",
    standalone: false
})
export class AppComponent {
    title: string = "Nechami`s angular app ";
    myFunc() {
        const currentHour = new Date().getHours();
        if (currentHour >= 5 && currentHour < 12) {
            return "בוקר טוב";
        } else if (currentHour >= 12 && currentHour < 20) {
            return "צהריים טובים";
        } else {
            return "ערב טוב";
        }
    }
    constructor() {
    }
}
