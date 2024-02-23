
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
   _____      _    _____                    
  / ____|    | |  / ____|                   
 | |     __ _| |_| |  __ _   _ _ __ _   _   
 | |    / _` | __| | |_ | | | | '__| | | |  
 | |___| (_| | |_| |__| | |_| | |  | |_| |  
  \_____\__,_|\__|\_____|\__,_|_|   \__,_|  
  ______ ______ ______ ______ ______ ______ 
 |______|______|______|______|______|______|
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
