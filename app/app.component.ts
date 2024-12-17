import { Component } from "@angular/core";


@Component({
    template: "<h1>{{title}}</h1>",
    selector: "app-root",
    standalone: false
})
export class AppComponent{
    title: string = "Nechami`s angular app";

    constructor() {
    }
}