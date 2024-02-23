
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
 ________      ________      _________       ________      ___  ___      ________      ___  ___     
|\   ____\    |\   __  \    |\___   ___\    |\   ____\    |\  \|\  \    |\   __  \    |\  \|\  \    
\ \  \___|    \ \  \|\  \   \|___ \  \_|    \ \  \___|    \ \  \\\  \   \ \  \|\  \   \ \  \\\  \   
 \ \  \        \ \   __  \       \ \  \      \ \  \  ___   \ \  \\\  \   \ \   _  _\   \ \  \\\  \  
  \ \  \____    \ \  \ \  \       \ \  \      \ \  \|\  \   \ \  \\\  \   \ \  \\  \|   \ \  \\\  \ 
   \ \_______\   \ \__\ \__\       \ \__\      \ \_______\   \ \_______\   \ \__\\ _\    \ \_______\
    \|_______|    \|__|\|__|        \|__|       \|_______|    \|_______|    \|__|\|__|    \|_______|
                                                                                                 
</pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
