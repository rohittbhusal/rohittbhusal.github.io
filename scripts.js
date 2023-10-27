
//IIFE - anonymous for footer
(() => {
    document.querySelector("footer").innerHTML = 
      `<div>
        <p style="text-align:left;padding-left: 25px;">&copy; 2023 Rohit Bhusal</p>
        <ul class="nav-links">
          <li><a href="https://www.linkedin.com/in/rohittbhusal" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a></li>
          <li><a href="https://www.facebook.com/rohittbhusal" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
          <li><a href="https://www.instagram.com/rohittbhusal" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        </ul>
      </div>`
  })();



//IIFE - anonymous for liscerts

(() => {
  //Assigning the certs info in elements of an objects inside an array
  let liscerts = [
    {
      lisrc: "https://media.licdn.com/dms/image/D562DAQEWj7USnKRglA/profile-treasury-image-shrink_800_800/0/1696952415027?e=1699023600&v=beta&t=037jN3F0UEdc1Assx310tgRpQsdQDTXi8xXICBficp4",
      altxt: "IEEE IoT Webinar",
      title: "Internet of Things Systems: From Sensor and Embedded Comp . .",
      issueDate: "IEEE Nepal Aug.05, 2020",
      cred: "No Credential",
      link: "#",
      type: "Participation "
    },
    {
      lisrc: "https://media.licdn.com/dms/image/C5622AQG6fFc5TyToKw/feedshare-shrink_2048_1536/0/1644809216303?e=1700092800&v=beta&t=nT2x2YU07HWNShqQfDTUtcxULgXcABAC4Q_lNlZMKJs",
      altxt: "MiT iQuHack Participation",
      title: "IQuHack 2022 - MIT's Quantum Computing Hackathon",
      issueDate: "MIT 2022",
      cred: "No Credential",
      link: "#",
      type: "Participation "
    },
    {
      lisrc: "https://udemy-certificate.s3.amazonaws.com/image/UC-15a4aa63-3fef-4391-a287-33f8caf2e624.jpg?v=1695837802000",
      altxt: "Game Development Course",
      title: "The Ultimate Guide to Game Development with Unity (Official)",
      issueDate: "GameDevHQ Sept.27, 2023",
      cred: "Show Credential ",
      link: "https://www.udemy.com/certificate/UC-15a4aa63-3fef-4391-a287-33f8caf2e624/",
      type: "Course"
    }
  ]

  //fetching certs information from objects inside an array and feeding them to the website
  liscerts.forEach(objects => {
    liscertFormat = `
          <div class="card">
              <img src = "${objects.lisrc}" alt="${objects.altxt}">
              <h3>"${objects.title}"</h3>
              <p>${objects.issueDate}</p>
              <a href="${objects.link}" class="cta-button" target="_blank">"${objects.cred}"<i class="fa fa-external-link" aria-hidden="true"></i></a>
              <p style="font-weight: bold; font-size: 15px; margin-bottom: 0px;">"${objects.type}"</p>
          </div>
  `;
    document.getElementById("liscert").innerHTML += liscertFormat;
  });
})();
