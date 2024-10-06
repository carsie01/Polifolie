// HEADER-KLASSEN: Ansvarlig for at skabe header-sektionen og navigationen
class Header {
    constructor(title) {
        this.title = title; // Sætter sidens titel
    }

    render() {
        const header = document.createElement('header'); // Create a <header> element
        
        // Create the <h1> element
        const h1 = document.createElement('h1');
        
        // Create the <a> element that wraps the title text
        const titleLink = document.createElement('a');
        titleLink.href = "#forside";  // Set the href to link to the homepage
        titleLink.innerText = this.title;  // Set the text of the link to the title (e.g., "Caroline Carmen")

        h1.appendChild(titleLink);  // Append the <a> inside the <h1>

        // Create the navigation element
        const nav = document.createElement('nav');

        // Create navigation links
        const forsideLink = document.createElement('a');
        forsideLink.href = "#forside";
        forsideLink.innerText = "Forside";

        const ommigLink = document.createElement('a');
        ommigLink.href = "#ommig";
        ommigLink.innerText = "Om mig";

        const projekterLink = document.createElement('a');
        projekterLink.href = "#projekter";
        projekterLink.innerText = "Projekter";

        const kontaktLink = document.createElement('a');
        kontaktLink.href = "#kontakt";
        kontaktLink.innerText = "Kontakt";

        // Tilføjer links til navigationen
        nav.appendChild(forsideLink);
        nav.appendChild(ommigLink);
        nav.appendChild(projekterLink);
        nav.appendChild(kontaktLink);

        // Tilføjer h1 og navigation til header
        header.appendChild(h1);
        header.appendChild(nav);

        // Detect current page and apply different styles
        const isHomePage = window.location.hash === '' || window.location.hash === '#forside';

        if (isHomePage) {
            // Style for home page: transparent and absolute positioning
            header.style.position = 'absolute';
            header.style.backgroundColor = 'transparent';
            header.style.width = '100%';
            header.style.top = '0';
            header.style.color = '#F9F7F7';
        } else {
            // Style for other pages: regular background color and positioning
            header.style.position = 'relative';
            header.style.backgroundColor = '#333'; // Replace with your preferred background color
            header.style.width = '100%';
        }

        // Adding classes for potential CSS control (optional)
        header.classList.add(isHomePage ? 'header-home' : 'header-regular');

        return header; // Returnerer header-elementet
    }
}

// SKABELSE AF FORSIDEN
class HomePage {
    render() {
        const section = document.createElement('section'); // Opretter en sektion
        section.id = "hjem"; // Sætter id for sektionen
        section.innerHTML = `
        <div class="hero">
        <div class="hero-content">
            <h2>Velkommen til mit portfolio</h2>
            <p>Multimediedesigner søger praktik</p>
        </div>
    </div>
    <div class="intro">
        <div class="intro-image">
            <img src="pbilleder/profilbillede1.png" alt="Intro Image" />
        </div>
        <div class="intro-content">
            <h3>Velkommen til mit portfolio!</h3>
            <p>Mit navn er Caroline C. Siegrist, og jeg er 23 år gammel. Jeg studerer multimediedesign med specialisering i webudvikling på IBA Kolding.
            Hvis du er på udkig efter en engageret praktikant inden for webudvikling fra januar og 12 uger frem, er du kommet til det rette sted!</p>
            <button id="learn-more-button">Læs mere om mig</button>
            </div>
        
    </div>
    <div class="kompetancer">
       <div class="kompetancer-content">
        <h3>Mine kompetancer</h3>
        <p>Mine projekter på Multimediedesign-uddannelsen har givet mig erfaring med at kombinere design og teknologi for at skabe digitale løsninger, der er både funktionelle og visuelt tiltalende. <br>Jeg har arbejdet med UX, content og visuel identitet, samt udviklet flere webapplikationer med HTML, CSS og JavaScript, hvilket har givet mig en dybdegående forståelse af både designprocesser og kodning.</p>
        </div>
    </div>
    <div class="spil">
        <div class="projekter-content">
          <h3>Mine projekter</h3>
          <p>Gennem mine projekter på Multimediedesign-uddannelsen har jeg udviklet praktiske færdigheder inden for webdesign, UX/UI og programmering.<br><br> Jeg har arbejdet med at skabe brugervenlige løsninger og visuelle identiteter, hvilket har givet mig erfaring med at omsætte ideer til funktionelle digitale produkter. <br>Jeg har desuden arbejdet med HTML, CSS og JavaScript, som har givet mig en stærk forståelse for både frontend-udvikling og design.</p>
          <button onclick="window.open('http://carolinecarmen.dk/ProfitBeast/', '_blank')">Se Projekt</button>
          </div>
          <div class="project-video">
          <video src="pbilleder/profibeast.mp4" muted loop autoplay></video>
          <a href="http://carolinecarmen.dk/ProfitBeast/" target="_blank">Gå til ProfitBeast</a>
      </div>
        </div>
         
`;
        return section; // Returnerer sektionen
    }
}
// JavaScript to handle navigation to the "About" page
document.addEventListener('DOMContentLoaded', () => {
    const learnMoreButton = document.getElementById('learn-more-button');

    // Change URL hash to #ommig when the button is clicked
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', () => {
            window.location.hash = '#ommig'; // Navigate to the "About" page
        });
    }

    // Rest of the video handling code...
});

// OM-MIG-SIDEN
class AboutPage {
    render() {
        const section = document.createElement('section');
        section.id = "ommig";
        section.innerHTML = `
            <div class="ommigintro">
                <div class="minvideoboks">
                    <div class="minvideo-container">
                        <div class="watch-video-text">Watch Video</div>
                        <video class="minvideo" src="pbilleder/minvideo.mp4" muted loop autoplay></video>
                    </div>
                </div>
                
                <div class="spil">
                    <div class="projekter-content">
                        <h2>Personlige Profil</h2>  
                        <h3>Hvem er jeg?</h3> 
                        <p>Mit navn er Caroline, jeg er 23 år og bor i Aarhus, men jeg er opvokset i en lille by udenfor Billund. Lego har altid været en stor del af mit liv, da begge mine forældre arbejdede der, og jeg har haft utallige ture til Legoland og besøgt fabrikken. Min barndom var præget af Lego, og det har formet både mine værdier og min kreativitet.
<br><br>
                        Jeg har altid elsket at skabe, om det var gennem tegning, bagning eller webudvikling. Webudvikling er blevet en stor passion for mig, da det kombinerer design og problemløsning. Derudover har jeg arbejdet i dagtilbud i 2,5 år, hvor jeg har lært meget af børnene—deres leg og nysgerrighed inspirerer mig.
                        <br><br>
                        Min drøm er at kombinere min passion for webudvikling med børns univers. Når jeg er færdig med min multimediedesign-uddannelse til sommer, håber jeg at finde et arbejde, hvor teknologi og leg mødes.</p>
                        
                    </div>
                    <div class="intro-image">
                            <img src="pbilleder/profilbillede2.png" alt="Project Image" />
                        </div>
                </div>
            </div>
        `;
        return section;
    }
}

// JavaScript to handle the video click event
document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.minvideo-container');
    const video = document.querySelector('.minvideo');
    const watchText = document.querySelector('.watch-video-text');

    // Show "Watch Video" on hover
    videoContainer.addEventListener('mouseenter', () => {
        watchText.style.opacity = '1'; // Show text on hover
    });

    videoContainer.addEventListener('mouseleave', () => {
        watchText.style.opacity = '0'; // Hide text when not hovering
    });

    // On click, play video with sound and enlarge
    videoContainer.addEventListener('click', () => {
        video.muted = false; // Unmute the video
        video.play(); // Ensure the video plays
        videoContainer.classList.toggle('enlarge-video'); // Toggle enlarge effect
    });
});


// PROJEKTER-SIDEN: Ansvarlig for at vise projekter
class ProjectsPage {
    constructor() {
        this.verningeVisible = false; // Manage visibility of project details
    }

    render() {
        const section = document.createElement('section'); // Create section
        section.id = "projekter"; // Set ID for projects section
        section.innerHTML = `
            <h2 class="projekter-title">Projekter</h2>
            <p class="projekter-intro">Vi har haft mange spændene projekter på Multimediedesign-uddannelsen, som har været med til at 
            udfordre og udvikle mine færdigheder. I vores projekter har vi skulle arbejde med Design, Content, Visuel identitet, UX/UI og programering.
            Jeg har efterhånden udarbejdet flere hjemmesider i HTML,CSS og JavaScript og har dermed fået skabt en god grundforståelse for programerings spoget.</p>
            
            <div class="project">
                <div class="project-content">
                    <h3>Verninge Borgerforening</h3>
                    <h4>Projektoversigt</h4>
                    <p>Dette projekt var et gruppearbejde på 1. semester, hvor vi samarbejdede med Verninge Borgerforening. Formålet var at lave et redesign af deres hjemmeside for at gøre den mere brugervenlig og tiltrække en bredere målgruppe. Borgerforeningen ønskede også at tiltrække flere børnefamilier til byen ved at fremhæve områdets natur og det stærke fællesskab i lokalsamfundet.</p>
                    <button id="verninge-toggle">Læs mere</button>
                    <div id="verninge-detail" style="display: ${this.verningeVisible ? 'block' : 'none'};">
                    <h4>Min rolle i projektet</h4>
                        <p>Projektledelse: Sikre overholdelse af tidsplan og fokusområder.<br><br>
                        Research: Undersøgelse af den eksisterende hjemmeside og brugeranalyser.<br><br>
                        Ikon-design: Skabe nye ikoner til hjemmesiden.<br><br>
                        Design af forside: Udvikle layoutet for hjemmesidens forside.<br><br>
                        Test af prototype: Deltage i testfasen af vores design.<br><br>
                        Programmering: Implementere forsiden ved hjælp af HTML og CSS.</p><br><br>
                        <h4>Research</h4>
                        <p>Før designprocessen lavede vi en fælles research, hvor vi analyserede den tidligere hjemmeside, brugervenlighed, visuel identitet og udførte brugerundersøgelser. Dette gav os en solid base for at træffe de bedste beslutninger i udviklingsprocessen.</p><br>
                        <h4>Designproces</h4>
                        <p>Vi startede med en fælles brainstorm, hvorefter vi udviklede moodboards og style tiles for at definere den visuelle identitet. Projektet blev derefter opdelt, og mit ansvar var at designe forsiden samt ikonerne.<br> Jeg valgte at fremhæve naturen og fællesskabet ved at implementere en video fra Verninge som det første visuelle element på forsiden. Desuden fokuserede jeg på et simpelt og brugervenligt layout, hvor det vigtigste indhold blev præsenteret tydeligt.</p> <br>
                        <h4>Prototypeudvikling</h4>
                        <p>Vi startede med en low-fidelity prototype for at få styr på grundlæggende layout og struktur. Derefter udviklede vi en high-fidelity prototype, hvor de visuelle elementer blev finpudset, og interaktive funktioner blev implementeret.</p><br>
                        <h4>Test og feedback</h4>
                        <p>Prototypen blev testet for at indsamle data, brugernes feedback og for at identificere potentielle problemer i navigationen. Baseret på denne feedback blev designet justeret og forbedret.</p><br>
                        <h4>Programmering</h4>
                        <p>Jeg stod for at programmere forsiden ved hjælp af HTML og CSS, hvor jeg implementerede de designvalg, vi havde truffet.</p><br>
                        <h4>Anvendte værktøjer</h4>
                        <p>Figma<br>
                        Visual Studio Code<br>
                        GitHub<br>
                        Adobe Illustrator</p>

                    </div>
                </div>
                <div class="project-video">
                <video src="pbilleder/verningevideo-polifolie.mp4" muted loop autoplay></video>
                <a href="http://carolinecarmen.dk/Verninge-Borgerforegning/index.html" target="_blank">Gå til Verninge borgerforening</a>
            </div>
            </div>

            <div class="project">
                <div class="project-video">
                <video src="pbilleder/greywolfvideo-polifole.mp4" muted loop autoplay></video>
                <a href="https://elisabethellgaard.dk/grey-wolf/" target="_blank">Gå til Grey Wolf</a>
            </div>
                <div class="project-content">
                    <h3>GreyWolf</h3>
                    <h4>Projektoversigt</h4>
                    <p>Dette projekt var vores første på uddannelsen, hvor målet var at udvikle en mobilwebløsning for den fiktive startup-virksomhed Grey Wolf. Virksomheden beskæftiger sig med bæredygtigt tøj, og vores opgave var at designe deres hjemmeside både visuelt og teknisk. Målgruppen var unge mennesker med interesse for bæredygtighed, og hjemmesiden skulle derfor også formidle viden om tøjproduktionens bæredygtige aspekter.</p><br>
                    <h4>Min rolle i projektet</h4>
                    <p>Dette var et gruppeprojekt, hvor vi i fællesskab udviklede farvepaletten, typografien og den visuelle identitet samt en prototype af hjemmesiden. Min specifikke opgave var at programmere forsiden ved hjælp af HTML og CSS.</p>
            
                </div>
            </div>

            <div class="project">
                <div class="project-content">
                    <h3>Databeskyttelse</h3>
                    <h4>Projektoversigt</h4>
                    <p>I dette individuelle projekt, som var vores andet projekt på 2. semester, skulle vi udvikle og designe en interaktiv digital brugerflade, der formidlede et element af datasikkerhed gennem branching-scenarier. Målgruppen var almindelige internetbrugere, og formålet var at gøre dem mere bevidste om datasikkerhed.</p>
                </div>
        
                <div class="project-video">
                <video src="pbilleder/passwordsikkerhed.mp4" muted loop autoplay></video>
                <a href="http://carolinecarmen.dk/projekt-datasikkerhed2.2/index.html" target="_blank">Gå til Datasikkerhed</a>
            </div>
           
            </div>

            <div class="project">
                <div class="project-video">
                <video src="pbilleder/profibeast.mp4" muted loop autoplay></video>
                <a href="http://carolinecarmen.dk/ProfitBeast/" target="_blank">Gå til Spillet</a>
            </div>
                <div class="project-content">
                    <h3>Spil - ProfitBeast</h3>
                    <h4>Projektoversigt</h4>
                    <p>I dette projekt skulle vi udvikle et læringsspil om iværksætteri og entreprenørskab, som kunne bruges i undervisningssammenhæng. Spillet skulle fokusere på brugerinddragelse, designprocesser og spiludvikling for at skabe en engagerende læringsoplevelse.
                    Min rolle i projektet
                    Dette var et gruppeprojekt, hvor vi i fællesskab arbejdede på udviklingen af spilkonceptet, designet og programmeringen. Til dette brugte vi HTML, CSS og JavaScript.</p>
                </div>
            </div>
           
        `;

        // Add event listener for the button
        const verningeButton = section.querySelector('#verninge-toggle'); // Find the button within this section
        if (verningeButton) {
            verningeButton.addEventListener('click', () => {
                this.verningeVisible = !this.verningeVisible; // Toggle visibility
                const detailDiv = section.querySelector('#verninge-detail'); // Get the detail div within this section
                if (detailDiv) {
                    detailDiv.style.display = this.verningeVisible ? 'block' : 'none'; // Show or hide
                }
            });
        }

        return section; // Return the section
    }
}


// KONTAKT-SIDEN: Ansvarlig for kontaktsiden
class ContactPage {
    render() {
        const section = document.createElement('section'); // Opretter sektion
        section.id = "kontakt"; // ID for kontaktsiden
        section.innerHTML = `
        <div class="contact-info">
        <!-- Kontakt Info Section -->
            <div class="info-box">
                <h2>Kontakt Info</h2>
                <p>Knudrisgade 26, 3 <br> 8000 Aarhus C.</p><br>
                <p>Email: caroline.carmen.siegrist@gmail.com</p><br>
                <p>Tlf.: +45 20484023</p><br>
                <a href="caroline.carmen.siegrist@gmail.com">Send Email</a>
            </div>

        

        <!-- Contact Form Section -->
        <div class="contact-form">
        <h2>Kontakt Mig</h2>
        <p>If you have any questions or would like to get in touch, feel free to contact me using the form below.</p>
            <form action="submit_form.php" method="POST">
                <input type="text" name="name" placeholder="Navn" required>
                <input type="email" name="email" placeholder="Email" required>
                <textarea name="message" rows="5" placeholder="Besked" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
    </div>
        `;
        return section; // Returnerer sektionen
    }
}

// FOOTER-KLASSEN: Ansvarlig for at skabe footer-sektionen
class Footer {
    render() {
        const footer = document.createElement('footer'); // Opretter et footer-element
        footer.innerText = "© 2024 Caroline Carmen"; // Indhold i footeren
        return footer; // Returnerer footer-elementet
    }
}

// HOVED-APP-KLASSEN: Ansvarlig for at styre navigation og opdatering
class App {
    constructor() {
        this.header = new Header('Caroline Carmen'); // Header instance
        this.footer = new Footer(); // Footer instance

        // Routes for different pages
        this.routes = {
            '': new HomePage(),
            '#forside': new HomePage(),
            '#ommig': new AboutPage(),
            '#projekter': new ProjectsPage(),
            '#kontakt': new ContactPage(),
        };
    }

    // Method to update the page based on the hash
    navigate() {
        const hash = window.location.hash || ''; 
        const page = this.routes[hash];

        const appDiv = document.getElementById('app');
        appDiv.innerHTML = ''; 

        // Append header, current page, and footer
        appDiv.appendChild(this.header.render());
        appDiv.appendChild(page.render());
        appDiv.appendChild(this.footer.render());

        // Call the function to handle scroll effect
        this.handleScrollEffect();
    }

    // Method to handle scroll effect on navbar
    handleScrollEffect() {
        const headerElement = document.querySelector('header');
        
        // Function to toggle navbar classes
        const toggleNavbarStyle = () => {
            if (window.scrollY > 100) { // Adjust this threshold as needed
                headerElement.classList.add('scrolled-nav'); // Apply scrolled style
                headerElement.classList.remove('transparent-nav'); // Remove transparent style
            } else {
                headerElement.classList.add('transparent-nav'); // Apply transparent style
                headerElement.classList.remove('scrolled-nav'); // Remove scrolled style
            }
        };

        // Run the function on scroll
        window.addEventListener('scroll', toggleNavbarStyle);

        // Run once on page load in case the user starts in the middle of the page
        toggleNavbarStyle();
    }

    // Start the application
    start() {
        window.addEventListener('hashchange', () => this.navigate());
        this.navigate(); // First load of page
    }
}

// Initialize and start the app
const app = new App();
app.start();
