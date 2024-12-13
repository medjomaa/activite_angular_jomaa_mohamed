import { Pipe, PipeTransform,Component } from '@angular/core';
import { ListCategoriesComponent } from './list-categories/list-categories.component';

@Pipe({
  name: 'tab'
})
export class TabPipe implements PipeTransform {

  transform(values: any[],ch:string, ...args: unknown[]): any[] {
    if(!values || !ch){
      return values
    }
    return values.filter(value =>value.includes(ch.toLowerCase()));
  }

}
