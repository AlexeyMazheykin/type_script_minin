//Basic TYPES

//BOOL
const isFetching: boolean = true
const isLoading :boolean = false


//int
const int: number = 42
const float: number = 4.2

//string
const str: string = "Hello TYPE"

//Array

const numberArray: number[] = [1,2,3,3]
const numberArray2: Array<number> = [1,2,3,3] //Generic types declarations

const words: string[] = ["1","2", "Typescript"]
const words2: Array<string> = ["1","2", "Typescript"]

//TUPLE
const concat: [string, number] = ['Vladilen', 1234565]

//REDEFINITION TYPES USE TYPE: ANY

//ANY

let variable: any = 42;
variable = "Hello World"
variable = []; //........

//Functions VOID

function sayMyName (name:string): void {
    console.log(name)
}
sayMyName("Alexey")

//NEVER

function throwError (message: string): never {
        throw new Error(message)
}
type Login = string
function infinite (): never {
    while (true) {

    }
}
//Custom Types
const login: Login = 'admin'
//Custom Types2

type ID = string | number
const id1: ID = 1234
const id2: ID = "1234"
let id3: string | number = 123







