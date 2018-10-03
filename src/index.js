class SmartCalculator {
  constructor(initialValue) {
    this.arrValue = [initialValue];
  }

  add(number) {
    this.arrValue.push('+', number);
    return this;
  }
  
  subtract(number) {
    this.arrValue.push('-', number);
    return this;
  }

  multiply(number) {
    this.arrValue.push('*', number);
    return this;
  }

  devide(number) {
    this.arrValue.push('/', number);
    return this;
  }

  pow(number) {
    this.arrValue.push('**', number);
    return this;
  }

  valueOf(){
    let arrPrior = ['+', '-', '*', '/'];
    let iterPrior = 4;
    
    for(let i = this.arrValue.length-1; i > 0; i--){

      if(this.arrValue[i] == '**'){
        
        this.arrValue.splice(i-1, 3, Math.pow(this.arrValue[i-1], this.arrValue[i+1]));
        i++;
      }
    }
    
    do{
      
      for(let i = 0; i<this.arrValue.length; i++){
        
        if(this.arrValue[i] == arrPrior[iterPrior-1]){
          
          switch(arrPrior[iterPrior-1]){
            case '*':
              this.arrValue.splice(i-1, 3, this.arrValue[i-1]*this.arrValue[i+1]);
              break;
            case '/':
              this.arrValue.splice(i-1, 3, this.arrValue[i-1]/this.arrValue[i+1]);
              break;
            case '+':
              this.arrValue.splice(i-1, 3, this.arrValue[i-1]+this.arrValue[i+1]);
              break;
            case '-':
              this.arrValue.splice(i-1, 3, this.arrValue[i-1]-this.arrValue[i+1]);
              break;
          }
          i--;
        }
      }

      iterPrior--;
    }while(iterPrior != 0);

    return this.arrValue.pop();
  }
}

module.exports = SmartCalculator;
