document.addEventListener('DOMContentLoaded', function() {
    // Attach the filterJobs function to the change event of filter elements
    document.getElementById('salaryFilter').addEventListener('change', filterJobs);
    document.getElementById('locationFilter').addEventListener('change', filterJobs);
    document.getElementById('experienceFilter').addEventListener('change', filterJobs);

    // Initial filtering when the page loads
    filterJobs();
});

// Example filtering logic
function filterJobs() {
    var salaryFilter = document.getElementById('salaryFilter').value;
    var locationFilter = document.getElementById('locationFilter').value;
    var experienceFilter = document.getElementById('experienceFilter').value;

    // Filter job cards based on the selected criteria
    var jobCards = document.querySelectorAll('.jobCard');
    jobCards.forEach(function (jobCard) {
        var jobSalary = jobCard.getAttribute('data-salary');
        var jobLocation = jobCard.getAttribute('data-location');
        var jobExperience = jobCard.getAttribute('data-experience');

        // Check if the job card meets the filter criteria
        if (
            (salaryFilter === 'select' || jobSalary === salaryFilter) &&
            (locationFilter === 'select1' || jobLocation === locationFilter) &&
            (experienceFilter === 'select2' || jobExperience === experienceFilter)
        ) {
            // Show the job card
            jobCard.style.display = 'block';
        } else {
            // Hide the job card
            jobCard.style.display = 'none';
        }
    });
}








function clearFilters() {
    // Implement logic to clear filters
    console.log("Clearing filters");
}




const windTurbineTechnician = {
    title: 'Wind Turbine Technician',
    experience: '1-2 years of hands-on experience in wind turbine maintenance.',
    degree: 'Technical diploma or certification in wind energy is required. Candidates with additional relevant certifications or coursework in electrical or mechanical engineering will be given preference.',
    responsibilities: [
        'Conduct routine inspections of wind turbine components.',
        'Identify and repair mechanical and electrical faults.',
        'Perform preventive maintenance tasks to ensure optimal performance.',
        'Collaborate with a team of technicians to address larger maintenance projects.',
        'Document maintenance activities and report any issues to relevant stakeholders.'
    ],
    requirements: [
        'In-depth knowledge of wind turbine systems, including gearbox, blades, tower, and control systems.',
        'Strong problem-solving skills and the ability to work at heights.',
        'Commitment to safety, physical fitness, and the capability to work in varying weather conditions.'
    ],
    benefits: [
        'Competitive salary commensurate with experience.',
        'Comprehensive benefits package, including health insurance and retirement plans.',
        'Opportunities for career advancement.',
        'Ongoing training for professional development.',
        'Joining Rocky Turbines means becoming a vital part of a team dedicated to shaping a sustainable future through innovative renewable energy solutions.',
        'Contributing to the success of our projects.',
        'Enjoying a supportive and collaborative work environment.'
    ]
};

const windTurbineEngineer = {
    title: 'Wind Turbine Engineer',
    experience: '2-5 years of hands-on experience in wind turbine design, construction, and maintenance.',
    degree: 'Bachelor’s degree in Mechanical or Electrical Engineering, with a focus on renewable energy or a related field. Advanced degrees or additional certifications are a plus.',
    responsibilities: [
        'Design and optimize wind turbine systems, including components such as gearbox, blades, tower, and control systems.',
        'Oversee the construction and installation of wind turbines, ensuring compliance with engineering standards and specifications.',
        'Conduct performance assessments and troubleshoot mechanical and electrical issues.',
        'Collaborate with cross-functional teams to innovate and improve wind turbine technology.',
        'Provide technical support and guidance during the maintenance and repair of wind turbines.',
        'Stay updated on industry advancements and integrate new technologies into wind turbine projects.'
    ],
    requirements: [
        'In-depth knowledge of wind turbine systems and their integration with electrical grids.',
        'Experience with computer-aided design (CAD) software and simulation tools.',
        'Strong analytical and problem-solving skills, with a focus on continuous improvement.',
        'Ability to work at heights and in varying weather conditions.',
        'Commitment to safety protocols and guidelines.'
    ],
    benefits: [
        'Competitive salary commensurate with experience and industry standards.',
        'Comprehensive benefits package, including health insurance and retirement plans.',
        'Opportunities for career advancement and professional growth.',
        'Continuous training and development programs to stay at the forefront of industry trends.',
        'Being a part of a dynamic team dedicated to shaping a sustainable future through innovative renewable energy solutions.',
        'Contributing to the success of cutting-edge wind turbine projects.',
        'Enjoying a supportive and collaborative work environment.'
    ]
};


const projectManagerWindEnergy = {
    title: 'Project Manager - Wind Energy',
    experience: '5-8 years of proven experience in project management, specifically in the wind energy sector.',
    degree: 'Bachelor’s degree in Project Management, Engineering, Business Administration, or a related field. PMP certification is highly desirable.',
    responsibilities: [
        'Develop and execute project plans, ensuring successful and timely completion of wind energy projects.',
        'Coordinate and communicate effectively with cross-functional teams, including engineers, technicians, and external stakeholders.',
        'Manage project budgets, resources, and timelines to meet or exceed project goals.',
        'Monitor and evaluate project progress, identifying and addressing potential risks and issues.',
        'Collaborate with clients to understand their requirements and ensure customer satisfaction.',
        'Implement best practices in project management to optimize efficiency and quality.',
        'Prepare and present project status reports to internal and external stakeholders.'
    ],
    requirements: [
        'Proven track record in successfully managing wind energy projects from initiation to completion.',
        'Strong leadership and communication skills to effectively lead project teams.',
        'Excellent problem-solving and decision-making abilities.',
        'Knowledge of regulatory requirements and environmental considerations in the wind energy industry.',
        'Experience with project management tools and software.'
    ],
    benefits: [
        'Competitive salary commensurate with experience and industry standards.',
        'Comprehensive benefits package, including health insurance and retirement plans.',
        'Opportunities for career advancement and professional development.',
        'Engaging work environment with a focus on innovation and sustainability.',
        'Contribution to the growth of renewable energy and shaping a sustainable future.',
        'Supportive and collaborative team culture.'
    ]
};


const environmentalRegulatorySpecialist = {
    title: 'Environmental and Regulatory Specialist',
    experience: '3-5 years of experience in environmental compliance and regulatory affairs.',
    degree: 'Bachelor’s degree in Environmental Science, Environmental Engineering, Biology, or a related field. Advanced degree or relevant certifications are a plus.',
    responsibilities: [
        'Monitor and ensure compliance with environmental regulations at local, state, and federal levels.',
        'Conduct environmental impact assessments and provide recommendations for mitigation strategies.',
        'Collaborate with project teams to integrate environmental considerations into planning and decision-making processes.',
        'Keep abreast of changes in environmental laws and regulations, and communicate updates to relevant stakeholders.',
        'Develop and maintain relationships with regulatory agencies and ensure timely submission of required permits and reports.',
        'Investigate and respond to environmental incidents or violations, implementing corrective actions as necessary.',
        'Provide guidance on sustainable practices and support the organization commmitment to environmental stewardship.'
    ],
    requirements: [
        'Proven experience in navigating and interpreting environmental regulations and permitting processes.',
        'Strong analytical and research skills, with attention to detail.',
        'Excellent communication and interpersonal skills to engage with internal and external stakeholders.',
        'Ability to work independently and collaboratively within a multidisciplinary team.',
        'Knowledge of environmental monitoring techniques and data analysis.',
        'Familiarity with environmental impact assessment methodologies.'
    ],
    benefits: [
        'Competitive salary commensurate with experience and industry standards.',
        'Comprehensive benefits package, including health insurance and retirement plans.',
        'Opportunities for professional development and continued education.',
        'Contribution to meaningful environmental initiatives and sustainable practices.',
        'Being a part of a team dedicated to environmental responsibility and positive impact.',
        'Supportive and collaborative work culture.'
    ]
};


const dataAnalystWindEnergy = {
    title: 'Data Analyst - Wind Energy',
    experience: '2-4 years of experience in data analysis, preferably in the renewable energy or wind energy sector.',
    degree: 'Bachelor’s degree in Data Science, Statistics, Computer Science, or a related field. Advanced degrees or relevant certifications are a plus.',
    responsibilities: [
        'Collect, clean, and analyze data related to wind energy projects, including performance data from turbines and meteorological data.',
        'Develop and maintain databases, data models, and dashboards to track and visualize key performance indicators.',
        'Collaborate with cross-functional teams to identify trends, patterns, and insights that can inform decision-making and improve efficiency.',
        'Utilize statistical and machine learning techniques to derive actionable insights from large datasets.',
        'Implement data quality control processes to ensure accuracy and reliability of data.',
        'Stay updated on industry best practices and emerging technologies in data analysis.',
        'Communicate findings and recommendations to both technical and non-technical stakeholders.'
    ],
    requirements: [
        'Proven experience in data analysis and interpretation, with a focus on renewable energy or wind energy datasets.',
        'Proficiency in programming languages such as Python or R, and experience with data visualization tools (e.g., Tableau, Power BI).',
        'Strong analytical and problem-solving skills, with attention to detail.',
        'Knowledge of statistical methods and machine learning techniques.',
        'Excellent communication skills to convey complex data insights in a clear and understandable manner.',
        'Ability to work collaboratively in a team environment.'
    ],
    benefits: [
        'Competitive salary commensurate with experience and industry standards.',
        'Comprehensive benefits package, including health insurance and retirement plans.',
        'Opportunities for professional development and continued education.',
        'Engaging work environment with a focus on innovation and sustainability.',
        'Contribution to the growth of renewable energy and shaping a sustainable future.',
        'Supportive and collaborative team culture.'
    ]
};


const qualityControlInspector = {
    title: 'Quality Control Inspector',
    experience: '2-5 years of experience in quality control or a related field, preferably in manufacturing or renewable energy sectors.',
    degree: 'High school diploma or equivalent required. Additional certifications or technical degrees in quality control or a related field are a plus.',
    responsibilities: [
        'Conduct inspections and quality control checks on incoming materials, components, and finished products in accordance with established standards and procedures.',
        'Collaborate with production teams to ensure adherence to quality specifications and identify areas for improvement.',
        'Perform visual and functional inspections of wind turbine components, including blades, gearbox, and control systems.',
        'Document and report non-conformities, defects, and deviations from quality standards.',
        'Assist in the development and implementation of quality control procedures and protocols.',
        'Conduct audits to verify compliance with quality management systems.',
        'Communicate quality-related issues to relevant stakeholders and participate in problem-solving initiatives.'
    ],
    requirements: [
        'Proven experience in quality control or inspection roles, preferably in a manufacturing or renewable energy environment.',
        'Knowledge of quality control standards, methodologies, and tools.',
        'Attention to detail and the ability to identify and analyze defects or deviations.',
        'Strong communication skills to effectively convey quality-related information.',
        'Familiarity with quality management systems (QMS) is a plus.',
        'Ability to work independently and collaboratively in a team.'
    ],
    benefits: [
        'Competitive salary commensurate with experience and industry standards.',
        'Comprehensive benefits package, including health insurance and retirement plans.',
        'Opportunities for career advancement and professional development.',
        'Contribution to the production of high-quality components for renewable energy projects.',
        'Being part of a team dedicated to environmental sustainability.',
        'Supportive and collaborative work culture.'
    ]
};


const softwareEngineer = {
    title: 'Software Engineer',
    experience: '2-5 years of professional experience in software development.',
    degree: 'Bachelor’s degree in Computer Science, Software Engineering, or a related field. Advanced degrees or relevant certifications are a plus.',
    responsibilities: [
        'Collaborate with cross-functional teams to understand project requirements and deliver high-quality software solutions.',
        'Design, develop, test, and deploy software applications, ensuring adherence to coding standards and best practices.',
        'Participate in code reviews to maintain code quality and mentor junior team members.',
        'Troubleshoot, debug, and resolve software defects and issues.',
        'Stay updated on industry trends and emerging technologies to contribute innovative ideas.',
        'Collaborate with product managers and stakeholders to refine and prioritize features.',
        'Contribute to the continuous improvement of development processes and methodologies.'
    ],
    requirements: [
        'Strong proficiency in programming languages such as Java, Python, or JavaScript.',
        'Experience with web development frameworks (e.g., React, Angular, or Vue.js) and backend frameworks (e.g., Spring, Django, or Node.js).',
        'Knowledge of database systems, both SQL and NoSQL.',
        'Familiarity with version control systems (e.g., Git) and continuous integration/continuous deployment (CI/CD) pipelines.',
        'Excellent problem-solving and analytical skills.',
        'Effective communication skills to collaborate with team members and stakeholders.',
        'Ability to work both independently and as part of a collaborative team.'
    ],
    benefits: [
        'Competitive salary commensurate with experience and industry standards.',
        'Comprehensive benefits package, including health insurance, dental, and retirement plans.',
        'Opportunities for professional development and continued education.',
        'Engaging work environment with a focus on innovation and collaboration.',
        'Contribution to impactful software projects with real-world applications.',
        'Supportive and inclusive team culture.'
    ]
};


const meteorologist = {
    title: 'Meteorologist',
    experience: '2-5 years of experience in meteorology or a related field.',
    degree: 'Bachelor’s degree in Meteorology, Atmospheric Science, or a related discipline. Advanced degrees or relevant certifications are preferred.',
    responsibilities: [
        'Collect, analyze, and interpret weather data from various sources, including satellites, radar, and ground-based observations.',
        'Create and deliver accurate weather forecasts for specific regions or projects.',
        'Monitor and analyze atmospheric conditions to predict severe weather events and provide timely warnings.',
        'Collaborate with cross-functional teams, including engineers and project managers, to assess the impact of weather on operations.',
        'Maintain and operate meteorological instruments and equipment.',
        'Research and stay updated on advancements in meteorological technology and forecasting techniques.',
        'Provide expertise and guidance on climate-related considerations for long-term planning.'
    ],
    requirements: [
        'Proven experience in meteorological data analysis and forecasting.',
        'Strong understanding of atmospheric science and meteorological phenomena.',
        'Proficiency in using meteorological software and tools.',
        'Excellent analytical and problem-solving skills.',
        'Effective communication skills to convey complex weather information to non-experts.',
        'Ability to work independently and collaboratively within a team.',
        'Experience in working with environmental modeling tools is a plus.'
    ],
    benefits: [
        'Competitive salary commensurate with experience and industry standards.',
        'Comprehensive benefits package, including health insurance and retirement plans.',
        'Opportunities for professional development and continuing education.',
        'Engaging work environment with exposure to diverse weather-related challenges.',
        'Contribution to projects that leverage meteorological expertise for improved decision-making.',
        'Supportive and collaborative team culture.'
    ]
};


const aerodynamicsEngineer = {
    title: 'Aerodynamics Engineer',
    experience: '3-7 years of experience in aerodynamics, fluid dynamics, or a related field.',
    degree: 'Bachelor’s or Master’s degree in Aerospace Engineering, Mechanical Engineering, or a relevant discipline. A Ph.D. may be preferred for more advanced positions.',
    responsibilities: [
        'Conduct aerodynamic analyses and simulations to optimize the design and performance of wind turbine components.',
        'Collaborate with cross-functional teams to integrate aerodynamic considerations into the overall design process.',
        'Utilize computational fluid dynamics (CFD) software to model and analyze airflow around wind turbine blades and other components.',
        'Design and conduct wind tunnel tests to validate and refine aerodynamic models.',
        'Evaluate and recommend design modifications to enhance aerodynamic efficiency and minimize turbulence.',
        'Stay updated on industry advancements and emerging technologies in aerodynamics.',
        'Work closely with structural and mechanical engineers to ensure aerodynamic solutions align with overall design goals.'
    ],
    requirements: [
        'Proven experience in aerodynamics engineering with a focus on wind energy projects.',
        'Strong knowledge of fluid dynamics principles and their application to aerodynamic design.',
        'Proficiency in using CFD software and other simulation tools.',
        'Experience with wind tunnel testing and data analysis.',
        'Ability to work with engineering software and CAD tools.',
        'Excellent problem-solving and analytical skills.',
        'Effective communication skills to convey complex aerodynamic concepts to multidisciplinary teams.'
    ],
    benefits: [
        'Competitive salary commensurate with experience and industry standards.',
        'Comprehensive benefits package, including health insurance and retirement plans.',
        'Opportunities for professional development and continued education.',
        'Engaging work environment with exposure to cutting-edge aerodynamics projects.',
        'Contribution to the design and improvement of sustainable wind energy solutions.',
        'Supportive and collaborative team culture.'
    ]
};





// Function to populate job details dynamically
function populateJobDetails(jobDetails) {
    document.getElementById('jobTitle').textContent = jobDetails.title;
    document.getElementById('experiencePlaceholder').textContent = jobDetails.experience;
    
    document.getElementById('degreePlaceholder').textContent = jobDetails.degree;

    // Populate responsibilities, requirements, and benefits

    populateList('responsibilitiesPlaceholder', jobDetails.responsibilities);
    populateList('jobDescriptionsList', jobDetails.responsibilities);
    populateList('requirementsPlaceholder', jobDetails.requirements); // Corrected placeholder ID
    populateList('benefitsPlaceholder', jobDetails.benefits);
}

// Function to populate an unordered list with provided items
function populateList(listId, items) {
    const list = document.getElementById(listId);
    list.innerHTML = ''; // Clear existing items
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });
}

function showJobDetails(title, details, tags) {
    document.getElementById("jobTitle").innerText = title;
    document.getElementById("jobDetailsText").innerText = details;

    const jobTagsContainer = document.querySelector(".jobTagsContainer");
    jobTagsContainer.innerHTML = `Tags: ${tags.join(', ')}`;

    document.getElementById("jobCarousel").style.transform = "translateX(0%)";
    document.getElementById("jobDetails").style.opacity = "1";
}

function openApplicationForm() {
    console.log("Opening application form");
    document.getElementById("applicationForm").style.display = "block";
    document.getElementById("applicationForm").style.opacity = "1";
}


function updateResumePreview() {
    const fileInput = document.getElementById("resume");
    const resumeImage = document.getElementById("resumeImage");

    if (fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function (e) {
            resumeImage.src = e.target.result;
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function closeApplicationForm() {
    document.getElementById("applicationForm").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("applicationForm").style.display = "none";
    }, 500);
}

function updateProgressBar() {
    const formFields = document.querySelectorAll('#applicationForm input, #applicationForm select, #applicationForm textarea');
    const progress = (Array.from(formFields).filter(field => field.value !== '').length / formFields.length) * 100;
    document.getElementById('progress').style.width = progress + '%';
}

function updateSalaryDisplay() {
    const salaryFilter = document.getElementById('salaryFilter');
    const salaryAmount = document.getElementById('salaryAmount');
    salaryAmount.innerText = salaryFilter.value;
}

document.getElementById('salaryFilter').addEventListener('input', updateSalaryDisplay);

 function updateProgressBarOnInteraction() {
    updateProgressBar();
}

// Add event listeners to form elements for interaction tracking
const formFields = document.querySelectorAll('#applicationForm input, #applicationForm select, #applicationForm textarea');
formFields.forEach(field => {
    field.addEventListener('input', updateProgressBarOnInteraction);
    // You may consider other events like 'change' or 'blur' based on your form requirements
});

// Ensure this code is executed after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Bind the submitApplication function to the form's submit event
    document.getElementById('yourFormId').addEventListener('submit', function (event) {
        submitApplication(event);
    });
});

// Ensure this code is executed after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Bind the submitApplication function to the form's submit event
    document.getElementById('yourFormId').addEventListener('submit', function (event) {
        submitApplication(event);
    });
});

function submitApplication(event) {
    
    console.log("Application submitted!");
}

