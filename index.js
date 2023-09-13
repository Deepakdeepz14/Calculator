let os = document.getElementById("outputscreen")
        
function display(text){
    os.value += text;
}

function calculate(){
    try {
      os.value = eval(os.value);  
    } 
    catch (err) {
        alert('invalid')
    }
  }

  function clr() {
    os.value = ""
  }

  function del(){
    os.value = os.value.slice(0,-1);   
  }