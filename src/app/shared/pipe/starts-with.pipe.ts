import { Pipe, PipeTransform } from '@angular/core';
import { get, toString } from 'lodash';
@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {

  transform(value: any[], field: string, match: string): any {
    return value.filter((x: any) => toString(get(x, field)).toLowerCase().startsWith(match.toLowerCase()));
  }

}
