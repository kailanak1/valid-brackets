
let brackets = {
    "(" : ")", 
    "{" : "}", 
    "[" : "]"
  }
  function balancedBrackets(string){
    const stack = []
    let current; 
  
    for(let i = 0; i < string.length ; i++){
      let current = string[i] 
      if(brackets[current]){
        stack.push(brackets[current])
       
      } else {
        if (current !== stack.pop()){
          return false
        }
      }
    }
   return stack.length === 0
  }