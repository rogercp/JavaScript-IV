// CODE here for your Lambda Classes

//person constructor
///////////////////////
class Person{
    constructor(props){
        this.name=props.name;
        this.age=props.age;
        this.location=props.location;
        this.gender=this.gender;
    }
    speak(){
        return `Hello my name is %{this.name}, I am from ${this.location}`;
    }
}
//student constructor 
////////////////////////
class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground=props.previousBackground;
        this.className=props.className;
        this.favSubjects=props.favSubjects;
    }
    listSubjects(){
        return this.favSubjects.toString();
        }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun spring challenge on ${subject}`
    }
}

//instructor constructor 
//////////////////////
class Instructor extends Person{
    constructor(props){
        super(props);
        this.specialty=props.specialty;
        this.favLanguage=props.favLanguage;
        this.catchPhrase=props.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}`;
    }
}

//PM constructor 
/////////////////////////
class ProjectManager extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName=props.gradClassName;
        this.favInstructor=props.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(name,subject){
        return `${this.name} debugs ${name}'s code on ${subject}`
    }
}
///////////////////////////////////////////////////////////////////////////////////////
//students
/////////////////////////
const roger = new Student({
    name: 'roger',
    age: 21,
    location: 'Escondido',
    gender: 'male',
    previousBackground:"Baretender",
    className:"Web19",
    favSubjects:['OOP','Functions','biology']
});

const niel = new Student({
    name: 'niel',
    age: 34,
    location: 'Sydney',
    gender: 'male',
    previousBackground:"Driver",
    className:"AND1",
    favSubjects:['User-Interface','math','tea','Chemistry','RWS']
});

//instructors
/////////////////////
const jack = new Instructor({
    name: 'jack',
    age: 67,
    location: 'LA',
    gender: 'male',
    specialty: 'Front-end',
    favLanguage: 'JavaScript',
    catchPhrase: `Its the best!`
  });

  const kate = new Instructor({
    name: 'kate',
    location: 'NY',
    age: 45,
    gender: 'female',
    specialty: 'back-end',
    favLanguage: 'python',
    catchPhrase: `Can't beat that!`
  });

//PM
///////////////////////
  const carlos = new ProjectManager({
    name: 'carlos',
    age: 45,
    location: 'Temecula',
    gender: 'male',
    specialty: 'full-stack',
    favLanguage: 'ruby',
    catchPhrase: `Thats all you get!`,
    gradClassName: "Web16",
    favInstructor: "Josh",
  });

  const emily = new ProjectManager({
    name: 'emily',
    age: 45,
    location: 'San Diego',
    gender: 'female',
    specialty: 'UI',
    favLanguage: 'css',
    catchPhrase: `Who know bros!`,
    gradClassName: "UI2",
    favInstructor: "Kyle"
  });


//invokations
////////////////////////
 
console.log(niel.age); 
console.log(kate.catchPhrase); 
console.log(carlos.specialty);
console.log(roger.listSubjects());
console.log(emily.standUp('web19'));
console.log(jack.demo("Javascript IV"));