import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pranav'
})
export class PranavPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
