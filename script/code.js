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

    // function fullName(){
    //     return console.log("Eighton-Lee Antonio Paulse")
    // }
    
    // fullName()

    // // Q2
    // let firstName = "Eighton-Lee";
    // let lastName = "Paulse";
    // let age = 18;
    // let listOfSubjects = ['Mathematical Literacy', 'English Home Language', 'Afrikaans First Additional Language', 'Life Orientation', 'Computer Applications Technology', 'Business Studies', 'Life Sciences'];
    // let address = {
    //     streetName:'Robin',
    //     streetNumber:'10',
    //     suburb:'Eersteriver',
    //     city:'cape Town',
    //     country:'south africa'
    // }

    // console.log(`My name is  ${firstName} My surname is  ${lastName} I am  ${age} years old , and in school I had ${listOfSubjects} And I live at ${[address]}`)

    // // Q3

    // const firstValue = document.querySelector('#value1')
    // const operator = document.querySelector('#value2')
    // const secondValue = document.querySelector('#value3')
    // const calcButton = document.querySelector('#calculate')
    // const finalHeading = document.querySelector('#value')

    // calcButton.addEventListener('click',()=>{

    //     let method = eval(firstValue.value + operator.value + secondValue.value)
    //     if(firstValue.value,secondValue.value,operator.value,finalHeading == ''){
    //         firstValue.value,secondValue.value,operator.value,finalHeading === ''
    //     }else{
    //         finalHeading.innerHTML = Number(method)
    //         console.log(method)
    //         console.log([method])
    //     }
    // })

    // Q4

    let subject = "programming";

    function revLetters(subject){
        return subject.split('').reverse().join('')
    }

    console.log(revLetters(subject))