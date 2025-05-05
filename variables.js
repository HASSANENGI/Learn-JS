

function let(){    // blocked scoped
    if(true)
    {
        let a=10;
        console.log(a)
    }
    // console.log(a) // error
}


let();


function Var(){   // function  scoped
    if(true)
    {
        var a=20;
        console.log(a)
    }
    //  console.log(a) // no error
}

Var();


