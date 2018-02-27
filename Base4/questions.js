
var stringSize = function (text) {
    var string = "This text has a certain number of characters";
    var result =string.length;
    return result;

}
var replaceCharacterE = function (text) {
    var string ="This text has a certain number of characters";
    var result = string.replace("e", " ");
    return result;
}
var concatString = function (text1, text2) {
    var string1 = 'el Javascript shi '; 
    var string2 = "ra2e3";
    var result =string1.concat(string2);
    return result;
}
var showChar5 = function (text) {
    var string = "TDD kicks ass";
    var result = string.charAt(4);
    return result;
}
var showChar9 = function (text) {
    var string = 'But it is really annoying to write';
    var result = string.substr(0, 9);
    return result;
}
var toCapitals = function (text) {
    var string = "Another useful function";
    var result= string.toUpperCase();
    return result;
}
var toLowerCase = function (text) {
    var string = "This is a sentence!";
    var result = string.toLowerCase();
    return result;

}
var removeSpaces = function (text) {
    var string = ' Rome wasn\'t built in a day ';
    var result = string.trim();
    return result;
}
var IsString = function (text) {
    var c = 'Is this a string?';
    if (typeof c == 'string') {
     return true;
    }
    else {
        return false;
    }
    }
var getExtension = function (text) {
    var c = "images/photo01.jpg"
    return c.split('.').pop();
}
var countSpaces = function (text) {
    var string = 'Sire open we have a big one!';
    var result = (string.split(" ").length - 1);
    return result; 

}
var InverseString = function (text) {
    var string = 'Après demain, à partir d\'aujourd\'hui?';
    var result = '';
    for (i = string.length - 1; i >= 0; i--)
        result += string[i];
    return result;
} 


var power = function (x, y) {
var x= 2;
var y = 3;
var result = Math.pow(x,y);
return result;
}

var absoluteValue = function (num) {
var h = -5;
var result = Math.abs(h);
return result;
}
var absoluteValueArray = function (array) {
    var array = [-5, -50, -25, -568];
    for(i = 0; i<array.length; i++){
    var x = array[i];
    Math.abs(x);
   

    }
    return x;
}

var circleSurface = function (radius) {
    var r = 5;
    var result = Math.round(Math.PI * Math.pow(r, 2));
    return result;
}
var hypothenuse = function (ab, ac) {
var x = 5;
var y = 8;
var hypothenuse = Math.pow(x,2)+Math.pow(y,2);
    var result = Math.sqrt(hypothenuse);
    return result;
}
var BMI = function (weight, height) {
    var x = 65;
    var y = 1.75;
    var c = ((x / Math.pow(y, 2)).toFixed(2));
    var x =parseFloat(c);
    return x;   
}

var createLanguagesArray = function () {
    var result = ["Html", "CSS", "Java", "PHP"];
    return result;
}

var createNumbersArray = function () {
    var result = [0, 1, 2, 3, 4, 5];
    return result;
}

var replaceElement = function (languages) {
    var c = ["Html", "CSS", "Java", "PHP"];
    for(i=0; i<c.length; i++){
        c[2]="Javascript";
        return c;
    }
}

var addElement = function (languages) {
    var c = ["Html", "CSS", "Javascript", "PHP"];
    c.push("Ruby", "Python");
    return c;
    
    } 

        

var addNumberElement = function (numbers) {
    var array = [0, 1, 2, 3, 4, 5];
   array.unshift(-2, -1);
   return array ;
}

var removeFirst = function (languages) {
    var array = ['Html', 'CSS', 'Javascript', 'PHP', 'Ruby', 'Python']
    array.splice(0,1);
    return array;

}


var removeLast = function (languages) {
    var array = ['CSS', 'Javascript', 'PHP', 'Ruby', 'Python'];
    array.splice(4, 1);
    return array;
}

var convertStrToArr = function (social_arr) {
    var string = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
    var x = string.split(",");
    return x;
     
}

var convertArrToStr = function (languages) {
    var array = ['CSS', 'Javascript', 'PHP', 'Ruby'];
   var x =  array.toString();
    return x;
}

var sortArr = function (social_arr) {
    var array = ['Facebook', 'Twitter', 'Google +', 'Viadeo', 'LinkedIn'];
    var x = array.sort();
    return x;
}

var invertArr = function (social_arr){
    var array = ['CSS', 'Javascript', 'PHP', 'Ruby'];
    var x =array.reverse();
    return x;
}
