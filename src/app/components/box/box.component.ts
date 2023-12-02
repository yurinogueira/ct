import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

    @Input() selectView: number = 0;
    @Output() infoEvent = new EventEmitter<number>();

    emitInfo(value: number) {
        this.infoEvent.emit(value);
    }

}
