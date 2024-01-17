//higher order functions//
function oddeventest(request){
    if (request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("wrong  choice")
    }
}