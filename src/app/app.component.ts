import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate,} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
      trigger('sleek',[
          state('void', style({transform: 'translateX(-20px)'})),

        transition('void => *',[
            animate(1000,style({transform: 'translateX(0px)'}))
            ]),

          transition('* => void',[
              animate(500,style({ transform: 'translateX(-200px)'}))
          ]),
      ])

  ]

})


export class AppComponent implements OnInit{
    items: { id: number, value: string }[] = [];

    ngOnInit() {}

    addItem(item) {
         this.items.push({id: 0, value: item});
    }

    removeItem(i) {
        this.items.splice(i, 1);
    }

}

