import React from "react";

function Avatar(jar, children) {
  return (
    <div>
      <img
        className="avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwrk6ku_OXp3XT7hvqDrU2EW6z6lZvUIE-RXiOfQtueuEIzujaAk3CvYr7TJV0Pyc_A4&usqp=CAU"
        alt="Lin Lanying"
        width={100}
        height={100}
      />
      <h2>{jar.title}</h2>
    
    </div>
  );
}

export default Avatar