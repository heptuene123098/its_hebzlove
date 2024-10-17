/*=======================typing animation=========================*/
var typed = new Typed(".typing", {
    strings:["", "Data Analyst", "Web designer", "web developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/*=======================aside=========================*/
const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;
for(let i=0; i<totalNavList; i++)
{
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function()
    {
       removeBackSection();
        for(let j=0; j<totalNavList; j++)
        {
            if(navList[j].querySelector("a").classList.contains("active"))
            {
                addBackSection(j);
               // allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
        showSection(this);
        if(window.innerWidth < 1200)
        {
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
   // console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>
{
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++)
    {
        allSection[i].classList.toggle("open");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const makeVisible = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };

    const observer = new IntersectionObserver(makeVisible, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Manually add specified repositories
    const repos = [
        {
            name: "Sales Dashboard",
            description: "An interactive sales dashboard to visualize sales data.",
            url: "https://heptuene123098.github.io/Sales-dashboard/"
        },
        {
            name: "Rivers State Election",
            description: "A data visualization project on the Rivers State election.",
            url: "https://heptuene123098.github.io/Rivers-State-Election/"
        },
        {
            name: "Flood Prediction",
            description: "A project predicting flood risks using machine learning.",
            url: "https://heptuene123098.github.io/Flood-Prediction/"
        }
    ];

    displayRepos(repos);
});

function displayRepos(repos) {
    const projectsSection = document.getElementById('projects');
    const projectsList = document.createElement('div');
    projectsList.className = 'projects-list';

    repos.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.className = 'repo-item';

        const repoName = document.createElement('h3');
        repoName.textContent = repo.name;

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description;

        const repoLink = document.createElement('a');
        repoLink.href = repo.url;
        repoLink.target = '_blank';
        repoLink.textContent = 'View Project';

        repoItem.appendChild(repoName);
        repoItem.appendChild(repoDescription);
        repoItem.appendChild(repoLink);
        projectsList.appendChild(repoItem);
    });

    projectsSection.appendChild(projectsList);
}



$(document).ready(function() {
    // Click event for filter items
    $('.filter-item').click(function() {
        // Remove 'active-filter' class from all filter items
        $('.filter-item').removeClass('active-filter');
        // Add 'active-filter' class to the clicked filter item
        $(this).addClass('active-filter');

        // Get the filter value from the clicked item
        var filterValue = $(this).data('filter');

        if (filterValue === 'all') {
            // Show all post boxes
            $('.post-box').show();
        } else {
            // Hide all post boxes and then show only those that match the filter
            $('.post-box').hide();
            $('.post-box.' + filterValue).show();
        }
    });
});






/*Function to fetch articles from local JSON file
async function fetchArticles() {
    try {
        // Fetch the local JSON file
        const response = await fetch('articles.json');

        // Check if the fetch was successful
        if (!response.ok) {
            throw new Error('Failed to fetch articles');
        }

        // Parse the JSON response
        const articles = await response.json();

        // Display the articles
        displayArticles(articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

function displayArticles(articles) {
    const articlesSectorsContainer = document.getElementById('articles-sectors');

    // Iterate through each sector in the JSON
    for (const sector in articles) {
        if (articles.hasOwnProperty(sector)) {
            // Create a section for each sector
            const sectorSection = document.createElement('div');
            sectorSection.className = 'col-12 sector-section';
            sectorSection.innerHTML = `
                <h3>${sector}</h3>
                <div class="row" id="${sector.toLowerCase()}-articles">
                    <!-- Articles for ${sector} will be inserted here -->
                </div>
            `;
            articlesSectorsContainer.appendChild(sectorSection);

            // Get the container for articles in this sector
            const sectorArticlesContainer = document.getElementById(`${sector.toLowerCase()}-articles`);

            // Display articles for this sector
            articles[sector].forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.className = 'col-md-4';
                articleElement.innerHTML = `
                    <div class="service-item padd-15">
                        <div class="service-item-inner">
                            <h4>${article.title}</h4>
                            <p>${article.excerpt}</p>
                            <a href="${article.url}" class="btn btn-secondary">Read More</a>
                        </div>
                    </div>
                `;
                sectorArticlesContainer.appendChild(articleElement);
            });
        }
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', fetchArticles);*/

