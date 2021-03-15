import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone',
})
export class FormatPhonePipe implements PipeTransform {
  transform(value: string, char: string = ' '): string {
    return value.replace(/\./g, char);
  }
}
