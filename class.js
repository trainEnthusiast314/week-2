class Phone {
  constructor(config = {}) {
    //interesting way to create constructor, particularly with large objects

    this.person = config.person;
    this.number = config.number;
    this.speaker = "ZZZZ";
    this.micophone = "AAA";
  }
  call(telNumber) {
    alert(`ringing ${telNumber}`);
  }
}

class SmartPhone extends Phone {
  constructor(config = {}) {
    super(config); //super allow inheritance of all constructor properties from superclass
  }
}

const myPhone = new Phone({ person: "daniel", number: "0000" });
const yourPhone = new SmartPhone({ person: "ryan", number: "1111" });

console.log(myPhone.number, yourPhone.number);
