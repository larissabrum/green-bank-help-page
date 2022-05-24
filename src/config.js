let toggles = document.getElementsByClassName('btn');
let contentDiv = document.getElementsByClassName('content');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
       if( parseInt(contentDiv[i].style.height)
        != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv
            [i].scrollHeight + "px";
           toggles[i].style.color = "#87974D"; 
        }
        else{
          contentDiv[i].style.height = "0px";
          toggles[i].style.color = "#111130";
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130"; 
            }
        }
    });
}
