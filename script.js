 let tarjeta1=document.querySelector(".tarjeta1") 

 let tarjeta2=document.querySelector(".tarjeta2") 

 let tarjeta3=document.querySelector(".tarjeta3") 

 let juego1=document.querySelector(".tarjetas-juego1") 

 let juego2=document.querySelector(".tarjetas-juego2") 

 let juego3=document.querySelector(".tarjetas-juego3") 

  
 tarjeta1.addEventListener("dragstart",(event)=>{ 
     let Info= event.target.src; 
     event.dataTransfer.setData("text",Info) 
     console.log(Info) 
 }) 

 juego1.addEventListener("dragover", (event) => { 
    event.preventDefault(); 
  }); 
     
  juego1.addEventListener("dragenter", (event) => { 
      event.preventDefault(); 
  }); 
 
  tarjeta1.addEventListener("dragend", () => { 
     tarjeta1.style.display="none" 
  }); 

 tarjeta2.addEventListener("dragstart",(event)=>{ 
     let Info= event.target.src; 
     event.dataTransfer.setData("text",Info) 
     console.log(Info) 
 }) 

 juego2.addEventListener("dragover", (event) => { 
    event.preventDefault(); 
}); 
   
juego2.addEventListener("dragenter", (event) => { 
    event.preventDefault(); 
}); 


tarjeta2.addEventListener("dragend", () => { 
   tarjeta2.style.display="none" 
}); 
 
 tarjeta3.addEventListener("dragstart",(event)=>{ 
     let Info= event.target.src; 
     event.dataTransfer.setData("text",Info) 
     console.log(Info) 
 }) 


 juego3.addEventListener("dragover", (event) => { 
   event.preventDefault(); 
 }); 


 tarjeta3.addEventListener("dragend", () => { 
    tarjeta3.style.display="none" 
 });   


 juego3.addEventListener("dragenter", (event) => { 
     event.preventDefault(); 
 }); 
          
  
  
 juego1.addEventListener("drop",(event)=>{ 
     let InfoObtenida= event.dataTransfer.getData("text"); 
     juego1.innerHTML = `<img src="${InfoObtenida}"/>`; 
      
 }) 


 juego2.addEventListener("drop",(event)=>{ 
     let InfoObtenida= event.dataTransfer.getData("text"); 
     juego2.innerHTML = `<img src="${InfoObtenida}"/>`; 
      
 }) 

 
 juego3.addEventListener("drop",(event)=>{ 
     let InfoObtenida= event.dataTransfer.getData("text"); 
     juego3.innerHTML = `<img src="${InfoObtenida}"/>`; 
      
 })

