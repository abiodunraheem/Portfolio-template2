// const body = document.querySelector('body');

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
    projectHeader: 'Profesional Art Printing Data',
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
    projectHeader: 'Profesional Art Printing Data',
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
    projectHeader: 'Profesional Art Printing Data',
    projectDesc: 'A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industrys standard',
    projectHtml: 'html',
    projectbootstrap: 'bootstrap',
    projectRuby: 'ruby',
    projectButton: 'See Project',
  },
];

const projectsSection = document.querySelector('.myProjects');
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

window.addEventListener('load', () => {
  loopdiv();
});
const popupDetails = [
  {
    
  }
]

const mobileMenu = document.getElementById('mobileMenu');
const openBtn = document.getElementById('barsBtn');
const closeBtn = document.getElementById('closeBtn');
const link = document.querySelectorAll('.link');
const openProject = document.querySelectorAll('.btn-1');
const closeProject = document.getElementById('closeProject');
function openModal() {
  mobileMenu.style.display = 'block';
}
function closeModal() {
  mobileMenu.style.display = 'none';
}
// function seeProject() {
//   openProject.style.display = 'block';
// }
// function closeButton() {
//   openProject.style.display = 'none';
// }
openBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
link.forEach((link) => {
  link.addEventListener('click', closeModal);
});
// closeProject.addEventListener('click', closeButton);
openProject.forEach((openProject) => {
  openProject.addEventListener('click', seeProject);
});
