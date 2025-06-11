// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 18, 18, 0.9)';
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true
});

// Scroll to top button
const scrollTop = document.createElement('div');
scrollTop.className = 'scroll-top';
scrollTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        document.body.classList.add('window-scroll');
    } else {
        document.body.classList.remove('window-scroll');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('nav-active');
        document.querySelector('.hamburger').classList.remove('toggle');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Typing effect code (existing)
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        function typing() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }
        setTimeout(typing, 1000);
    }
    
    // Function to map skills to appropriate icons
    function getSkillIcon(skillName) {
        const iconMap = {
            // Frontend
            'HTML': '<i class="fab fa-html5"></i>',
            'CSS': '<i class="fab fa-css3-alt"></i>',
            'JavaScript': '<i class="fab fa-js"></i>',
            'React.js': '<i class="fab fa-react"></i>',
            'Next.js': '<i class="fab fa-react"></i>',
            
            // Backend
            'Node.js': '<i class="fab fa-node-js"></i>',
            'Express.js': '<i class="fab fa-node"></i>',
            'MySQL': '<i class="fas fa-database"></i>',
            'MongoDB': '<i class="fas fa-leaf"></i>',
            
            // Programming Languages
            'Python': '<i class="fab fa-python"></i>',
            'Java': '<i class="fab fa-java"></i>',
            'C': '<i class="fas fa-code"></i>',
            
            // Computer Vision & ML
            'Computer Vision': '<i class="fas fa-eye"></i>',
            'OpenCV': '<i class="fas fa-camera"></i>',
            'YOLO': '<i class="fas fa-object-ungroup"></i>',
            'PyTorch': '<i class="fas fa-fire"></i>',
            
            // Version Control
            'Git': '<i class="fab fa-git-alt"></i>',
            'GitHub': '<i class="fab fa-github"></i>'
        };
        
        return iconMap[skillName] || '<i class="fas fa-code"></i>'; // Default icon if not found
    }

    function getDomainId(domain) {
        // Replace non-alphanumeric characters (including &) with hyphens.
        return 'domain-' + domain.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
    }

    // Skills data organized by category
    const skillsData = {
        "Frontend Development": [
            { name: "HTML", level: 90 },
            { name: "CSS", level: 85 },
            { name: "JavaScript", level: 85 },
            { name: "React.js", level: 80 },
            { name: "Next.js", level: 75 }
        ],
        "Backend Development": [
            { name: "Node.js", level: 80 },
            { name: "Express.js", level: 75 },
            { name: "MySQL", level: 70 },
            { name: "MongoDB", level: 75 }
        ],
        "Programming Languages": [
            { name: "Python", level: 85 },
            { name: "Java", level: 70 },
            { name: "C", level: 65 }
        ],
        "Computer Vision & ML": [
            { name: "Computer Vision", level: 75 },
            { name: "OpenCV", level: 70 },
            { name: "YOLO", level: 65 },
            { name: "PyTorch", level: 60 }
        ],
        "Version Control": [
            { name: "Git", level: 85 },
            { name: "GitHub", level: 85 }
        ]
    };

    // Get skills container
    const skillsContainer = document.querySelector('.skills-container');
    
    if (skillsContainer) {
        // Clear any existing content
        skillsContainer.innerHTML = '';
        
        // For each category
        Object.entries(skillsData).forEach(([category, skills]) => {
            // Create category container
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';
            categoryDiv.setAttribute('style', 'display: block; margin-bottom: 30px;');
            
            // Add category heading
            const heading = document.createElement('h3');
            heading.textContent = category;
            heading.setAttribute('style', 'margin-bottom: 20px;');
            categoryDiv.appendChild(heading);
            
            // Create skills grid
            const skillsGrid = document.createElement('div');
            skillsGrid.className = 'skills-grid';
            skillsGrid.setAttribute('style', 'display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;');
            
            // Add skills to grid
            skills.forEach(skill => {
                // Create skill item
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.setAttribute('style', 'display: flex; align-items: center; background: rgba(40,40,40,0.8); padding: 15px; border-radius: 10px;');
                
                // Create icon with appropriate icon based on skill name
                const iconDiv = document.createElement('div');
                iconDiv.className = 'skill-icon-circle';
                iconDiv.setAttribute('style', 'width: 50px; height: 50px; background: linear-gradient(135deg, #6c63ff, #ff6b6b); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; color: white; font-size: 1.5rem;');
                iconDiv.innerHTML = getSkillIcon(skill.name);
                skillItem.appendChild(iconDiv);
                
                // Create details container
                const detailsDiv = document.createElement('div');
                detailsDiv.className = 'skill-details';
                detailsDiv.setAttribute('style', 'flex: 1;');
                
                // Create skill info
                const infoDiv = document.createElement('div');
                infoDiv.className = 'skill-info';
                infoDiv.setAttribute('style', 'display: flex; justify-content: space-between; margin-bottom: 10px;');
                
                // Add skill name
                const nameSpan = document.createElement('span');
                nameSpan.className = 'skill-name';
                nameSpan.textContent = skill.name;
                nameSpan.setAttribute('style', 'font-weight: 600;');
                infoDiv.appendChild(nameSpan);
                
                // Add skill percentage
                const percentSpan = document.createElement('span');
                percentSpan.className = 'skill-percentage';
                percentSpan.textContent = skill.level + '%';
                percentSpan.setAttribute('style', 'color: #ff6b6b; font-weight: 700;');
                infoDiv.appendChild(percentSpan);
                
                detailsDiv.appendChild(infoDiv);
                
                // Create skill bar
                const barDiv = document.createElement('div');
                barDiv.className = 'skill-bar';
                barDiv.setAttribute('style', 'height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;');
                
                // Create skill level
                const levelDiv = document.createElement('div');
                levelDiv.className = 'skill-level';
                levelDiv.setAttribute('style', 'width: 0%; height: 100%; background: linear-gradient(90deg, #6c63ff, #ff6b6b); border-radius: 4px;');
                barDiv.appendChild(levelDiv);
                
                detailsDiv.appendChild(barDiv);
                skillItem.appendChild(detailsDiv);
                skillsGrid.appendChild(skillItem);
            });
            
            categoryDiv.appendChild(skillsGrid);
            skillsContainer.appendChild(categoryDiv);
        });
        
        // Animate skill bars
        setTimeout(() => {
            document.querySelectorAll('.skill-level').forEach(skillBar => {
                const percent = skillBar.parentElement.previousElementSibling.querySelector('.skill-percentage').textContent;
                skillBar.style.width = percent;
            });
        }, 500);
    }

    // Certificates Section
    const certificatesData = [
        {
            title: "Python (Basic)",
            organization: "HackerRank",
            date: "15 Feb 2025",
            image: "img/certificates/python.png", 
            credentialId: "955C9C357527",
            link: "https://coursera.org/verify/your-credential",
            skills: ["Python"]
        },
        {
            title: "GenAI",
            organization: "GDG OnCampus RCET",
            date: "January 2025",
            image: "img/certificates/GenAI.png",
            credentialId: "GDGRCET",
            link: "#",
            skills: ["GenAI Arcade Games", "Google Cloud Computing Foundations"]
        },
        {
            title: "Git & GitHub",
            organization: "PW Skills",
            date: "2nd March 2025",
            image: "img/certificates/af4a7daf-882b-462a-88d0-d98ba697d7dd.png",
            credentialId: "af4a7daf-882b-462a-88d0-d98ba697d7dd",
            link: "https://learn.pwskills.com/certificate/af4a7daf-882b-462a-88d0-d98ba697d7dd",
            skills: ["Git", "GitHub"]
        },
        {
            title: "Microsoft Azure Fundamentals",
            organization: "Microsoft",
            date: "June 2025",
            image: "img/certificates/Azure Fundamental.png",
            credentialId: "74AC63A3A78667D2",
            link: "https://learn.microsoft.com/api/credentials/share/en-us/JatinNaik-3276/74AC63A3A78667D2?sharingId",
            skills: ["Microsoft Azure", "Azure Functions", "Cloud Computing", "Azure Storage", "Azure App Service", "Azure Virtual Machines", "Azure Networking", "Azure Security", "Azure Monitoring", "Azure Identity & Governance"]
        }
    ];

    // Function to generate certificates HTML
    function loadCertificates() {
        const certificatesContainer = document.querySelector('.certificates-container');
        if (!certificatesContainer) return;
        
        let certificatesHTML = '';
        
        certificatesData.forEach((cert, index) => {
            certificatesHTML += `
                <div class="certificate-card" data-aos="fade-up" data-aos-delay="${100 + index * 50}">
                    <div class="certificate-image">
                        <img src="${cert.image}" alt="${cert.title}" onerror="this.src='img/certificates/default-cert.jpg'">
                    </div>
                    <div class="certificate-content">
                        <h3 class="certificate-title">${cert.title}</h3>
                        <div class="certificate-issuer">
                            <i class="fas fa-award"></i>
                            <span>${cert.organization}</span>
                        </div>
                        <div class="certificate-date">
                            <i class="far fa-calendar-alt"></i>
                            <span>${cert.date}</span>
                        </div>
                        <div class="certificate-id">
                            <i class="fas fa-fingerprint"></i>
                            <span>Credential ID: ${cert.credentialId}</span>
                        </div>
                        <div class="certificate-skills">
                            ${cert.skills.map(skill => `<span class="certificate-skill-tag">${skill}</span>`).join('')}
                        </div>
                        <a href="${cert.link}" target="_blank" class="certificate-link">
                            <i class="fas fa-external-link-alt"></i> Verify Certificate
                        </a>
                    </div>
                </div>
            `;
        });
        
        certificatesContainer.innerHTML = certificatesHTML;
    }

    // Load certificates
    loadCertificates();

    // Load education section
    loadEducation();
});

// Education Section Data
const educationData = [
    {
        degree: "Bachelors of Technology in Information Technology",
        institution: "Rungta College Of Engineering and Technology",
        location: "Bhilai, Chhattisgarh",
        duration: "2023 - 2027",
        achievements: [
            "CGPA: 8.1/10"
        ],
        logo: "img/education/rungta.png"
    },
    {
        degree: "Senior Secondary School",
        institution: "Sarvodaya Public School",
        location: "Chandrapur, Chhattisgarh",
        duration: "2020 - 2022",
        achievements: [
            "Percentage: 75.2/100"
        ],
        logo: "img/education/sarvodaya.png"
    },
    {
        degree: "Secondary School",
        institution: "Vikash Residential School",
        location: "Bargarh, Odisha",
        duration: "2018 - 2020",
        achievements: [
            "Percentage: 89/100"
        ],
        logo: "img/education/vikash.png"
    }
];

// Function to load education data
function loadEducation() {
    const educationContainer = document.querySelector('.education-container');
    if (!educationContainer) return;
    
    let educationHTML = '';
    
    educationData.forEach((edu, index) => {
        educationHTML += `
            <div class="education-card" data-aos="fade-up" data-aos-delay="${100 + index * 100}">
                <div class="education-card-header">
                    <div class="education-logo">
                        <img src="${edu.logo}" alt="${edu.institution}" onerror="this.src='img/education/default-school.png'">
                    </div>
                    <div class="education-time">
                        <i class="far fa-calendar-alt"></i> ${edu.duration}
                    </div>
                </div>
                <div class="education-card-body">
                    <h3 class="education-degree">${edu.degree}</h3>
                    <div class="education-institution">
                        <i class="fas fa-university"></i> ${edu.institution}
                    </div>
                    <div class="education-location">
                        <i class="fas fa-map-marker-alt"></i> ${edu.location}
                    </div>                    
                    <div class="education-achievements">
                        <h4>Achievements</h4>
                        <ul>
                            ${edu.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
    
    educationContainer.innerHTML = educationHTML;
}