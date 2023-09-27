alert("WELCOME TO MY CALCULATOR");

var usersFirstValue = + prompt("enter first value");

if (usersFirstValue.toString().charCodeAt(0)>= 48 && usersFirstValue.toString().charCodeAt(0)<= 57){

    var operator = prompt("")

    if(operator.charCodeAt(0) == 37 || operator.charCodeAt(0) == 42 || operator.charCodeAt(0) == 43 || operator.charCodeAt(0) == 45 || operator.charCodeAt(0) == 47)
    {
        var usersSecondValue = + prompt("enter second value")

        if (usersSecondValue.toString().charCodeAt(0)>= 48 && usersSecondValue.toString().charCodeAt(0)<= 57){

            switch (operator){
                    case "+":
                          result = usersFirstValue + usersSecondValue;
                          document.write(result);
                    break;

                    case "-":
                         result = usersFirstValue - usersSecondValue;
                         document.write(result);
                    break;

                    case "*":
                         result = usersFirstValue * usersSecondValue;
                         document.write(result);
                    break;

                    case "/":
                         result = usersFirstValue / usersSecondValue;
                         document.write(result);
                    break;

                    case "%":
                         result = usersFirstValue % usersSecondValue;
                         document.write(result);
                    break;
            }
        }
        else{
            document.write("<h1><center> PLEASE ENTER A SECOND NUMBER !!</center></h1>")
        }
    }
    else 
    {
        document.write("<h1><center> PLEASE ENTER A OPERATOR !!</center></h1>")
    }
}

else {
    document.write("<h1><center> PLEASE ENTER A NUMBER !!</center></h1>")
}