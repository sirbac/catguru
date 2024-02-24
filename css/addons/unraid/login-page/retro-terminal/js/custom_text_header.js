
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
   ______      __     ______                
  / ____/___ _/ /_   / ____/_  _________  __
 / /   / __ `/ __/  / / __/ / / / ___/ / / /
/ /___/ /_/ / /_   / /_/ / /_/ / /  / /_/ / 
\\\____/\\\__,_/\\\__/   \\\____/\\\__,_/_/   \\\__,_/  
                                            
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
