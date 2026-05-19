DOCUMENTAȚIE TEHNICĂ: METAL ATLAS
1. Informații Generale
Categorie: Web 
Județul: Cluj

Surse (Cod Sursă): GitHub - https://github.com/Embyeer/Metal-Atlas/tree/main

Homepage (Live Production): https://metal-atlas-1014700351505.europe-west2.run.app

2. Descriere Generală și Concept Interdisciplinar
Metal Atlas este o platformă digitală academică de tip Single Page Application (SPA) cu arhitectură Full-Stack, concepută ca un atlas topologic, muzicologic și statistic dedicat istoriei, genealogiei și structurii formale a muzicii Heavy Metal și subgenurilor derivate.
Spre deosebire de enciclopediile online clasice (statice și liniare), proiectul propune o fuziune directă între știința calculatoarelor, fizica computațională și teoria muzicală aplicată, fiind structurat pe trei piloni software interactivi:
Topologie Dinamică (Grafuri): Vizualizarea arborelui evolutiv al genurilor muzicale sub formă de graf orientat, controlat în timp real prin simulări matematice de forțe fizice (D3.js Force Simulation).
Pedagogie și Analiză Transpozițională (Harmonic DNA): Materializarea structurilor scalare abstracte (moduri grecești, scale pentatone, acorduri) direct pe reprezentări grafice vectoriale ale gâtului de chitară (SVG dinamic interactiv).
Big Data și Profilare Statistică (Spotify Analyzer): Un motor hibrid care permite utilizatorului să își conecteze contul de Spotify prin fluxuri securizate de autentificare OAuth 2.0, analizându-i istoricul de ascultare și generând metrici avansate de compatibilitate culturală cu subgenurile metal.
Prin combinarea acestor module – vizualizare de rețele, teorie muzicală interactivă și data mining asincron – Metal Atlas oferă o experiență imersivă unică, transformând abstractizarea matematică și istoria muzicii într-un produs software modern, scalabil și de impact.

3. Tehnologii și Arhitectură Tehnică
Stack Tehnologic (Production-Ready)
Backend: Node.js v18+ cu Express Server scris nativ în TypeScript
Frontend UI: React 19 (Arhitectură bazată pe componente reactive, Hooks și management declarativ al stărilor)
Design & Stil: Tailwind CSS v4 (Motor atomic nativ de generație nouă, configurat direct prin directive CSS @theme)
Animații: Frame-motion unificat (motion/react) pentru tranziții fluide de interfață
Motor Grafic & Matematic: D3.js (Data-Driven Documents v7) pentru randarea și fizica grafului
Vizualizare Date (Charts): Recharts (librărie bazată pe SVG pentru statistici)
Autentificare & Securitate: Flux OAuth 2.0 cu Spotify Web API, securizat prin server-proxy și HTTP-Only Cookies
Build Tools & Bundlers: Vite v6 (Front-end HMR Compiler) + esbuild (Backend TypeScript Bundler)
Deployment & DevOps: Google Cloud Run (Infrastructură Serverless complet containerizată prin Docker)

4. Structura Aplicației și Împărțirea pe Module
A. Modelul de Date și Structuri de TypeScript (src/data/)
genres.ts (Genre Entity): Definește structura de nod a grafului. Conține metadate despre gen, istorie, liste de trupe reprezentative, melodii de referință (cu album covers) și o listă de adiacență numită influences (care mapează arcele/legăturile din graf).
bands.ts (Band Entity): Modelul de date pentru formații (membri, an de înființare, origine geografică extinsă și discografie esențială).
scalesData.ts (ScalePattern / FretboardPosition Entities): Matrice bidimensională de coordonate matematice care mapează perechile { string: number, fret: number } corespunzătoare notelor muzicale pe gâtul de chitară.
albumCovers.ts: Repository centralizat de mapare a URL-urilor pentru copertele de album.

B. Componentele Interfeței (Frontend Components)
App.tsx: Orchestratorul principal al stărilor globale (gestionarea tab-ului activ, a genului selectat și a ferestrelor modale).
MetalGraph.tsx: Componenta responsabilă de managementul canvas-ului/SVG-ului D3, a calculelor de rezoluție fizică și a intercepției evenimentelor de mouse.
GenreDetails.tsx: Panou lateral fluid care se încarcă asincron la selecția unui nod, afișând materialul istoric, proxy-ul de imagini și modulul muzical.
FretboardDiagram.tsx: Componentă ce randează adaptiv și dinamic elementele SVG reprezentând griful chitarei, calculând automat distanțele dintre taste (fret spacing) și linii.
BandsList.tsx: Modul complet de interogare rapidă, filtrare pe genuri și căutare asincronă cu debouncing.
BandModal.tsx: Fereastră modală animată cu suport pentru navigare secvențială (stânga/dreapta prin taste sau glisare) și randare de discografii.
SpotifyAnalyzer.tsx: Panoul statistic care gestionează ferestrele de tip Pop-up, ascultă evenimentele cross-origin și generează graficele circulare (Pie Charts).
AboutUs.tsx: Secțiunea dedicată autorilor, integrând elemente de design „Cinematic Dark”.

C. Serverul Backend (server.ts)
Auth Endpoints: /api/auth/spotify/url și /api/auth/callback (gestionează generarea de stări securizate, comunicarea server-to-server cu Spotify Account Service și obținerea token-urilor).
Proxy Endpoints: /api/spotify/me, /api/spotify/top-artists, /api/spotify/top-tracks (intermediază cererile securizate, injectând automat token-ul de acces).
Session Management: /api/auth/status și /api/auth/logout.
Hybrid Middleware Engine: Configurația de rulare locală care injectează serverul de development Vite direct în Express.

5. Funcționalități Principale

I. Vizualizarea Topologică și Fizica Grafului
Simulare de Forțe Multidimensionale: Nodurile se resping nativ folosind o forță electrovibratorie (d3.forceManyBody()) și sunt atrase spre centrul geometric (d3.forceCenter()), creând o așezare optimă automată, fără suprapuneri.
Calcul Dynamic de Importanță (Degree Centrality): Aplicația calculează automat gradul de ieșire al fiecărui nod (outDegree – numărul de genuri pe care le influențează). Dimensiunea cercului și ponderea în graf sunt scalate matematic în funcție de acest indicator.
Sistem de Tooltip și Pan-and-Zoom: Suport complet pentru gesturi, mișcare liberă (drag & drop) și mărire/micșorare, oferind o experiență fluidă.

II. Modulul Pedagogic de Teorie Muzicală (Harmonic DNA)
Randare SVG Adaptivă: Gâtul de chitară este desenat programatic. Distanțele dintre taste și strune sunt calculate matematic pentru a simula scala reală a instrumentului.
Vizualizare Transpozițională de Poziții (Shapes): Utilizatorul poate naviga secvențial prin formele geometrice ale scalelor (ex: Dorian, Aeolian, Minor Pentatonic). Notele se re-randează instant pe ecran.
Identificarea Rădăcinii (The Root Note): Notele fundamentale ale scalei muzicale sunt evidențiate vizual în portocaliu industrial (#f97316) și animate printr-o pulsație luminoasă shadow-glow CSS (.glow-orange).

III. Motorul de Căutare și Filtrare Avansată
Filtru Dinamic Dual: Utilizatorii pot efectua căutări text în timp real ce scanează simultan numele trupei și genul muzical, aplicând opțional filtre stricte pe subgenuri prin meniuri drop-down.
Modale Animate: Deschiderea unei trupe generează un modal administrat prin animații hardware accelerated (motion/react), cu suport pentru maparea asincronă a copertelor de album.

IV. Big Data: Spotify Personal Profile Analyzer
Flux OAuth 2.0 Securizat: Interfața deschide o fereastră pop-up securizată oficială Spotify. După logare, pop-up-ul transmite un semnal asincron către aplicația principală prin sistemul nativ window.postMessage.
Algoritm de Agregare și Profilare: Backend-ul colectează datele de ascultare (top artiști și piese) și le clasifică, generând un index statistic de diversitate și un grafic de distribuție culturală administrat prin Recharts.

6. Caracteristici Tehnice Avansate și Securitate

Securitate și Protecție la Nivel de Enterprise
Atenuarea Atacurilor XSS prin HTTP-Only Cookies: Token-urile sensibile Spotify API nu sunt expuse niciodată în localStorage sau în codul de front-end. Serverul Express le stochează în browser-ul utilizatorului folosind cookies configurate cu flag-urile httpOnly: true, secure: true și sameSite: 'none'.
Izolarea Datelor prin Server Proxy: Toate cererile către API-ul extern Spotify sunt efectuate exclusiv server-to-server. Front-end-ul nu cunoaște secretele aplicației (SPOTIFY_CLIENT_SECRET), eliminând riscul de furt de identitate software.
Validare CORS și Origin Guard: Serverul backend validează originea cererilor primite, acceptând conexiuni exclusiv de pe domeniul oficial sau din mediul local controlat.
Gestiune Performantă a Resurselor și Fișierelor
Image Proxy Optimization: Pentru a preveni erorile de încărcare, latența crescută și blocajele de rețea cauzate de copertele de album externe, aplicația procesează și optimizează dinamic toate URL-urile de imagini prin proxy-ul global images.weserv.nl, forțând re-dimensionarea automată la 200x200px și stocarea eficientă în cache.
Dual-Bundling Custom Pipeline: Procesul de producție (npm run build) este divizat inteligent în două ramuri:
Vite compilează și minifică codul React și Tailwind v4 în resurse statice compacte în dist/.
Un compilator ultra-rapid (esbuild) preia serverul TypeScript (server.ts) și generează un singur bundle optimizat CommonJS în dist/server.cjs.
Deployment și Arhitectură Cloud (Google Cloud Run)
Containerizare Docker: Întregul ecosistem (aplicația React compilată și serverul Express Node.js) este împachetat într-un container izolat, garantând rularea identică în cloud ca în mediul de dezvoltare.
Infrastructură Serverless Scalabilă: Aplicația rulează în regiunea europe-west2 (Google Cloud). Resursele (CPU/Memorie) scalează automat la zero când nu există trafic, economisind resurse, și pornesc instanțe noi în microsecunde la detectarea concurenței ridicate.
SSL/TLS Nativ Obligatoriu: Conexiunea rulează exclusiv pe HTTPS criptat, o cerință tehnică strictă pentru validarea fluxului de securitate Spotify.

7. Manual de Utilizare și Cerințe de Sistem

A. Accesarea Online în Producție (Ghid pentru Juriu)
Aplicația este live și gata pentru evaluare instantă direct la adresa publică:

🌐 https://metal-atlas-1014700351505.europe-west2.run.app

Explorarea Grafului: Accesați tab-ul Map. Folosiți mouse-ul sau gesturile tactile pentru zoom și deplasare. Plasați cursorul deasupra unui subgen pentru a citi descrierea succintă.
Studiul Teoriei (Harmonic DNA): Click pe un nod din graf (ex: Thrash Metal). În panoul lateral fluid, parcurgeți istoricul și folosiți butoanele de navigare din dreptul scalelor pentru a vedea cum se transpun vizual notele muzicale pe chitară.
Căutarea Formațiilor: Schimbați pe tab-ul Bands din meniul superior. Tastați numele unei trupe sau filtrați după un gen anume. Click pe cardul trupei deschide modalul animat cu discografia sa.
Analiza Spotify: Accesați tab-ul Spotify Analyzer și apăsați butonul de conectare. Logați-vă în siguranță în fereastra oficială deschisă pentru a obține graficul dvs. statistic personalizat.

B. Ghid de Rulare și Compilare Locală (Pentru Dezvoltatori)
Cerințe Premisă: Instalarea prealabilă a mediului de execuție Node.js (versiunea v18 sau mai mare).

Procedura de pornire în mediu de dezvoltare (Hybrid Mode):

npm install
npm run dev

Aplicația va fi accesibilă local la adresa http://localhost:3000, beneficiind de tehnologia Hot Module Replacement (HMR).

Procedura de Compilare de Producție (Simulare Cloud locală):

npm run build
npm start

Cerințe de Sistem pentru Utilizator
Orice browser web modern cu suport pentru animații hardware, standarde SVG și WebSockets (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
O conexiune stabilă la Internet (pentru descărcarea librăriilor CDN de fonturi și comunicarea cu serverele Spotify Cloud).

8. Realizatori
Nume: Druș Luca Ioan
Rol: Co-Author and Lead Developer
Școala: Colegiul Național ,,Andrei Mureșanu" Dej
Clasa: 10
Județ: Cluj
Oraș: Dej

Nume Prenume: Bătinaș Luca Ștefan
Rol: Co-Author and Cybersecurity Expert
Școala: Colegiul Național ,,Andrei Mureșanu" Dej
Clasa: 10
Județ: Cluj
Oraș: Dej