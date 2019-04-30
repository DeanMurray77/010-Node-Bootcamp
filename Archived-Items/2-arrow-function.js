const square = (x) => x * x;

console.log(square(6));

const event = {
    name: "Birthday Party",
    printGuestList: function () {
        console.log("Guest list for " + this.name);
    }
}


event.printGuestList();

const es6Event = {
    name: "Wedding",
    guestList: ['Dean', 'Dizzy', 'Elric'],
    printGuestList() {
        console.log("Guest list for " + this.name);
        this.guestList.forEach((guest)=> {
        console.log(guest + " Is attending the " + this.name);
        })
    }
}

es6Event.printGuestList();