document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, 
                behavior: 'smooth'
            });
        }
    });
});


const contactButton = document.querySelector('.contact .items .item button');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        window.location.href = 'mailto:daniilarosik461@gmail.com';
    });
}

const projectsUrl = 'https://github.com/yaroboyy'; // Replace with the actual URL of your projects


document.getElementById('explore-projects-button').addEventListener('click', () => {
    window.location.href = projectsUrl; // Redirect to the projects URL
});


document.getElementById('portfolio-link').addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = 'https://danresume.my.canva.site/'; 
});

document.getElementById('view-work-button').addEventListener('click', () => {
    window.location.href = 'https://github.com/yaroboyy' ;
});

const docsButton = document.querySelector('.docs-button');
if (docsButton) {
    docsButton.addEventListener('click', () => {
        
        window.location.href = 'https://danresume.my.canva.site/'; 
    });
}


const projectsButton = document.querySelector('.projects-button');
if (projectsButton) {
    projectsButton.addEventListener('click', () => {
        window.location.href = 'https://github.com/yaroboyy'; 
    });
}

const aboutButton = document.querySelector('.about-button');
if (aboutButton) {
    aboutButton.addEventListener('click', () => {
        window.location.href = 'https://personal-portfolio-website-about-page-6m2k.vercel.app/'; 
    });
}



const githubButton = document.querySelector('.hero .left-section .top .buttons button.git');
if (githubButton) {
    githubButton.addEventListener('click', () => {
        window.open('https://github.com/yaroboyy', '_blank'); 
    })};
    

document.querySelectorAll('.hero .left-section .bottom .icons i').forEach(icon => {
    icon.addEventListener('click', () => {
        const iconClass = icon.className;

        if (iconClass.includes('ri-snapchat-line')) {
            window.open('https://snapchat.com/t/E1z6ocMF', '_blank');
        } else if (iconClass.includes('ri-twitter-x-line')) {
            window.open('https://twitter.com/DanYaroshyk', '_blank');
        } else if (iconClass.includes('ri-instagram-line')) {
            window.open('https://www.instagram.com/dyaroshyk', '_blank'); 
        }
    });
});

const exploreProjectsButton = document.querySelector('.projects .inner > button');
if (exploreProjectsButton) {
    exploreProjectsButton.addEventListener('click', () => {
        window.location.href = '#projects'; 
    });
}

const hireButton = document.querySelector('.hero .left-section .top .buttons button.doc');
if (hireButton) {
    hireButton.addEventListener('click', () => {
        window.location.href = 'mailto:daniilarosik461@gmail.com'; 
    });
}


document.querySelectorAll('.projects .inner .items .item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});
