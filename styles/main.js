
const footer = document.getElementById("footer");

footer.innerHTML = 
      ` 
       <div id="svgfoot">
       <a href="index.html">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="300" height="150">
  <!-- Background -->
  <circle cx="300" cy="300" r="300" fill="transparent"/>

  <!-- Central Title -->
  <text x="300" y="350" text-anchor="middle" font-family="Comic Sans MS, sans-serif" font-size="120" fill="#ffca28" stroke="#0288d1" stroke-width="3">
    MINTopia
  </text>

  <!-- Planet Ring -->
  <ellipse cx="300" cy="320" rx="250" ry="50" fill="none" stroke="#0288d1" stroke-width="8" transform="rotate(-15, 300, 320)"/>
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
   