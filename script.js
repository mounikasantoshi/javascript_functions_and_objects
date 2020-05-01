//function constructor
/*var john={
    name:'john',
    yearofbirth:1990,
    job:'teacher'
};
*/
/*
var Person =function(name,yearofbirth,job){
    this.name=name;
    this.yearofbirth=yearofbirth;
    this.job=job
}
    Person.prototype.calculateage=function(){
        console.log(2016-this.yearofbirth);
    }


    Person.prototype.lastname='smith';

//object creation
var john=new Person('john',1990,'teacher');
var jame=new Person('jame',1995,'student');
var mark=new Person('mark',1948,'retired');


//console.log(john);
john.calculateage();
jame.calculateage();
mark.calculateage();

console.log(john.lastname);
console.log(jame.lastname);
console.log(mark.lastname);
console.log(john);
*/


//object.create
/*
var personProto={
    calculateage:function(){
        console.log(2016-this.yearofbirth);
    }
};
var john=Object.create(personProto);
john.name='john';
john.yearofbirth=1990;
john.job='teacher';

var jane=Object.create(personProto,
{
    name: { value : 'jane'},
    yearofbirth: { value: 1969},
    job: { value: 'designer'}
});
*/
/*
//primitives vs objects
//primitives
var a=23;
var b=a;
a=35;
console.log(a, b);


//objects
var obj1={
    name:'john',
    age:'26'
};
var obj2=obj1;
obj1.age=30;
console.log(obj1.age);
console.log(obj2.age);

//functions
var age=27;
var obj={
    name:'mouni',
    city:'marri'
};
function change(a,b){
    a=30;
    b.city='san'
}

change(age,obj);

console.log(age);
console.log(obj.city);
*/

//passing function as arguments
/*
var years=[1990,1965,1937,2005,1998];

function arraycalc(arr,fn){
    var arrRes=[];
    for(var i=0; i< arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateage(el){
    return 2016-el;
}
function fullage(el){
    return el>=18;
}
function heartrate(el){
    if (el>=18 && el<=81){
        return Math.round(206.9-(0.67*el));
    }else{
        return -1;
    }
}

var ages=arraycalc(years,calculateage);
var fullages=arraycalc(ages,fullage);
var rate=arraycalc(ages,heartrate);
console.log(ages);
console.log(fullages);
console.log(rate);
*/

//function returning functions
/*
function interviewquestions(job){
    if(job==='designer'){
        return function(name){
            console.log(name+',can u explain what UX design is?');
        }
    }else if(job==='teacher'){
        return function(name){
            console.log('what subject do u teach,'+name+'?');
        }
    }else {
        return function(name){
            console.log('what do u do '+name+ '?');
        }
    }
}

//var teacherquestion=interviewquestions('teacher');
//var designerquestion=interviewquestions('designer');

//teacherquestion('john');
//designerquestion('mounika');
interviewquestions('')('mounika');
interviewquestions('teacher')('mounika');
*/

//IIFE
/*
//var score;
function game(){
    var score=Math.random() * 10;
    console.log(score>=5);
}
game();
console.log(score);

//var score;
(function(goodluck){
     var score=Math.random() * 10;
    console.log(score>=5-goodluck);
})(4);
//console.log(score);
*/
/*
//closures
function retirement(retirementAge){
    var a='years left until reirement.';
    return function(yearofbirth){
       var age=2020-yearofbirth;
       console.log((retirementAge-age)+a); 
    }
}
//var retirementUS=retirement(66);
//var retirementIndia=retirement(60);
//retirementUS(1990);
//retirementIndia(1995);
retirement(66)(1990);
retirement(60)(1995);


function interviewquestions(job){
    return function(name){
            if(job==='designer'){
            console.log(name+',can u explain what UX design is?');
         }else if(job==='teacher'){
            console.log('what subject do u teach,'+name+'?');
        }else {
            console.log('what do u do '+name+ '?');
        }
    }
}

interviewquestions('teacher')('john');

*/
/*
//bind call and apply
var john={
    name:'john',
    age:26,
    job:'teacher',
    presentation : function(style,timeofday){
        if (style==='formal'){
            console.log(' good '+timeofday+
            ' ladies and gentlemen! i\'m '+this.name+',i\'m a '
            +this.job+ ' and i\'m '+this.age+' years old.');
    
        }else if(style==='friendly'){
            console.log('hey! what\'s up? i\'m '+this.name+' i\'m a '+
            this.job+' and i\'m '+this.age+' years old.have a nice '
            +timeofday+'.');
        }
    }
}
var mounika ={
    name:'mounika',
    age:'26',
    job:'designer'
};

//john.presentation('formal','morning');
//john.presentation('frendly','evening');

//john.presentation.call(mounika,'formal','afternoon');
//john.presentation.apply(mounika,['friendly','afternoon']);

var johnfriendly=john.presentation.bind(john,'friendly');
var mounikafriendly=john.presentation.bind(mounika,'formal');
//johnfriendly('morning');
//johnfriendly('night');
//mounikafriendly('morning')


var years=[1990,1965,1937,2005,1998];

function arraycalc(arr,fn){
    var arrRes=[];
    for(var i=0; i< arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateage(el){
    return 2016-el;
}
function fullage(limit, el){
    return el>=limit;
}

var ages=arraycalc(years, calculateage);
var fullagejapan= arraycalc(ages,fullage.bind(this,20));

console.log(ages);
console.log(fullagejapan);
*/

//coding challenge
/*
(function(){
function Question(question, answers,correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}

Question.prototype.displayQuestion=
function(){
    console.log(this.question);

    for(var i=0;i< this.answers.length;i++){
        console.log(i + ': '+ this.answers[i]);
    }
}

Question.prototype.checkanswer=
function(ans){
    if (ans=== this.correct){
        console.log('correct answer');
    }else{
        console.log('wrong answer');
    }
}


var q1 =new Question('Is java script is the coolest language in the world',
['yes','no'],
0);

var q2= new Question('what is the name of this course\'s teacher? ',
['john','jame','micheal'],
1);

var q3=new Question('what does best discribe coding?',
['Hard','Easy','Boring'],
0);
//console.log(q1);

var questions=[q1,q2,q3];
var n=(Math.floor(Math.random()*questions.length));

questions[n].displayQuestion();

var answer=parseInt(prompt('please select the correct answer,'));

questions[n].checkanswer(answer);
})();
*/


//second challenge
(function(){
function Question(question, answers,correct){
    this.question=question;
    this.answers=answers;
    this.correct=correct;
}

Question.prototype.displayQuestion=
function(){
    console.log(this.question);

    for(var i=0;i< this.answers.length;i++){
        console.log(i + ': '+ this.answers[i]);
    }
}

Question.prototype.checkanswer=
function(ans,callback){
    var sc;
    if (ans=== this.correct){
        console.log('correct answer');
        sc=callback(true);
    }else{
        console.log('wrong answer');
        sc=callback(false);
    }
    this.displayscore(sc);
}

Question.prototype.displayscore= function(score){
    console.log('you current score is: '+ score );
    console.log('---------');
}

var q1 =new Question('Is java script is the coolest language in the world',
['yes','no'],
0);

var q2= new Question('what is the name of this course\'s teacher? ',
['john','jame','micheal'],
1);

var q3=new Question('what does best discribe coding?',
['Hard','Easy','Boring'],
0);
//console.log(q1);

var questions=[q1,q2,q3];

function score(){
    var sc=0;
    return function(correct){
        if (correct){
            sc++
        }
            return sc;
        }
    }
    var keepscore=score();

var keepscore =score();
function nextquestion(){

var n=(Math.floor(Math.random()*questions.length));

questions[n].displayQuestion();

var answer=prompt('please select the correct answer,');

if(answer !== 'exit'){
questions[n].checkanswer(parseInt(answer),keepscore);
nextquestion();
}
}
nextquestion();
})();




























































































