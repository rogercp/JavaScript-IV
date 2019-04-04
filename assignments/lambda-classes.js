// CODE here for your Lambda Classes
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

class ProjectManager extends Instructor{
    constructor(props){
        super();
        this.gradClassName=props.gradClassName;
        this.favInstructor=props.favInstructor;
    }
    standUp(name,channel){
        return `${name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(name,subject){
        return `${name} debugs ${this.name}'s code on ${subject}`
    }
}

class Student extends Person{
    constructor(props){
        super(props);
        this.previousBackground=props.previousBackground;
        this.className=props.className;
        this.favSubjects=props.favSubjects;
        this.previousBackground=props.previousBackground;
        this.className=props.className;
        this.favSubjects=props.favSubjects;
    }








const jack = new Instructor({
    name: 'jack',
    age: 67,
    location: 'LA',
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Its the best!`
  });

  const kate = new Instructor({
    name: 'kate',
    location: 'NY',
    age: 45,
    gender: 'female',
    favLanguage: 'python',
    specialty: 'back-end',
    catchPhrase: `Can't beat that!`
  });



  const carlos = new ProjectManager({
    name: 'carlos',
    age: 45,
    location: 'Temecula',
    gender: 'male',
    favLanguage: 'ruby',
    specialty: 'full-stack',
    catchPhrase: `Thats all you get!`
    gradClassName:
    favInstructor:
  });

  const emily = new ProjectManager({
    name: 'emily',
    age: 45,
    location: 'San Diego',
    gender: 'female',
    favLanguage: 'css',
    specialty: 'UI',
    catchPhrase: `Who know bros!`
    gradClassName:
    favInstructor:
  });