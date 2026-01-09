import { ageCalculator} from "./task3.js"; //ruta relativa hacia el archivo
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
    const edad = new FriendAge(this.year, this.month, this.day);
    return `${this.name} tiene ${edad} años hoy!`;
  }

  
}
if (mes < 0 || (theMonth === 0 && hoy.getDate() < birthday.getDate())) {
    age--;
  }



