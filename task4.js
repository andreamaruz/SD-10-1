export class FriendAge extends ageCalculator {
    name;
    year;
    month;
    day;
    
    constructor(name, year, month, day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    
    

    returnAge() {
    const edad = ageCalculator(this.year, this.month, this.day);
    return `${this.name} tiene ${edad} años hoy!`;
  }

  
}




