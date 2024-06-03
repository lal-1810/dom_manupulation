const form=document.querySelector("#shelter")
const input=document.querySelector("#name")
const list=document.querySelector("#cats")
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const catname=input.value;
  const li= document.createElement('LI')
  li.innerText=catname;
  console.log("li");
  list.append(li);
  input.value="";
});