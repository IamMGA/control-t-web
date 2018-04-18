import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: number, type: number): number {
    let percent = (type * 100 / value);
    return Math.round(percent);
  }

}
