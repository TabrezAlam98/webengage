let url = `https://jsonplaceholder.typicode.com/users`;

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    display(data);
  });

function display(data) {
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");

  data.map((ele) => {
    let users = document.getElementById("main");
    users.innerHTML = "";
    if (ele.id % 2 === 0) {
      let nametag = document.createElement("h3");
      nametag.textContent = `Name : ${ele.name}`;

      let emailtag = document.createElement("h3");
      emailtag.textContent = `Email : ${ele.email}`;

      let username = document.createElement("h3");
      username.textContent = `User name :${ele.username}`;

      let catchbox = document.createElement("div");
      catchbox.setAttribute("id", "catch");

      let catchphrase = document.createElement("h3");
      catchphrase.textContent = `Catch phrase : ${ele.company.catchPhrase.substring(15)}`;

      box1.append(nametag, emailtag, username, catchphrase, catchbox);
    } else {
      let oddbox = document.createElement("div");
      oddbox.setAttribute("id", "oddbox");
      let odd = document.createElement("h3");
      odd.textContent = `I'm Odd - The Zipcode and Geo of cityname ${ele.address.city} is: ${ele.address.zipcode} and ${ele.address.geo.lat}, ${ele.address.geo.lng}`;
      box2.append(odd, oddbox);
    }

    users.append(box1, box2);
  });
}
