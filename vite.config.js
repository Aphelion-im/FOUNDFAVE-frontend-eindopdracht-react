// https://www.npmjs.com/package/vite-plugin-svgr
// https://pagespeed.web.dev # Google Lighthouse
// https://web.dev/preload-critical-assets/
// https://www.npmjs.com/package/vite-plugin-preload
// Voeg een kleine plugin toe die automatisch een preload-tag injecteert voor elk gegenereerd CSS-bestand, ongeacht de gehashe bestandsnaam:
// Dit lost het Netwerkafhankelijkheidsstructuur op die wordt aangegeven in Google Lighthouse. Dit komt door
//  The critical request chain, waar de browser eerst de HTML moet parsen, vervolgens de CSS-bestanden moet ontdekken
//  en pas daarna kan beginnen met het downloaden van die CSS-bestanden. Door een preload-tag toe te voegen, kunnen we de browser 
// instrueren om deze CSS-bestanden al te downloaden terwijl het nog steeds bezig is met het parsen van de HTML, 
// waardoor de laadtijd van de pagina wordt verbeterd.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
});