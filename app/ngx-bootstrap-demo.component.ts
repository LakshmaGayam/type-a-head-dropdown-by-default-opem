import { Component } from '@angular/core';

@Component({
  selector: 'demo-typeahead-min-length',
  templateUrl: './min-length.html'
})
export class DemoTypeaheadMinLengthComponent {
  selected: string;
 
  states2 = [{
    name:'AndhraPradhes',
    id: 1
  }, {
    name: 'Telangana',
    id: 2
  }]

  onSelect(item) {
this.selected = item.item.name
const id = item.item.id
console.log(id)
  }
}
