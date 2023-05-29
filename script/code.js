// 1. Variable

    // Variables are containers for storing information.
// 2. Value

    // JavaScript values are the values that comprise values like Booleans, Strings, arrays, numbers, etc.
// 3. Data type

    // Data types describe the different types or kinds of data that we're gonna be working with and storing in variables.
// 4. Initialization

    // When you declare a variable it is automatically initialized, which means memory is allocated for the variable by the JavaScript engine.
// 5. Tell me the difference between let, var and const

    // Variables declared by let are only available inside the block where they're defined. Variables declared by var are available throughout the function in which they're declared. If you never want a variable to change, const is the keyword to use.
// 6. What is a variable scope?

    // Variable Scope. Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block.
// 7. When can you decide when to use a for or while, forEach and do while loop?

    // Use a for loop to iterate over an array.
    // Use a for loop when you know the loop should execute n times.
    // Use a while loop for reading a file into a variable.
    // Use a while loop when asking for user input.
    // Use a while loop when the increment value is nonstandard.

// 8. Define hoisting and variable scoping

    // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

    function fullName(){
        return console.log("Eighton-Lee Antonio Paulse")
    }
    
    fullName()

    // Q2
    let firstName = "Eighton-Lee";
    let lastName = "Paulse";
    let age = 18;
    let listOfSubjects = ['Mathematical Literacy', 'English Home Language', 'Afrikaans First Additional Language', 'Life Orientation', 'Computer Applications Technology', 'Business Studies', 'Life Sciences'];
    let address = {
        streetName:'Robin',
        streetNumber:'10',
        suburb:'Eersteriver',
        city:'cape Town',
        country:'south africa'
    }

    console.log(`My name is  ${firstName} My surname is  ${lastName} I am  ${age} years old , and in school I had ${listOfSubjects} And I live at ${[address]}`)

  // Q3

    const firstValue = document.querySelector('#value1')
    const operator = document.querySelector('#value2')
    const secondValue = document.querySelector('#value3')
    const calcButton = document.querySelector('#calculate')
    const finalHeading = document.querySelector('#value')

    calcButton.addEventListener('click',()=>{

        let method = eval(firstValue.value + operator.value + secondValue.value)
        if(firstValue.value,secondValue.value,operator.value,finalHeading == ''){
            firstValue.value,secondValue.value,operator.value,finalHeading === ''
        }else{
            finalHeading.innerHTML = Number(method)
            console.log(method)
            console.log([method])
        }
    })

    // Q4

    let subject = "programming";

    function revLetters(subject){
        return subject.split('').reverse().join('')
    }

    console.log(revLetters(subject))

    let info = [
        {
        name: 'Mish-Al',
        dob: new Date('2020-05-31')
    },
    {
        name:'Laiquah',
        dob: '2017-06-24'
    }
]

let birth = info.find(info => info.dob === info.dob)

// console.log(info[0].dob);

let someDate = new Date();
console.log(someDate)
console.log(someDate.getFullYear())
console.log(info[0].dob.getFullYear())
// console.log(someDate.getMonth())
// console.log(someDate.getDay())

    // let date = new Date(info.dob)
// console.log('Months Left: ',someDate.getMonth() -  info[0].dob.getMonth())
console.log(someDate.getDate() -  info[0].dob.getDate(),"2 Days Left until Mish's birthday",);
console.log('Mish is : ', info[0].dob.getDate() - someDate.getDate(), 'years old!')  
console.log("OR")
console.log('Mish is: ', someDate.getFullYear() - info[0].dob.getFullYear(), "years old!")  
// console.log(date)

    // countdown

    let otherDay = new Date(info[0].dob).getTime()

    let countdown = setInterval(function(){

        let theDate = someDate.getTime()
        let distance = theDate - otherDay

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")

        if (distance <= 0){
            clearInterval(countdown)
            console.log("This is expired!")
        }
    },1000)


    // switch statement

    let switchFunction = prompt("Enter a number from 1 - 100: ")

    switch(true){
        case switchFunction >= 90 && switchFunction <= 100:
            // if (switchFunction >= 90 || switchFunction <= 100){
            //     console.log("Well Done!")
            console.log("Well Done!")
            // }
            break
            case switchFunction >= 80 && switchFunction <= 89:
                console.log("Way To Go!")
                break
                case switchFunction >= 75 && switchFunction <= 79:
                        console.log("Keep It Up!")
                    break
                    case (switchFunction >= 60 && switchFunction <= 74):
                        console.log("You Did Good")
                        break
                        case switchFunction >= 50 && switchFunction <= 59:
                            console.log("That Was Good!")
                            break
                            case switchFunction < 50:
                                console.log("You Failed!")
                                
                                break
                                default:
                                    "Nothing was entered"}