let userData = [];

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
        e.preventDefault();

        // personal details
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        const personalDetails = {firstName, lastName, email, mobile};
        userData.push(personalDetails);

        // education details
        const school = document.getElementById('school').value;
        const course = document.getElementById('course').value;
        const grade = document.getElementById('grade').value;

        const educationDetails = {school, course, grade};
        userData.push(educationDetails);

        // skills details
        const skill1 = document.getElementById('skill1').value;
        const skill2 = document.getElementById('skill2').value;
        const skill3 = document.getElementById('skill3').value;

        const techStack = {skill1, skill2, skill3};
        userData.push(techStack);

        const main = document.createElement('main');
        main.id = 'resume';
        main.className = 'main-box';

        const innerDiv = `
                <div class="box1" id="personal-details">
                <div class="user-card">
                        <p>${userData[0].firstName} ${userData[0].lastName}</p>
                        <p>${userData[0].email}</p>
                        <p>${userData[0].mobile}</p>
                </div>
                <div class="skills">
                        <b>SKILLS</b>
                        <p>${userData[2].skill1}</p>
                        <p>${userData[2].skill2}</p>
                        <p>${userData[2].skill3}</p>
                </div>
                </div>
                <div class="box2" id="skills">
                        <b>Work Experience</b>
                        <div>Frontend developer</div>
                        <div>Graphic Designer</div>
                        <div>Cloud specialist</div>
                </div>
                <div class="box3" id="education">
                        <b>Education</b>
                        <div>${userData[1].school}</div>
                        <div>${userData[1].course}</div>
                        <div>${userData[1].grade}</div>
                </div>
                </div>`;

        main.innerHTML = innerDiv;

        const mainBefore = document.querySelector('.main-content');

        const parentElem = mainBefore.parentNode;

        parentElem.replaceChild(main, mainBefore);

        const downloadBtn = document.querySelector('.download');

        downloadBtn.classList.remove('hidden');
})