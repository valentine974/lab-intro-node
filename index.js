class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    if(this.items.length){
      this.items.sort((a,b)=> a-b) }
    this.length = this.items.length;
    
  }

  get(pos) {
    if(this.items.length-1<pos){
      throw new Error('OutOfBounds');
    } 
    else { 
      return this.items[pos]

  }}

  max() {

    if(!this.items.length){
      throw new Error('EmptySortedList'); }
      else {
        return this.items[this.length-1]
      }
  
  }

  min() {

    if(!this.items.length){
      throw new Error('EmptySortedList'); }
      else {
        return this.items[0]
      }
  }

  sum() { 
    if(!this.items.length){
      return 0 }
      else { 
        let sumValue = this.items.reduce((acc, cV) => acc + cV, 0);
        return sumValue
      }
  }

  // sum() { 
  //   if(!this.items.length){
  //     return 0 }
  //     else { 
  //       let sum = 0;
  //       for (let i=0; i<this.items.length; i++){
  //         sum += this.items[i]

  //       }
  //       return sum
        
           
  //     }
  // }

  avg() {
    if(!this.items.length){ throw new Error('EmptySortedList'); }
      else {
        let avg = this.sum()/this.length
    return avg
      }
    
  }
}

module.exports = SortedList;

const list = new SortedList();
list.add(2);
list.add(5);
list.add(7);
list.add(6);
list.get(2);
list.max();
list.min();
list.sum();
list.avg()
