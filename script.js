const hamburger = document.querySelector(".bars");
const navLinks = document.querySelector(".nav-items");
const links = document.querySelectorAll(".nav-items li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("toggle");
});

links.forEach((l) => {
  l.addEventListener("click", () => {
    hamburger.classList.remove("toggle");
    navLinks.classList.remove("open");
  });
});

/* eslint-disable no-undef */
const projectsContainer = document.querySelector(".projects-container");
const popupProject = document.querySelector(".popup-project");
const overlayDiv = document.querySelector(".overlay");

const projects = [
  {
    id: 1,
    title: " Tonic",
    sub: "CANOPY",
    picture: "./images/SnapshootPortfolio-desk.svg",
    modalPicture: "./images/modal.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    technologies: ["html", "css", "javascript"],
    types: ["Back End Dev", "2015"],
    liveLink: "https://google.com",
    codeLink: "https://github.com",
  },
  {
    id: 2,
    title: "Multi-Post Stories",
    sub: "FACEBOOK",
    picture: "./images/second.svg",
    modalPicture: "./images/modal.png",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    types: ["Back End Dev", "2015"],
    technologies: ["html", "css", "javascript"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    id: 3,
    title: "Facebook 360",
    sub: "FACEBOOK",
    picture: "./images/Snapshoot-Portfolio.svg",
    modalPicture: "./images/modal.png",
    description:
      "A single page application that helps managing books by saving them in the LocalStorage.",
    technologies: ["html", "css", "javascript"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    id: 4,
    title: "Uber Navigation",
    sub: "Uber",
    picture: "./images/second.svg",
    modalPicture: "./images/modal.png",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    technologies: ["html", "css", "javascript"],
    liveLink: "#",
    codeLink: "#",
  },
];

// Render functions

function renderTechnologies(techArr) {
  let technologiesHtml = "<ul class='sub'>";
  techArr.forEach((tech, index) => {
    technologiesHtml += `<li class='technology'>${tech}</li>`;
  });
  technologiesHtml += "</ul>";
  return technologiesHtml;
}

function renderTechnologiesForModal(techArr) {
  let technologiesHtml = "<ul class='sub'>";
  techArr.forEach((tech, index) => {
    technologiesHtml += `<li class='technology'>${tech}</li>`;
  });
  technologiesHtml += "</ul>";
  return technologiesHtml;
}

function renderSingleProject(p) {
  const projectHtml = `<div class='card'>
  <div class="one">
       <div class='screenshot-container'>
       <img src='${p.picture}' alt='snap '
            class='img'>
       </div>
</div>
 <section class="two">
    <h2 class="title">${p.title}</h2>
         <div class="sub">${p.sub}
         </div>
       
        <div class='article'>
            <p>${p.description}</p>
        </div>
        <section class="built-with">
        ${renderTechnologies(p.technologies)}
         </section>
         <section class="prompt">
        <button class='project-details-btn' type='button' data-project-id='${
          p.id
        }'>See Project</button>
        </section>
    </div>
</div>
    `;
  return projectHtml;
}

// Render projects dynamically in the HTML document
projectsContainer.innerHTML = projects
  .map((p) => renderSingleProject(p))
  .join("");

// Click event listener to projects buttons;
const projectDetailsBtns = document.querySelectorAll(".project-details-btn");

projectDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const projectId = Number(event.target.getAttribute("data-project-id"));
    const projectToShow = projects.find((p) => p.id === projectId);

    popupProject.querySelector(".popup-title").textContent =
      projectToShow.title;
    popupProject.querySelector(".sub").textContent = projectToShow.sub;
    popupProject.querySelector(".popup-image").src = projectToShow.modalPicture;
    popupProject.querySelectorAll(
      ".popup-image"
    ).alt = `Image showing a preview of the project named ${projectToShow.title}`;
    popupProject.querySelector(".article-e").textContent =
      projectToShow.description;
    popupProject.querySelector(".built-with-e").innerHTML =
      renderTechnologiesForModal(projectToShow.technologies);
    popupProject.querySelector(".btnw").href = projectToShow.liveLink;
    popupProject.querySelector(".source").href = projectToShow.codeLink;

    overlayDiv.classList.add("active");
    popupProject.style.visibility = "visible";
    popupProject.style.display = "block";
    popupProject.style.opacity = 1;

    
    const popupClose = document.querySelector(".popup-close");
    popupClose.addEventListener("click", () => {
      popupProject.style.opacity = 0;
      popupProject.style.visibility = "hidden";
      overlayDiv.style.display = "none";
    });
  });
});
