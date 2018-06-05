import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'electronicConfiguration'
})
export class ElectronicConfigurationPipe implements PipeTransform {

  private max_elec_s = 2;
  private max_elec_p = 6;
  private max_elec_d = 10;
  private max_elec_f = 14;

  transform(electrons: number, shell: number, orbital: string): any {
    let count;
    if(shell == 2){
      if(orbital == 's'){
        count = electrons >= 2 ? 2 : electrons;
      }

      if(orbital == 'p'){
        let available_electrons = electrons >= 2 ? electrons - 2 : 0;
        count = available_electrons >= 6 ? 6 : available_electrons;
      }
    }

    if(shell == 3){
      if(orbital == 's'){
        count = electrons >= 2 ? 2 : electrons;
      }

      if(orbital == 'p'){
        let available_electrons = electrons >= 2 ? electrons - 2 : 0;
        count = available_electrons >= 6 ? 6 : available_electrons;
      }

      if(orbital == 'd')
      {
        let available_electrons = electrons >= 8 ? electrons - 8 : 0;
        count = available_electrons >= 10 ? 10 : available_electrons;
      }
    }

    if(shell == 4){
      if(orbital == 's'){
        count = electrons >= 2 ? 2 : electrons;
      }

      if(orbital == 'p'){
        let available_electrons = electrons >= 2 ? electrons - 2 : 0;
        count = available_electrons >= 6 ? 6 : available_electrons;
      }

      if(orbital == 'd')
      {
        let available_electrons = electrons >= 8 ? electrons - 8 : 0;
        count = available_electrons >= 10 ? 10 : available_electrons;
      }

      if(orbital == 'f')
      {
        let available_electrons = electrons >= 18 ? electrons - 18 : 0;
        count = available_electrons >= 14 ? 14 : available_electrons;
      }
    }

    if(shell == 5){
      if(orbital == 's'){
        count = electrons >= 2 ? 2 : electrons;
      }

      if(orbital == 'p'){
        let available_electrons = electrons >= 2 ? electrons - 2 : 0;
        count = available_electrons >= 6 ? 6 : available_electrons;
      }

      if(orbital == 'd')
      {
        let available_electrons = electrons >= 8 ? electrons - 8 : 0;
        count = available_electrons >= 10 ? 10 : available_electrons;
      }

      if(orbital == 'f')
      {
        let available_electrons = electrons >= 18 ? electrons - 18 : 0;
        count = available_electrons >= 14 ? 14 : available_electrons;
      }
    }

    if(shell == 6){
      if(orbital == 's'){
        count = electrons >= 2 ? 2 : electrons;
      }

      if(orbital == 'p'){
        let available_electrons = electrons >= 2 ? electrons - 2 : 0;
        count = available_electrons >= 6 ? 6 : available_electrons;
      }

      if(orbital == 'd')
      {
        let available_electrons = electrons >= 8 ? electrons - 8 : 0;
        count = available_electrons >= 10 ? 10 : available_electrons;
      }
    }

    if(shell == 7){
      if(orbital == 's'){
        count = electrons >= 2 ? 2 : electrons;
      }

      if(orbital == 'p'){
        let available_electrons = electrons >= 2 ? electrons - 2 : 0;
        count = available_electrons >= 6 ? 6 : available_electrons;
      }

      if(orbital == 'd')
      {
        let available_electrons = electrons >= 18 ? electrons - 18 : 0;
        count = available_electrons >= 10 ? 10 : available_electrons;
      }
    }

    return count;
    
  }

}
