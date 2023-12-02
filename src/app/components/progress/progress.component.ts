import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

    @Input() name: string = '';
    @Input() color: string = 'black';
    @Input() values: number[] = []
    @Input() mediaValue: number = 0
    @Input() media: string = ''
    @Input() info: string = ''

}
