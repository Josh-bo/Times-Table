function check(){
    var first = firstInput.value;
    var second = secondInput.value;
    output.innerHTML = ''
    clearing.innerHTML = ''

    if(firstInput.value == "" || secondInput.value == ""){
        error.innerHTML = `Please fill in those inputs to check the table`

        setTimeout(()=>{
            error.innerHTML = ""
        }, 2500)
    }else{ 
        if(first == ''){
        for( var i = 1; i <= second; i++){
        output.innerHTML +=`<table>
            <p> 0 * ${i} = ${0 * i}</p></table>`
    }
    }else{
        error.innerHTML = ''
        for( var i = 1; i <= second; i++){
            output.innerHTML +=`<table>
                <p> ${first} * ${i} = ${first * i}</p></table>`

                firstInput.value = ""
                secondInput.value = ""
            } 
        } 
        
}}
   

function clearall(){
    if(output.innerHTML == ''){
        clearing.innerHTML = `<h3> There is nothing to clear here </h3> `
    }else{
    var getConfirm = confirm("Are you sure you want to delete all this table?")
    if(getConfirm == true){
        output.innerHTML = "" 
        error.innerHTML = ''  
        clearing.innerHTML = `<h3> You have successfully clear all this table </h3>`   
    }}

    setTimeout(() =>{
        clearing.innerHTML = ''
    },3000)

}

function loadit(){
    clearing.innerHTML = `<h3> The table is empty </h3>`
}