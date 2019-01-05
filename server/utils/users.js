[{
    id: '',
    name: 'Andrew',
    room: 'The Office Fans'
}]

/*
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age
    }
    getUserDecription () {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

var me = new Person('Andrew', 25);
var description = me.getUserDecription();

console.log(description);
['Mike','Jen','Pai']
*/


class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name , room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser (id) {
        var user = this.getUser(id);

        if(user){
            this.users = this.users.filter((user) => user.id !== id)
        }

        return user;
    }
    getUser (id) {
        return this.users.filter((user) => user.id ===id)[0]
    }
    getUserList (room) {
        var users = this.users.filter((user) => {
            return user.room === room;
        });

        var namesArray = users.map((user)=> {
            return user.name
        });

        return namesArray;
    }
}

module.exports = {Users};