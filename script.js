
function A(){
    
}

function B(){
    let n = 5; 
    let string = "";
    
    for(let i = 0; i < n; i++) { 
      for(let j = 0; j < n; j++) { 
        if(i === 0 || i === n - 1 || i === 2) {
          string += "*";
        }
        else {
          if(j === 0 || j === n - 1) {
            string += "*";
          }
          else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
    console.log(string);
    
}
 
function C(){
        let n = 5; 
        let string = "";
        
        for(let i = 0; i < n; i++) { 
          for(let j = 0; j < n; j++) { 
            if(i === 0 || i === n - 1) {
              string += "*";
            }
            else {
              if(j === 0 ) {
                string += "*";
              }
              else {
                string += " ";
              }
            }
          }
          string += "\n";
        }
        console.log(string);
        
    }

function D(){
    let n = 5; 
    let string = "";
    
    for(let i = 0; i < n; i++) { 
      for(let j = 0; j < n; j++) { 
        if(i === 0 || i === n - 1) {
          string += "*";
        }
        else {
          if(j === 0 || j === n - 1) {
            string += "*";
          }
          else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
    console.log(string);
    

}

function E(){    
    let n = 5; 
    let string = "";
    
    for(let i = 0; i < n; i++) { 
      for(let j = 0; j < n; j++) { 
        if(i === 0 || i === n - 1 || i === 2) {
          string += "*";
        }
        else {
          if(j === 0 ) {
            string += "*";
          }
          else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
console.log(string);
}

function F(){
    let n = 5; 
    let string = "";
    
    for(let i = 0; i < n; i++) { 
      for(let j = 0; j < n; j++) { 
        if(i === 0  || i === 2) {
          string += "*";
        }
        else {
          if(j === 0) {
            string += "*";
          }
          else {
            string += " ";
          }
        }
      }
      string += "\n";
    }
    console.log(string);
}