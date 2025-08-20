const sidebar = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const rightContainerDesktop = document.getElementById('right-container-desktop');
const bottomContainerMobile = document.getElementById('bottom-container-mobile');

const menuItems = document.querySelectorAll('.sidebar .menu-item');

const sections = {
  profile: `
    <div>
      <h3 class="s3">Profile Overview</h3><hr />
      <p>
        I am R Karthik, a creative and goal-oriented undergraduate with strong communication,
        problem-solving, leadership skills, and passion for technology.
      </p>
    </div>
  `,
  summary: `
    <div>
      <h3 class="s3">Professional Summary</h3><hr />
      <p>
        I am a creative and goal-oriented undergraduate with strong communication,
        problem-solving, and leadership skills. Passionate about exploring new technology-related fields.
      </p>
    </div>
  `,
  education: `
    <div>
      <h3 class="s3">Education</h3><hr />
      <div class="education-block">
        <p><b>B.Tech in CSE</b> | MITS, Kadiri Road, Andhra Pradesh</p>
        <p><b>Session:</b> 2023-2027 | <b>Score:</b> 9.4 CGPA</p>
      </div>
      <div class="education-block">
        <p><b>Intermediate (BIEAP)</b> | MFC Govt Jr College, Kuppam</p>
        <p><b>Session:</b> 2021-2023 | <b>Percentage:</b> 93.2%</p>
      </div>
      <div class="education-block">
        <p><b>SSC</b> | Z P High School, Chinthamakulapalle</p>
        <p><b>Session:</b> 2020-2021 | <b>Percentage:</b> 97.9%</p>
      </div>
    </div>
  `,
  projects: `
    <div>
      <h3 class="s3">Training & Projects</h3><hr />
      <ul>
        <li><b>Solar Fan | Science</b> (Duration: 2 days, Team: 2)<br />Model that works with electricity and solar power.</li>
        <li><b>JCB Model | Innovation</b> (Duration: 6 days, Team: 5)<br />Developed a remote-controlled JCB model.</li>
      </ul>
    </div>
  `,
  achievements: `
    <div>
      <h3 class="s3">Academic Achievements</h3><hr />
      <ul>
        <li>1st position in Aptitude test (IRM Jr College, 2022).</li>
        <li>Gold badge in 10 days of Statistics (HackerRank).</li>
        <li>5-star badge in C & Python (HackerRank).</li>
      </ul>
    </div>
  `,
  certifications: `
    <div>
      <h3 class="s3">Certifications</h3><hr />
      <ul>
        <li>Naukari Campus Young Trucks Contest (Rank: 85208/5.1L).</li>
        <li>Workshop on DevOps & Cloud (2 days).</li>
        <li>NPTEL Effective Writing Course (67%).</li>
      </ul>
    </div>
  `,
  extra: `
    <div>
      <h3 class="s3">Extra Curricular & Co-Curricular Achievements</h3><hr />
      <ul>
        <li>Member of AI Community (MITS College).</li>
        <li>Organized technical & sports events (2023).</li>
      </ul>
    </div>
  `,
  fullresume: `
    <div>
      <div>
        <h4>Profile Overview</h4>
        <p>I am R Karthik, a creative and goal-oriented undergraduate with strong communication, problem-solving, leadership skills, and passion for technology.</p>
      </div>
      <div>
        <h4>Professional Summary</h4>
        <p>I am a creative and goal-oriented undergraduate with strong communication, problem-solving, and leadership skills. Passionate about exploring new technology-related fields.</p>
      </div>
      <div>
        <h4>Education</h4>
        <ul>
          <li>B.Tech in CSE | MITS, Kadiri Road, Andhra Pradesh (2023-2027) Score: 9.4 CGPA</li>
          <li>Intermediate (BIEAP) | MFC Govt Jr College, Kuppam (2021-2023) Percentage: 93.2%</li>
          <li>SSC | Z P High School, Chinthamakulapalle (2020-2021) Percentage: 97.9%</li>
        </ul>
      </div>
      <div>
        <h4>Training & Projects</h4>
        <ul>
          <li>Solar Fan | Science (Duration: 2 days, Team: 2) Model that works with electricity and solar power.</li>
          <li>JCB Model | Innovation (Duration: 6 days, Team: 5) Developed a remote-controlled JCB model.</li>
        </ul>
      </div>
      <div>
        <h4>Academic Achievements</h4>
        <ul>
          <li>1st position in Aptitude test (IRM Jr College, 2022).</li>
          <li>Gold badge in 10 days of Statistics (HackerRank).</li>
          <li>5-star badge in C & Python (HackerRank).</li>
        </ul>
      </div>
      <div>
        <h4>Certifications</h4>
        <ul>
          <li>Naukari Campus Young Trucks Contest (Rank: 85208/5.1L).</li>
          <li>Workshop on DevOps & Cloud (2 days).</li>
          <li>NPTEL Effective Writing Course (67%).</li>
        </ul>
      </div>
      <div>
        <h4>Extra Curricular & Co-Curricular Achievements</h4>
        <ul>
          <li>Member of AI Community (MITS College).</li>
          <li>Organized technical & sports events (2023).</li>
        </ul>
      </div>
    </div>
  `
};

let sidebarOpen = false;

function setContent(section) {
  const isMobile = window.innerWidth <= 900;

  menuItems.forEach((item) => item.classList.remove('active'));

  const selectedMenuItem = document.querySelector(`.sidebar .menu-item[data-section="${section}"]`);
  if (selectedMenuItem) selectedMenuItem.classList.add('active');

  if (isMobile) {
    bottomContainerMobile.innerHTML = sections[section] || '';
    bottomContainerMobile.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeSidebar();
  } else {
    rightContainerDesktop.innerHTML = sections[section] || '';
  }
}

function openSidebar() {
  sidebar.classList.add('expanded');
  document.body.classList.add('sidebar-expanded');
  sidebarOpen = true;
}

function closeSidebar() {
  sidebar.classList.remove('expanded');
  document.body.classList.remove('sidebar-expanded');
  sidebarOpen = false;
}

hamburger.addEventListener('click', () => {
  if (sidebarOpen) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    setContent(item.dataset.section);
  });
});

document.body.addEventListener('click', (event) => {
  if (
    sidebarOpen &&
    window.innerWidth <= 900 &&
    !sidebar.contains(event.target) &&
    !hamburger.contains(event.target)
  ) {
    closeSidebar();
  }
});

window.addEventListener('resize', () => {
  const isMobile = window.innerWidth <= 900;
  if (isMobile) {
    rightContainerDesktop.innerHTML = '';
    if (!bottomContainerMobile.innerHTML) {
      setContent('profile');
    }
  } else {
    bottomContainerMobile.innerHTML = '';
    if (!rightContainerDesktop.innerHTML) {
      setContent('profile');
    }
    closeSidebar();
  }
});

setContent('profile');
