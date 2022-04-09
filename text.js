const body = document.querySelector('body');

const projectList = [
  {
    id: 'proj1',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj1',
    projectHeader: 'Data Dashboard Healthcare',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj1',
    projectHeader: 'Website Portfolio',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj1',
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj1',
    projectHeader: 'Data Dashboard Healthcare',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
  {
    id: 'proj1',
    projectHeader: 'Website Portfolio',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
];

const projectsSection = document.querySelector('.myProjects');
const wrapper = document.querySelector('.wrapper');
function loopdiv() {
  projectsSection.innerHTML = '';
  for (let i = 0; i < projectList.length; i += 1) {
    projectsSection.innerHTML = `${projectsSection.innerHTML}  
  <div class="project">
           <div class="projectHeader">
             <h3>${projectList[i].projectHeader}</h3>
           </div>
           <div class="projectBody">
             <p>
             ${projectList[i].projectDesc}
             </p>
             <ul>
               <li class="projectHTML">
                 <ul>
                  <li>${projectList[i].projectHtml}</li>
                 </ul>
               </li>
               <li class="projectBootstrap">
                 <ul>
                   <li>${projectList[i].projectbootstrap}</li>
                 </ul>
               </li>
               <li class="projectRuby">
                 <ul>
                   <li>${projectList[i].projectRuby}</li>
                 </ul>
               </li>
             </ul>
           </div>
           <div class="projectButton openProject">
             <button id="proj1" class="testbtnn" onClick="loopdiv()">${projectList[i].projectButton}</button>
           </div>
      </div>`;
  }
}
loopdiv();

const popupDetails = [
  {
    popheader: 'Multi-Post Stories',
    html: 'html',
    bootstrap: 'bootstrap',
    ruby: 'Ruby on rails',
    img: './images/popup-window.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took galley of type and scrambled',
  },
];
const myPopup = document.querySelector('.popup-window');

function popUp() {
  myPopup.style.display = 'block';
  myPopup.innerHTML = `
      <span class="close-btn" id="closeProject">&times;</span>
      <div class="popup-heading">
        <h2 class="mobile">${popupDetails[0].popheader}</h2>
        <h2 class="desktop">Keeping track of hundreds  of components website</h2>
      </div>
      <ul class="popup-menu">
        <li class=""><a href="#">${popupDetails[0].html}</a></li>
        <li class=""><a href="#">${popupDetails[0].bootstrap}</a></li>
        <li class=""><a href="#">${popupDetails[0].ruby}</a></li>
      </ul>
      <div class="popup-work">
        <div class="image-1">
          <img src="${popupDetails[0].img}" alt="promotion image" width="310" height="200px">
        </div>
        <div class="side-bar">
          <p>
          ${popupDetails[0].description}
          </p>
          <div class="popup-btn">
            <button name="button" type="submit" class="btn-1"> <a href="https://github.com/abiodunraheem">See Live </a><img src="images/go-icon.png" alt="live-icon" class="live-image"></button>
            <button name="button" type="submit" class="btn-1">See Source <a href="#"><img src="images/git-white.png" alt="github-icon" class="live-image"></a></button>
          </div>
        </div>
      </div>`;
  body.appendChild(myPopup);
}
const seeProject = document.querySelector('#btn');
seeProject.addEventListener('click', () => {
  popUp();
  wrapper.classList.add('active');
});

document.addEventListener('click', (click) => {
  if (click.target.id === 'proj1') {
    popUp();
    wrapper.classList.add('active');
  }
});

document.addEventListener('click', (click) => {
  if (click.target.id === 'closeProject') {
    myPopup.style.display = 'none';
    wrapper.classList.remove('active');
  }
});
const mobileMenu = document.getElementById('mobileMenu');
const openBtn = document.getElementById('barsBtn');

const openBtn2 = document.getElementById('btn-2');
const openPopwindow = document.getElementById('pop-window');
const closeBtn = document.getElementById('closeBtn');
const link = document.querySelectorAll('.link');
function openModal() {
  mobileMenu.style.display = 'block';
}

openBtn2.addEventListener('click', () => {
  openPopwindow.classList.add('show');
});
function closeModal() {
  mobileMenu.style.display = 'none';
}
openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
link.forEach((link) => {
  link.addEventListener('click', closeModal);
});

const form = document.getElementById('form');

function formValidate() {
  const error = document.getElementById('error');
  const email = document.getElementById('email');

  if (email.value !== email.value.toLowerCase()) {
    error.innerHTML = `Your email is not in lowercase. Consider using ${email.value.toLowerCase()} instead`;
    return false;
  }
  return true;
}

form.addEventListener('submit', (submitForm) => {
  submitForm.preventDefault();
});

const userName = document.querySelector('.fullname');
const textContent = document.querySelector('.text');
const email = document.getElementById('email');

const formElements = document.querySelectorAll('input, textarea');
const localData = JSON.parse(localStorage.getItem('storage'));
if (localData !== null) {
  formValidate();
  userName.value = localData.name;
  email.value = localData.email;
  textContent.value = localData.message;
}

formElements.forEach((item) => {
  item.addEventListener('input', () => {
    const objData = {
      name: userName.value,
      email: email.value,
      message: textContent.value,
    };
    localStorage.setItem('storage', JSON.stringify(objData));
  });
});
