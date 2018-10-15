import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-time-picker',
    template: `
        <label for="{{placeHolder}}">{{placeHolder}}</label>
        <select class="form-control"
                #selectedTime
                (change)="onChanged(selectedTime.value)"
                id="{{placeHolder}}"
                value="{{defaultValue}}">
                <option *ngFor="let timeitem of times">
                    {{timeitem}}
                </option>
        </select>
    `
})
export class TimePickerComponent implements OnInit {

    /** The placeholder property set by its caller */
    @Input() placeHolder: string;
    @Input() defaultValue: string;
    @Output() change = new EventEmitter();

    /** The constant date string */
    times: string[];

    onChanged(selectedTime) {
        this.change.emit(selectedTime);
    }

    constructor() { }

    ngOnInit() {
        // time array
        this.times = [];
        // minutes interval = 15 minutes
        const x = 15;
        // start time
        let tt = 0;
        // AM-PM
        const ap = ['AM', 'PM'];

        // loop to increment the time and push results in array
        for (let i = 0; tt < 24 * 60; i++) {
            // getting hours of day in 0-24 format
            const hh = Math.floor(tt / 60);
            // getting minutes of the hour in 0-55 format
            const mm = (tt % 60);
            // pushing data in array in [00:00 - 12:00 AM/PM format]
            this.times[i] = ((hh % 12) > 9) ?
                            ('0' + (hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2) + ap[Math.floor(hh / 12)] :
                            ('' + (hh % 12)).slice(-2) + ':' + ('0' + mm).slice(-2) + ap[Math.floor(hh / 12)];
            tt = tt + x;
        }

        // Make the 00PM into 12PM
        for (let i = 0; i < this.times.length; i++) {
            const searchTime = this.times[i];
            if (searchTime.endsWith('PM') && searchTime.startsWith('0:')) {
                this.times[i] = searchTime.replace('0', '12');
            }
        }
    }

}
