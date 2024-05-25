import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DoubleSimpleMath, SimpleMath } from '../mathLogic/math-logic';
import { ListService } from '../abstractMethod/abstract-method';
import { ProductsListService } from '../service/products-list.service';
import { EmployeeListService } from '../service/employee-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: ListService,
      useClass: ProductsListService,
    },
    // {
    //   provide: ListService,
    //   useClass: EmployeeListService,
    // },
  ],
})
export class AppComponent implements OnInit {
  constructor(private listService: ListService) {}

  title = 'dependencyInversion';

  ngOnInit(): void {
    let obj1 = new SimpleMath();
    console.log(obj1.add(2, 4));

    let obj2 = new DoubleSimpleMath();
    console.log(obj2.add(2, 4));

    this.listService.getListItems$.subscribe((response) => {
      console.log('response', response);
    });
  }
}
