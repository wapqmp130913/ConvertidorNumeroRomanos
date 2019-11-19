const main   = require('../convertRomano/main')
const assert = require('assert')

describe('romanoConstants ', function() {
    describe('Unit Test Node of constants', function() {
        it('send an argument 1 must return I ', function() {
            var res = main.romanoConstants(1);  
            assert.equal(res,'I');
        });
        it('send an argument 5 must return V ', function() {
            var res = main.romanoConstants(5); 
            assert.equal(res,'V');
        });
        it('send an argument 10 must return X ', function() {
            var res = main.romanoConstants(10);  
            assert.equal(res,'X');
        });
        it('send an argument 50 must return L', function() {
            var res = main.romanoConstants(50); 
            assert.equal(res,'L');
        });

       
        

    });

});



describe('digitLenght ', function() {
    describe('Unit Test Node', function() {
        it('send an argument 3435 must return 4 ', function() {
            var res = main.digitLenght(3435); 
            assert.equal(res,4);
        });
        it('send an argument 23453 must return 5 ', function() {
            var res = main.digitLenght(23453); 
            assert.equal(res,5);
        });
    });
});


describe('identifyNumberType', function() {
    describe('Unit Test Node', function() {
        it('send an argument 3435 must return miles', function() {
            var res = main.identifyNumberType(3435); 
            assert.equal(res,'thousands');
        });
        it('send an argument 435 must return miles', function() {
            var res = main.identifyNumberType(435); 
            assert.equal(res,'hundreds');
        });
        it('send an argument 35 must return miles', function() {
            var res = main.identifyNumberType(35); 
            assert.equal(res,'tens');
        });
        it('send an argument 5 must return miles', function() {
            var res = main.identifyNumberType(5); 
            assert.equal(res,'unity');
        });
    });
});


describe('takeDigit', function() {
    describe('Unit Test Node', function() {
        it('send an argument 3 must return 3', function() {
            var res = main.takeDigit(3,1); 
            assert.equal(res,3);
        });
        it('send an argument 35 must return 3', function() {
            var res = main.takeDigit(35,10); 
            assert.equal(res,3);
        });
        it('send an argument 435 must return 4', function() {
            var res = main.takeDigit(435,100); 
            assert.equal(res,4);
        });
        it('send an argument 2435 must return 2', function() {
            var res = main.takeDigit(2435,1000); 
            assert.equal(res,2);
        });
       

    });
});


describe('deleteDigit', function() {
    describe('Unit Test Node', function() {
        it('send an argument 3435 must return 435 deleting number 3', function() {
            var res = main.deleteDigit(3435); 
            assert.equal(res,435);
        });
        it('send an argument 435 must return 35 deleting number 4', function() {
            var res = main.deleteDigit(435); 
            assert.equal(res,35);
        });

        it('send an argument 35 must return 5 deleting number 3', function() {
            var res = main.deleteDigit(35); 
            assert.equal(res,5);
        });

        it('send an argument 5 must return false deleting number 5', function() {
            var res = main.deleteDigit(5); 
            assert.equal(res,false);
        });
    });
});



describe('convertFunctionGeneralVersion', function() {
    describe('Unit Test Node', function() {
        it('send an argument 4 must return  XL ', function() {
            var res = main.convertFunctionGeneralVersion(4,'X', 'L', 'C');  
            assert.equal(res,'XL');
        });
        it('send an argument 9 must return  XL ', function() {
            var res = main.convertFunctionGeneralVersion(9,'X', 'L', 'C');  
            assert.equal(res,'XC');
        });
        
    });
});


describe('iterConcatLetterGeneral', function() {
    describe('Unit Test Node', function() {
        it('send an argument 30 must return  XXX ', function() {
            var res = main.iterConcatLetterGeneral(3,'X','X');  
            assert.equal(res,'XXX');
        });

        it('send an argument 300 must return  CCC ', function() {
            var res = main.iterConcatLetterGeneral(3,'C','C');  
            assert.equal(res,'CCC');
        });

        it('send an argument 600 must return  DC ', function() {
            var res = main.iterConcatLetterGeneral(6-5+1,'D', 'C');  
            assert.equal(res,'DC');
        });

        it('send an argument 700 must return  DCC ', function() {
            var res = main.iterConcatLetterGeneral(7-5+1,'D', 'C');  
            assert.equal(res,'DCC');
        });

        it('send an argument 800 must return  DCCC ', function() {
            var res = main.iterConcatLetterGeneral(8-5+1,'D', 'C');  
            assert.equal(res,'DCCC');
        });
        
    });
});

describe('descomposeDigit', function() {
    describe('Unit Test Node', function() {
        it('send an argument 35 must return  XLV ', function() {
            var res = main.descomposeDigit(35);  
            assert.equal(res,'XXXV');
        });

        it('send an argument 5 must return  V ', function() {
            var res = main.descomposeDigit(5);  
            assert.equal(res,'V');
        });
       
        it('send an argument 38 must return  XXXVIII ', function() {
            var res = main.descomposeDigit(38);  
            assert.equal(res,'XXXVIII');
        });
        it('send an argument 78 must return  LXXVIII ', function() {
            var res = main.descomposeDigit(78);  
            assert.equal(res,'LXXVIII');
        });

        it('send an argument 100 must return  C ', function() {
            var res = main.descomposeDigit(100);  
            assert.equal(res,'C');
        });

        it('send an argument 981 must return  CMLXXXI ', function() {
            var res = main.descomposeDigit(981);  
            assert.equal(res,'CMLXXXI');
        });

        it('send an argument 998 must return  CMXCVIII ', function() {
            var res = main.descomposeDigit(998);  
            assert.equal(res,'CMXCVIII');
        });

        it('send an argument 838 must return  DCCCXXXVIII ', function() {
            var res = main.descomposeDigit(838);  
            assert.equal(res,'DCCCXXXVIII');
        });

        it('send an argument 3990 must return  MMMCMXC ', function() {
            var res = main.descomposeDigit(3990);  
            assert.equal(res,'MMMCMXC');
        });

        it('send an argument 3990 must return  MMMCMXC ', function() {
            var res = main.descomposeDigit(3990);  
            assert.equal(res,'MMMCMXC');
        });

        it('send an argument 4638 must return  IVDCXXXVIII ', function() {
            var res = main.descomposeDigit(4638);  
            assert.equal(res,'!I!VDCXXXVIII');
        });

        it('send an argument 4878 must return  !I!VDCCCLXXVIII ', function() {
            var res = main.descomposeDigit(4878);  
            assert.equal(res,'!I!VDCCCLXXVIII');
        });

        it('send an argument 5000 must return  !V ', function() {
            var res = main.descomposeDigit(5000);  
            assert.equal(res,'!V');
        });
        it('send an argument 10000 must return   !X', function() {
            var res = main.descomposeDigit(10000);  
            assert.equal(res,'!X');
        });


    });
});