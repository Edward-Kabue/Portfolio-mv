const hamburger = document.querySelector('.bars');
const navLinks = document.querySelector('.nav-items');
const links = document.querySelectorAll('.nav-items li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});

links.forEach((l) => {
  l.addEventListener('click', () => {
    hamburger.classList.remove('toggle');
    navLinks.classList.remove('open');
  });
});

/* eslint-disable no-undef */


const projectsContainer = document.querySelector(".projects-container");
const popupProject = document.querySelector(".popup-project");
const overlayDiv = document.querySelector(".overlay");



const projects = [
  {
    id: 1,
    title: ' Tonic',
    sub: 'CANOPY',
    picture: './images/SnapshootPortfolio-desk.svg',
    modalPicture: './images/modal.png',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionw:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  ",
    technologies: ['html', 'css', 'javascript'],
    type: ['Back end  ', '2015'],
    liveLink: 'https://google.com',
    codeLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    sub: 'FACEBOOK',
    picture: './images/second.svg',
    modalPicture: './images/modal.png',
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionw:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when   ",
    type: ['Back end  ', '2015'],
    technologies: ['html', 'css', 'javascript'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Facebook 360',
    sub: 'FACEBOOK',
    picture: './images/Snapshoot-Portfolio.svg',
    modalPicture: './images/modal.png',
    description:
      'A single page application that helps managing books by saving them in the LocalStorage.',
    descriptionw:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when  ",
    technologies: ['html', 'css', 'javascript'],
    type: ['Back end  ', '2015'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    sub: 'Uber',
    picture: './images/second.svg',
    modalPicture: './images/modal.png',
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    descriptionw:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when   ",
    technologies: ['html', 'css', 'javascript'],
    type: ['Back end  ', '2015'],
    liveLink: '#',
    codeLink: '#',
  },
];

// Render functions
/* eslint-disable */
function renderTechnologies(techArr) {
  let technologiesHtml = "<ul class='sub'>";
  techArr.forEach((tech) => {
    technologiesHtml += `<li class='technology'>${tech}</li>`;
  }),
    (technologiesHtml += "</ul>");
  return technologiesHtml;
}

function renderOther(otherArr) {
  let otherHtml = "<ul >";
  otherArr.forEach((t) => {
    otherHtml += `<li >${t}</li>`;
  }),
    (otherHtml += "</ul>");
  return otherHtml;
}

function renderTechnologiesForModal(techArr) {
  let technologiesHtml = "<ul >";
  techArr.forEach((tech) => {
    technologiesHtml += `<li class='technology'>${tech}</li>`;
  }),
    (technologiesHtml += "</ul>");
  return technologiesHtml;
}

function renderOtherModal(otherArr) {
  let otherHtml = "<ul >";
  otherArr.forEach((t) => {
    otherHtml += `<li class= 'it'>${t}</li>`;
  }),
    (otherHtml += "</ul>");
  return otherHtml;
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
         <div class="sub-r">${p.sub}
        ${renderOther(p.type)}
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

projectsContainer.innerHTML = projects
  .map((p) => renderSingleProject(p))
  .join("");

const projectDetailsBtns = document.querySelectorAll(".project-details-btn");

projectDetailsBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const projectId = Number(event.target.getAttribute("data-project-id"));
    const projectToShow = projects.find((p) => p.id === projectId);

    popupProject.querySelector(".popup-title").textContent =
      projectToShow.title;
    popupProject.querySelector(".sub").textContent = projectToShow.sub;
    popupProject.querySelector(".sub-e").innerHTML = renderOtherModal(
      projectToShow.type
    );
    popupProject.querySelector(".popup-image").src = projectToShow.modalPicture;

    popupProject.querySelectorAll(
      ".popup-image"
    ).alt = `Image showing a preview of the project named ${projectToShow.title}`;
    popupProject.querySelector(".article-e").textContent =
      projectToShow.descriptionw;
    popupProject.querySelector(".built-with-e").innerHTML =
      renderTechnologiesForModal(projectToShow.technologies);
    popupProject.querySelector(".btnw").href = projectToShow.liveLink;
    popupProject.querySelector(".source").href = projectToShow.codeLink;

    overlayDiv.style.display = "block";
    popupProject.style.visibility = "visible";
    popupProject.style.display = "block";
    popupProject.style.opacity = 1;

    // Popup close
    const popupClose = document.querySelector(".popup-close");
    popupClose.addEventListener("click", () => {
      popupProject.style.opacity = 0;
      popupProject.style.visibility = "hidden";
      overlayDiv.style.display = "none";
    });
  });
});

const contactForm = document.forms["contact-form"];
const emailInput = contactForm.email;
const nameInput = contactForm.name;
const textarea = contactForm.message;
const messagePanel = document.querySelector(".error");
const submitButton = document.querySelector(".button-submit");
const LowerCase = (str) => /[a-z]/.test(str) && !/[A-Z]/.test(str);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  if (!LowerCase(email)) {
    messagePanel.innerHTML =
      "<p><b>Error:</b> Your email address should be lowercase.</p>";
    messagePanel.style.visibility = "visible";
    submitButton.style.marginTop = "30px";
  } else {
    messagePanel.style.visibility = "hidden";
    contactForm.submit();
  }
});

const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const retrieve = (key) => JSON.parse(localStorage.getItem(key));
const saved = retrieve("formData");
if (saved !== null) {
  nameInput.value = saved.name;
  emailInput.value = saved.email;
  textarea.value = saved.message;
}

const persist = document.querySelectorAll("input, textarea");
persist.forEach((per) => {
  per.addEventListener("input", () => {
    submitButton.style.marginTop = "-15px";
    messagePanel.style.visibility = "hidden";
    const objectToSave = {
      name: nameInput.value,
      email: emailInput.value,
      message: textarea.value,
    };
    save("formData", objectToSave);
  });
});
