export default function numFor(number:number, decimal:number){
    return number.toFixed(decimal).replace('.', ',');    
}