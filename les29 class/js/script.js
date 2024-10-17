'use strict';

const car = {
    wheels: 4,
    speed: 200,
    color: 'black',
    drive() {
        console.log('go');
    }
}

//old 
// const ford = {
//     health: 100,
//     __proto__: car
// }

// console.log(ford.wheels);
// ford.drive()


//new 

const audi = Object.create(car)

audi.name = 'audi'
audi.color = 'red';


console.log(audi.color, audi.wheels, audi.name);
audi.drive()


console.log(audi.hasOwnProperty('name'));
console.log(audi.hasOwnProperty('wheels'));

console.log(audi);

//? .isPrototypeOf()- перевіряє чи є обєкт car простотипом для ауді повертає true of false
console.log(car.isPrototypeOf(audi));



const animal = {
    eats: true
}

const dog = Object.create(animal)
dog.barks = true;


for (let key in dog) {
    console.log(key);

    if (!dog.hasOwnProperty(key)) continue
    {
        console.log(key);  //barks eats  
    }

}


// повертає масив тільки власних ключів
const dogKeys = Object.keys(dog)

console.log(dogKeys); //[ 'barks' ]



//? класи

class User{
    constructor({name, email}){
        this.name = name
        this.email = email
    }

    getEmail() {
        return this.email
    }
    cahngeEmail(newEmail) {
        return this.email = newEmail
    }
}


const timur = new User({name:'Timur', email:'tim@gamil.com'});

const polina = new User({name:'POlina', email:'polya@gmail.com'});
console.log(polina, timur);
// User { name: 'POlina', email: 'polya@gmail.com' } User { name: 'Timur', email: 'tim@gamil.com' }


console.log(timur.getEmail());

console.log(timur.cahngeEmail('fizproekt@ukr.net'));




class MenuCard {
    constructor(src, alt, descr, price) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
        this.tramsfer = 27;
    }

    changeUAN() {
        this.price = this.price * 27
    }

    render() {
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
        `;
        this.parent.append(element);
    }
}


new MenuCard (
    '.img/loh.png',
    'very',
    'меню',
    'опис цього мене',
    10
).render()



// const obj = {
//     name: 'tanya',
//     showName() {
//         return this.name
//     }
// }




//?  привітні властивості

class UserMain {
    #email
    constructor({name, email}) {
        this.name = name
        this.#email = email
    }



    getEmail() {
        return this.#email
    }

    cahngeEmail(newEmail) {
        return this.#email = newEmail
    }
}


const sasha = new UserMain({name: 'Sasha', email: 'sasha@gmail.com'})

console.log(sasha.getEmail());

sasha.cahngeEmail('lohich@gamil.com')
console.log(sasha.getEmail());



// console.log(sasha.#email); - помилка бо приватна властвість





// геттери та сеттери


class UserMain {
    #email
    constructor({name, email}) {
        this.name = name
        this.#email = email
    }


    //геттер email
    get email() {
        return this.#email
    }

    //сеттер email
    set email(newEmail) {
        if (newEmail === '') {
            console.log('mistake');
            return
        }
        return (this.#email = newEmail)
    }
}




const sasha = new UserMain({name: 'Sasha', email: 'sasha@gmail.com'})


console.log(sasha.email);

sasha.email = 'lohich@gamil.com'
console.log(sasha.email);




//? статичні методи 



class UserMain {
    // #takenEmails
    static #takenEmails = [];

    static isEmailTaken(email) {
        return UserMain.#takenEmails.includes(email)
    }


    #email
    constructor({email}) {
        // this.name = name
        this.#email = email

        UserMain.#takenEmails.push(email)
    }


}


const orest = new UserMain({email: 'orest@gmail.com'});

console.log(UserMain.isEmailTaken('orest@gmail.com'));
console.log(UserMain.isEmailTaken('andrii@gmail.com'));









//?



class UserMain {
    email
    constructor(email) {
        // this.name = name
        this.email = email
    }


    //геттер email
    get email() {
        return this.email
    }

    //сеттер email
    set email(newEmail) {
        if (newEmail === '') {
            console.log('mistake');
            return
        }
        return (this.email = newEmail)
    }
}




class ContentEditor extends UserMain {
    constructor({email, posts}) {
        super(email)

        this.posts = posts
    }


    addPost(post) {
        this.posts.push(post)
    }
}


const editor = new ContentEditor({email: 'mango@gmail.com', posts: []})


console.log(editor);

editor.addPost('post-1')

console.log(editor.posts);


