const dotenv = require('dotenv');
dotenv.config();

exports.romanoConstants = numeroRecibido =>{
    switch (numeroRecibido) {
        case 1:
            return process.env.ROMANO_UNO;
        case 5:
            return process.env.ROMANO_CINCO;
        case 10:
            return process.env.ROMANO_DIEZ;
        case 50:
            return process.env.ROMANO_CINCUENTA;
        case 100:
            return process.env.ROMANO_CIEN;
        case 500: 
            return process.env.ROMANO_QUINI;
        case 1000:
            return process.env.ROMANO_MIL;    
        case 5000:
            return process.env.ROMANO_CINCOMIL;
        case 10000:
            return process.env.ROMANO_DIEZMIL;
        default:
            return false;
    }   
}

exports.descomposeDigit = numeroRecibido =>{
    var newNumber = numeroRecibido;
    var romanNumber = '';

    if (this.romanoConstants(numeroRecibido) != false) {
        return this.romanoConstants(numeroRecibido);
    } else {
        do{
            if (this.identifyNumberType(newNumber) == 'tens') {
                romanNumber = romanNumber +  this.convertFunctionGeneralVersion(this.takeDigit(newNumber,10),'X', 'L', 'C');
            } else if (this.identifyNumberType(newNumber) == 'unity') {
                romanNumber = romanNumber + this.convertFunctionGeneralVersion(this.takeDigit(newNumber,1),'I', 'V', 'X');
            } else if (this.identifyNumberType(newNumber) == 'hundreds') {
                romanNumber = romanNumber + this.convertFunctionGeneralVersion(this.takeDigit(newNumber,100),'C', 'D', 'M');
            }else if (this.identifyNumberType(newNumber) == 'thousands') {
                if (newNumber<4000) {
                    romanNumber = romanNumber + this.convertFunctionGeneralVersion(this.takeDigit(newNumber,1000),'M', '!V', '!V');
                } else {
                    romanNumber = romanNumber + this.convertFunctionGeneralVersion(this.takeDigit(newNumber,1000),'!I', '!V', '!X');
                }
            }
            newNumber = this.deleteDigit(newNumber);
        }while(newNumber!=false)
        return romanNumber;
    } 

}

exports.digitLenght = numeroRecibido =>{
    return numeroRecibido.toString().length;
}

exports.identifyNumberType = numeroRecibido =>{
    if (this.digitLenght(numeroRecibido) === 1) {
        return 'unity';
    }
    if (this.digitLenght(numeroRecibido) === 2) {
        return 'tens';
    }
    if (this.digitLenght(numeroRecibido) === 3) {
        return 'hundreds';
    }
    if (this.digitLenght(numeroRecibido) === 4) {
        return 'thousands';
    }

}

exports.takeDigit = (numeroRecibido, digit) =>{
    return Math.floor(numeroRecibido/digit);
}

exports.iterConcatLetterGeneral = (numeroRecibido, minimunValue, interValue) =>{
    var finalConcat = minimunValue;
    for (let digito = 0; digito < numeroRecibido-1; digito++) {
        finalConcat = finalConcat + interValue;
    }
    return finalConcat;
}

exports.convertFunctionGeneralVersion = (numeroRecibido, minimoNumber, middleNumber, maximunNumber) =>{
    
    if (this.romanoConstants(numeroRecibido) != false ) {
        return this.romanoConstants(numeroRecibido);
    }else{
        if (numeroRecibido > 1 && numeroRecibido<5) {
            if (numeroRecibido == 4) {
                return minimoNumber + middleNumber;
            }else {
                return this.iterConcatLetterGeneral(numeroRecibido, minimoNumber,minimoNumber);
            }
        }
        if (numeroRecibido >= 6 && numeroRecibido < 10){
            if (numeroRecibido == 9 ) {
                return minimoNumber + maximunNumber;        
            }else {
                return this.iterConcatLetterGeneral(numeroRecibido-4,middleNumber,minimoNumber);
            }
        }
    }
}

exports.deleteDigit = numeroRecibido =>{
    var number = parseInt(numeroRecibido.toString().slice(1,numeroRecibido.toString().length));
    if (isNaN(number)) {
        return false;
    }else
        return number;
}