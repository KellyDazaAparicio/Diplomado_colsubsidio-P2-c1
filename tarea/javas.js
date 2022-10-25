function primerar(param1){

    
    for(let i=0;i<param1;i++){
       
       let resultado = '' 
       
       for(let k=0;k<param1;k++){
          
           resultado = resultado.concat('X')
       }
       
       console.log(resultado)
   }

   if ( typeof param1 === "undefined" || typeof param1 === "string"){
       console.log ("missing size") 
   }   
}    
   
    