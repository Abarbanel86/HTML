/*----------------------------------------------------------------------------/
/ This file will validate information inseted in a registration from if       /
/ the infromation is valid it will create/update an SQL server with the lead  /
/ details.                                                                    /
/ registration from need to have those fields:                                /
/ *First name = fName;                                                        /
/ *Last name = lName;                                                         /
/ *Email = email;                                                             /
/ *Phone = tel;                                                               /
/----------------------------------------------------------------------------*/

/* ----- Server Attributes ----- */
const SERVER_ADRESS = "127.0.0.1";
const SERVER_PW = "vfk cachk hvc";

/* ----- Get Items ------*/
btn = document.getElementById("btn");
fname = document.getElementById("fName");
lname = document.getElementById("lName");
email = document.getElementById("email");
document.getElementById("btn").onsubmit = sayHello;

/* ------ Rules -----*/
fname.onblur = nameValidate;
lname.onblur = nameValidate;
email.onblur = emailValidate;
btn.onClick = sayHello;
btn.onsubmit = sayHello;

/* ----- Validate Regex functions ----- */

function nameValidate()
{
    //var inputClassList = input.class
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    console.log("checking - " + this.value);
    if((() => {var x = new Set(this.value);

                console.log(x.size);
                return (x.size > 1);})())
    { 
        if (regex.test(this.value)) 
        {
            console.log("name - ok");
            this.classList.remove("bad_input");
            this.setAttribute("class", "good_input");
            console.log(this.classList);
            return true;
        }
    }

    console.log("name - not ok");
    this.classList.remove("good_input");
    this.setAttribute("class", "bad_input");
    console.log(this.classList);
    return false;
}

function emailValidate() {
    console.log("checking - " + this.value);
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(this.value).toLowerCase()))
    {
        this.classList.remove("bad_input");
        this.setAttribute("class", "good_input");
    }
    else
    {
        this.classList.remove("good_input");
        this.setAttribute("class", "bad_input");
    }
}

function sayHello()
{
    console.log("hello");
}
/* ----- CRUD functions -----*/
