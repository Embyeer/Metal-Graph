# 🎸 Metal Atlas

Metal Atlas este o platformă web Full-Stack conceptualizată ca un atlas topologic, muzicologic și statistic dedicat evoluției și interconexiunilor dintre subgenurile muzicii Heavy Metal. Proiectul propune o alternativă non-liniară la enciclopedie clasică, transformând datele istorice și teoretice în vizualizări interactive matematice și pachete de analiză de tip Big Data.

---

## ⚡ Caracteristici Principale (Core Modules)

1. **Topologie Dinamică (Harta Genurilor):** * Implementare de grafuri orientate folosind **D3.js**.
   * Algoritm de simulare a forțelor fizice multidimensionale în timp real (`d3.forceManyBody`, `d3.forceCenter`) pentru așezarea organică a nodurilor.
   * Calcularea dinamică a indicatorului de *Degree Centrality* pentru scalarea vizuală a genurilor în funcție de impactul istoric.

2. **Pedagogie Muzicală Interactivă (Harmonic DNA):**
   * Transpunerea structurilor scalare muzicale (moduri precum Dorian, Aeolian etc.) direct pe un grif de chitară vectorial construit dinamic în **SVG**.
   * Randare reactivă a coordonatelor și tastelor pe baza stărilor controlate în React 19.

3. **Integrare Spotify Analyzer (Data Profiling):**
   * Autentificare securizată prin protocolul **OAuth 2.0**.
   * Algoritm de analiză asincronă a istoricului de ascultare al utilizatorului, corelat cu metadatele stocate.
   * Generare de metrici avansate de profilare și grafice statistice interactive rânduite prin **Recharts**.

---

## 🛠️ Stack Tehnologic (Architecture)

### Front-End:
* **React 19** – Framework declarativ pentru managementul stărilor și componentelor UI.
* **Vite v6** – Pipeline ultra-rapid pentru bundling și rulare locală.
* **Tailwind CSS v4** – Arhitectură modernă de styling folosind noua directivă nativă `@theme` pentru paleta „Cinematic Dark”.
* **Motion / React** – Control fluid al animațiilor și tranzițiilor de micro-interacțiune.

### Back-End & Securitate:
* **Node.js & Express** – Mediu de execuție și framework de server complet configurat în **TypeScript**.
* **Server Proxy Architecture** – Izolarea completă a cererilor către API-ul extern Spotify, prevenind expunerea cheilor private (`CLIENT_SECRET`).
* **Advanced XSS Mitigation** – Injectarea token-urilor de sesiune exclusiv prin **HTTP-Only, Secure și SameSite Cookies**, securizând datele la nivel Enterprise.
* **Image Proxy Middleware** – Optimizarea dinamică a resurselor vizuale externe prin caching asigurat de `images.weserv.nl`.

### Deployment & DevOps:
* **Docker** – Containerizarea completă a întregului ecosistem hibrid (Front + Back).
* **Google Cloud Run** – Infrastructură serverless, scalabilă automat, rulând nativ pe conexiuni securizate SSL (HTTPS).

---

## 📂 Structura Proiectului (Repository Tree)

```text
├── src/
│   ├── components/       # Componente UI atomice (MetalGraph, FretboardDiagram, SpotifyAnalyzer)
│   ├── data/             # Structuri de date TypeScript tipizate (genres.ts, bands.ts, scalesData.ts)
│   ├── App.tsx           # Punctul central de management al stărilor globale
│   ├── main.tsx          # Initializarea React 19
│   └── index.css         # Configurarea temei Tailwind v4 și a culorilor custom active
├── server.ts             # Serverul Express (Mecanisme de Proxy, Cookies și OAuth 2.0)
├── vite.config.ts        # Configurarea compilatorului Vite
├── tsconfig.json         # Regulile stricte de compilare pentru Type-Safety
└── Dockerfile            # Configurația de containerizare pentru Google Cloud Run
```

## Realizatori

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
