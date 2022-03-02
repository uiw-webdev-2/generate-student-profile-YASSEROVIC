const studentProfile = {
    firstName: "Yaser",
    lastName: "Mohammed",
    email: "student@UIW.edu",
    pidm: "12345",
    school:"University of the Incarnate Word (UIW)",
    gradeLevel:"Junior",
    avatarImg:"https://www.w3schools.com/w3images/avatar2.png",
    ImageAlt: "avatar image",
    imgeSize: "150px",
  };
  
  const studentContent = (profileInfo) => {
    const newPage = document.createElement("article");
    newPage.innerHTML = `
      <h1>${profileInfo.firstName} ${profileInfo.lastName} </h1>
      <ul>
        <li>School: ${profileInfo.school}</li>
        <li>PIDM: ${profileInfo.pidm}</li>
        <li>email: ${profileInfo.email}</li>
        <li>Grade: ${profileInfo.gradeLevel}</li>
      </ul>
    `;
    return newPage;
  };
  const addImg = (imgData) => {
    const imgElmnt = document.createElement("img");
    imgElmnt.setAttribute("src", imgData.avatarImg);
    imgElmnt.setAttribute("alt", imgData.ImageAlt);
    imgElmnt.setAttribute("height", imgData.imgeSize);
    return imgElmnt;
    };

  const main = document.querySelector("main");
  main.append(studentContent(studentProfile));
  main.prepend(addImg(studentProfile));