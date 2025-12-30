document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu li a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Job filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const jobsContainer = document.getElementById('jobs-container');
    
    // Sample job data (in a real app, this would come from an API)
    const jobs = [
        {
            id: 1,
            title: 'Frontend Developer',
            company: 'TechVision',
            location: 'San Francisco, CA',
            salary: '$90,000 - $120,000',
            type: 'fulltime',
            posted: '2 days ago',
            logo: 'https://via.placeholder.com/50x50'
        },
        {
            id: 2,
            title: 'UX Designer',
            company: 'DesignHub',
            location: 'Remote',
            salary: '$80,000 - $100,000',
            type: 'remote',
            posted: '1 week ago',
            logo: 'https://via.placeholder.com/50x50'
        },
        {
            id: 3,
            title: 'Backend Engineer',
            company: 'InnovateSoft',
            location: 'New York, NY',
            salary: '$100,000 - $140,000',
            type: 'fulltime',
            posted: '3 days ago',
            logo: 'https://via.placeholder.com/50x50'
        },
        {
            id: 4,
            title: 'Marketing Specialist',
            company: 'Global Finance',
            location: 'Chicago, IL',
            salary: '$60,000 - $80,000',
            type: 'parttime',
            posted: '5 days ago',
            logo: 'https://via.placeholder.com/50x50'
        },
        {
            id: 5,
            title: 'Data Scientist',
            company: 'TechVision',
            location: 'Remote',
            salary: '$110,000 - $150,000',
            type: 'remote',
            posted: '1 day ago',
            logo: 'https://via.placeholder.com/50x50'
        },
        {
            id: 6,
            title: 'DevOps Engineer',
            company: 'CloudSystems',
            location: 'Austin, TX',
            salary: '$95,000 - $125,000',
            type: 'contract',
            posted: '2 weeks ago',
            logo: 'https://via.placeholder.com/50x50'
        }
    ];
    
    // Display all jobs initially
    displayJobs(jobs);
    
    // Filter jobs based on type
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            if (filter === 'all') {
                displayJobs(jobs);
            } else {
                const filteredJobs = jobs.filter(job => job.type === filter);
                displayJobs(filteredJobs);
            }
        });
    });
    
    // Function to display jobs
    function displayJobs(jobsToDisplay) {
        jobsContainer.innerHTML = '';
        
        if (jobsToDisplay.length === 0) {
            jobsContainer.innerHTML = '<p class="no-jobs">No jobs found matching your criteria.</p>';
            return;
        }
        
        jobsToDisplay.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            jobCard.innerHTML = `
                <div class="job-header">
                    <img src="${job.logo}" alt="${job.company}" class="job-company-logo">
                    <div>
                        <h3 class="job-title">${job.title}</h3>
                        <p class="job-company">${job.company}</p>
                    </div>
                </div>
                <div class="job-details">
                    <p class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</p>
                    <p class="job-salary"><i class="fas fa-dollar-sign"></i> ${job.salary}</p>
                    <p class="job-type"><i class="fas fa-clock"></i> ${formatJobType(job.type)}</p>
                </div>
                <div class="job-footer">
                    <p class="job-posted">${job.posted}</p>
                    <button class="apply-btn">Apply Now</button>
                </div>
            `;
            
            jobsContainer.appendChild(jobCard);
        });
    }
    
    // Format job type for display
    function formatJobType(type) {
        switch(type) {
            case 'fulltime':
                return 'Full Time';
            case 'parttime':
                return 'Part Time';
            case 'remote':
                return 'Remote';
            case 'contract':
                return 'Contract';
            default:
                return type;
        }
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements when scrolling
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.category-card, .job-card, .company-card, .step, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.category-card, .job-card, .company-card, .step, .testimonial-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run animation on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Apply button functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('apply-btn')) {
            e.preventDefault();
            alert('Application functionality would be implemented here. In a real app, this would redirect to an application form or open a modal.');
        }
    });
});