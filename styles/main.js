
const footer = document.getElementById("footer");

footer.innerHTML = 
      ` 
       <div id="svgfoot">
       <a href="index.html">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="50" height="60">
  <!-- Background Circle -->
  <circle cx="300" cy="300" r="300" fill="transparent"/> <!-- Blue Background -->

  <!-- Planet Ring -->
  <ellipse cx="300" cy="350" rx="270" ry="30" fill="none" stroke="yellow" stroke-width="20" transform="rotate(-15, 250, 320)"/> 

  <!-- Central Letter -->
  <text x="300" y="450" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="450" fill="#007bff">
    M
  </text>

  <!-- Foreground Text -->
  <text x="300" y="530" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="70" fill="yellow" font-weight="bold">
    MINTopia
  </text>
  
</svg>
</a>
</div>
      
      <div id="contact">
      <div>CONTACT US</div>
      <div>
        <a href=""><span>WhatsApp</span><i class="fa-brands fa-whatsapp"></i></a>
        <a href="mailto:inf444@hs-worms.de"><span>Email</span><i class="fa-regular fa-envelope"></i></a>
        <a href="tel:017687790133"><span>Phone</span><i class="fa-solid fa-phone"></i></a>
      </div>
      
      </div>
      <div id="folgen">
           <div>FOLGE UNS</div>
          <div>
          
            <a href="https://www.facebook.com/mintzukunftschaffen/?locale=de_DE" target="_blank" >
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/mint_zirkel/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.worms.de/neu-de/bildung-bieten/bildungsbuero/MINT-Angebote/" target="_blank">
              <i class="fa-brands fa-google"></i>
            </a>
            <a href="https://www.youtube.com/watch?v=ZlvSJ6l1Q8g" target ="_blank">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div>&copy; 2024 MINTopia. Alle Rechte vorbehalten.</div>
  
          `;
   