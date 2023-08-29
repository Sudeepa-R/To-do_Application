const inputText=document.getElementById("in");
const listitem=document.getElementById("listbox");
function savepage(){
    if(inputText.value===""){
        alert("enter someting");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputText.value;
        listitem.appendChild(li);
       
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        savedata();
    }
    inputText.value="";
}
listitem.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();s
    }
},false);
function savedata(){
    localStorage.setItem("data",listitem.innerHTML);

}
function showlist(){
    listitem.innerHTML=localStorage.getItem("data");
}
showlist();