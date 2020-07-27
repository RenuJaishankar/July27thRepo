function onClick(){
    updateLabel()
}

function updateLabel(){
var a=getFirstnumber()
var b = getSecondnumber()
var sum = parseInt(a) + parseInt(b)
label.textContent = a +`+` +  b +`=` + sum;

}

function getFirstnumber(){
    return inputs[0].value
}

function getSecondnumber(){
    return inputs[1].value
}


console.log("hello students!")
var inputs = document.querySelectorAll('input')
var label = document.querySelector('p')
var button = document.querySelector('button')
button.addEventListener('click', onClick)
