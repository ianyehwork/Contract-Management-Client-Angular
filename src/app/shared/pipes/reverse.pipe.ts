import { Pipe, PipeTransform } from '@angular/core';
import { filter, reverse } from 'lodash';
@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    // remove dismissed notifications
    value = filter(value, ['dismissed', false]);
    // retrun the reverse value of the array
    return reverse(value);
  }

}
