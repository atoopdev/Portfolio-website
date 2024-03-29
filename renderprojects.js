const projectData = [
    {
        id: 14,
        title: "Travel Journal",
        description: "This Travel Journal project pulls in a data file of `trips` objects, converts them to an array of objects, and then maps each object to a TripCard() component, which output trip relevant data (title, image, google maps link, and short description) in formatted HTML. The entire project was then styled with CSS.",
        img:"images/my-travel-journal.jpg",
        link: "projects/scrimba/travel-journal/index.html",
        blogLink: "https://dev.to/atoopdev/coding-up-a-react-travel-journal-3l3h",
        isFeatured: true,
        visible: true,
        keywords: "CSS, JavaScript, React", 
    },
    {
        id: 13,
        title: "Movie Watchlist",
        description: "This app allows a user to search for movies based on title using the OMDB API. The OMDB API returns a list of the top ten movie matches. Users can then add/remove movies from a watchlist that is saved in localStorage.",
        img:"images/movie-watchlist.jpg",
        link: "projects/scrimba/movie-watchlist/index.html",
        blogLink: null,
        isFeatured: true,
        visible: true,
        keywords: "CSS, JavaScript, API's", 
    },
    {
        id: 12,
        title: "Color Scheme Generator",
        description: "The app takes a seed hexadecimal color and color palette selection via a form and then requests a color palette from The Color API. The Color API returns a data object which is then used to populate the provide color palette.",
        img: "images/color-scheme.jpg",
        link: "projects/scrimba/color-scheme-generator/colorschemegen.html",
        blogLink: null,
        isFeatured: true,
        visible: true,
        keywords: "CSS, JavaScript, API's", 
    }
    ,
    {
        id: 11,
        title: "War",
        description: "This app allows a user to search for movies based on title usinMy first foray into API's. This app uses the Deck of Cards API to run a simulation of the card game War. Utilized .fetch() and .json().g the OMDB API. The OMDB API returns a list of the top ten movie matches. Users can then add/remove movies from a watchlist that is saved in localStorage.",
        img:"images/war2.jpg",
        link: "projects/scrimba/War/index.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "JavaScript, API's", 
    }
    ,
    {
        id: 10,
        title: "Role Playing Game",
        description: "My most complex JavaScript app to date.Simple dice based role playing game featuring multiple monsters to defeat. Utilized classes, Object. assign(), constructor, external resource files, setTimeout(), arrow functions, .map(), and .join().",
        img: "images/rpg.jpg",
        link: "projects/scrimba/rpg/index.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "CSS, JavaScript", 
    }
    ,
    {
        id: 9,
        title: "BBQ Website",
        description: "Responsive website featuring HTML form styling and JavaScript for submission confirmation.",
        img:"images/bbq-website.jpg",
        link: "projects/scrimba/bbq/bbq.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "CSS, JavaScript",
    }
    ,
    {
        id: 8,
        title: "Image Carousel",
        description: "Here is a skratch coded image carosel. The goal of this project was to interate forward and back through an array of images, showing only a single desired image at time.",
        img:"images/imgcarousel.jpg",
        link: "projects/scrimba/javascript-challenges/carousel.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "CSS, JavaScript", 
    }
    ,
    {
        id: 7,
        title: "Search Bar",
        description: "This project searches through an unordered list and then hides elements that do not match the search string one by one. This Javascript project used similar code as my simple Hide/Reveal modal.",
        img:"images/searchbar.jpg",
        link: "projects/scrimba/javascript-challenges/searchbar.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "CSS, JavaScript", 
    }
    ,
    {
        id: 6,
        title: "My Emojis",
        description: "This is an emoji display app. This app allows the user to add an emoji of their choice to the beginning or end of the displayed emoji list via an input field. Emojis may also be removed from the beginning or end of a list.",
        img:"images/emojis.jpg",
        link: "projects/scrimba/my-emojis/index.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "JavaScript", 
    }
    ,
    {
        id: 5,
        title: "Blackjack",
        description: "Here is a simple text-based Blackjack game. The goal was to create a functioning simulation game with the ability to start a game, and add new cards. I chose to add a simple reset as well as it improves repeat gameplay. CSS and design styling of my own invention. This Javascript project was incrementally more complex in its use of arrays, conditional logic, functions, and use of Math to return random numbers.",
        img:"images/blackjack-screenshot.jpg",
        link: "projects/scrimba/blackjack/index.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "CSS, JavaScript", 
    }
    ,
    {
        id: 4,
        title: "Passenger Counter",
        description: "For this project the goal was to create a website where a person could log attending visitors as they arrived. The Increment button works as a simple click logger while the Save button adds the previous People entered: value to a string for display below. CSS and design styling of my own invention. This is my first foray into Javascript with Scrimba.",
        img:"images/passenger-counter.jpg",
        link: "projects/scrimba/passenger-counter/index.html",
        blogLink: null,
        isFeatured: false,
        visible: true, 
        keywords: "CSS, JavaScript",
    }
    ,
    {
        id: 3,
        title: "Three Column Preview Card Component",
        description: "This is my solution for the Frontend Mentor Three Column Preview Card Component challenge. For this project participants were instructed to build out a three column card component with active state link buttons to match provided designed images - desktop and mobile. This is my third Frontend Mentor challange.",
        img:"images/3-col-preview-card-small.jpg",
        link: "projects/frontendmentor/3-column-preview-card-component/index.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "CSS", 
    }
    ,
    {
        id: 2,
        title: "Stats Preview Card Component",
        description: "This is my solution for the Frontend Mentor Stats Preview Card Component challenge. For this project participants were instructed to build out a simple card component to match provided designed images - desktop and mobile. This is my second Frontend Mentor challange.",
        img:"images/stats_preview_card_desktop_preview_small.jpg",
        link: "projects/frontendmentor/stats-preview-card-component/index.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords: "CSS",
    }
    ,
    {
        id: 1,
        title: "Order Summary Component",
        description: "This is my solution for the Frontend Mentor Order Summary Component challenge. For this project participants were instructed to build out an order summary card to match provided designed images, including a couple hover states. This is my first Frontend Mentor challange and I really enjoyed it.",
        img:"images/order-summary.png",
        link: "projects/frontendmentor/order-summary-component/index.html",
        blogLink: null,
        isFeatured: false,
        visible: true,
        keywords:"CSS", 
    }
]

const allProjectsContainer = document.getElementById("all-projects-container")

function renderAllProjects(){
    console.log("In render all projects")
    let allprojectHTML = ""
    projectData.map((project)=>{
        if(project.visible===true){
            allprojectHTML+=AllProjectCardHTML(project)
        }
    })
    console.log(allprojectHTML)
    allProjectsContainer.innerHTML = `<h2 class="project-page-category">Projects</h2>
    <div class="projects-list">
    
    ${allprojectHTML}
    `
}

function AllProjectCardHTML(obj){
    console.log("In all project html")
    return `<!-- start item -->
    <section class ="project-page-item">
      <a href=${obj.link}><img class="project-img" src=${obj.img} alt=${obj.title}></a>

      <h3>${obj.title}</h3>

      <p>${obj.description}</p>
      <p class="project-keywords">Keywords: ${obj.keywords}</p>
        
      <!--
      <p>Read more about my experience <a href="https://dev.to/atoopdev/coding-up-a-react-travel-journal-3l3h">on my blog</a>.</p>
      -->
      
       

      <a class="btn" href=${obj.link} target="_blank">View project</a>
      </section>
      <!-- end -->


    
    `
}

renderAllProjects()