// Modal Part

class Data{
    constructor(name,type,age){
        this.name = name;
        this.type = type;
        this.age = age;
    };
};


// View Part

class Creation{
    create(){
        const division = document.createElement("div");
        // division.innerText = "New Era";
        return division;
    };
};

// Controller

class Control{
    start(){
        const bod = document.querySelector("body");
        const one = new Data("sifu","racoon",5);
        const get = new Creation();
        console.log(get.create())
        get.create().innerText = "Good"
        bod.appendChild(get.create());
    };
};

const get_started = new Control();
get_started.start()