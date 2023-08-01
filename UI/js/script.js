const btn = document.querySelector('.submit')
const container = document.querySelector('.container')
const resultDiv = document.querySelector('.wrapper')
const stext = document.querySelector('.stext')
const resText = document.querySelector('.area')
const btn1 =document.querySelector('.btn')
let data =[]

btn.addEventListener('click',async (e)=>{
container.style.display ="none"
resultDiv.style.display='flex'
resText.innerHTML ="Please wait..Our model is working on it...."

console.log(stext.value)
let data = {element:stext.value};
console.log(data)
//request to express server
//if
fetch("http://localhost:5050/summarize", {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify(data)
  }).then(res => {
    console.log("Request complete! response:", res);
  });
  await fetch(`http://127.0.0.1:8000/summarize?text=?${stext.value}`, {
    method: 'POST',
    headers: {
        "Content-type": "application/json"
    }
}).then(res=>res.json())
.then(data=>{
    console.log(data)

    const values = Object.values(data);
   
    console.log(values)
    const res =JSON.stringify(data)
    console.log(res)
    console.log(data)
    console.log(Object.keys(data));
    resText.innerHTML=`<p class ="lead">
                          
                         <b> Original Text </b> : ${values[0]}
                          <br>
                          <br>
                          <br>
                         <strong> Summary text</strong>  : ${values[1]}
                          <br>
                         <b> Length Before Summariztion</b> : ${values[2]}
                          <br>
                          <b> Length After Summarization </b> : ${values[3]}
                           <br>
                          <b> Percentage Reduction</b> : ${values[4]}
                           <br>
                         <b> time taken </b> : ${values[5]}
                          </p>`
                         
})

})


//['Original Text', 'Summary Text', 'Length Before Summariztion', 'Length After Summarization', 'Percentage Reduction', 'Time Taken']








