import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Data {
  id: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-v13';

  data$: Observable<Data[]> = of([
    {
      id: '1',
      value: 1,
    },
    {
      id: '2',
      value: 2,
    }
  ])
}
