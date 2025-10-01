//write a function to alert if overweight (15kg) baggage

//call it from the page

            //alert("Hello");//write a check function here...
            //update: the check function should reveal the "removed" text input
            //if the baggage is overweight
            //and a button to remove some
            //the remove function should update the weight
            //and let the user know when ok to proceed
            let check=()=>{
              alert('Checking Baggage weight: '+parseInt(document.getElementById('weight').value));
              //These should only display if it is actually overweight
              document.getElementById('removed').style='display:block;'
              document.getElementById('remB').style='display:block;'
            }
            let remove=()=>alert('Removing weight: '+parseInt(document.getElementById('removed').value))

            