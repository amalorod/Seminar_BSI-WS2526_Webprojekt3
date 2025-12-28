// Ein Objekt mit dynamischer Ausgabe
const User = {
    name: "Alic",
    alter: 22, 
    Interessen: ["Lesen", "Schwimmen", "Fußball"],
};

function displayUser() {
    
    const userContainer = document.getElementById("userDisp");
    const userDiv = document.createElement("div");
    

    
    userDiv.innerHTML = `
        <h3>${"Inhaber:"}</h3><br>
        <p><strong>Name: ${User.name}</strong></p>
        <p><strong>Alter: ${User.alter}</strong></p>
        <p><strong>Interessen: ${User.Interessen.join(", ")}</strong> </p> <br> <br>
    `;

   
    userContainer.appendChild(userDiv);
}








// Array of objects mit dynamischer Ausgabe
const visitors = [
  {
    firstName: "Thomas",
    lastName: "Müller",
    email: "thomas.m@example.com",
    phone: "015163362881",
    profession: "Softwareentwickler",
    bestQuote: "Man sollte die Kaffeemaschine nur außerhalb der Arbeitszeiten reinigen",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    contactInfo: function () {
      return `Name: ${this.fullName()}, Email: ${this.email}, Phone: ${
        this.phone
      }`;
    },
   
  },
  {
    firstName: "Valentina",
    lastName: "Meinert",
    email: "valentina.m@example.com",
    bestQuote: "Ich bin nicht faul, ich bin im Energiesparmodus.",
    phone: "015195593220",
    profession: "UX-Designerin",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    contactInfo: function () {
      return `Name: ${this.fullName()}, Email: ${this.email}, Phone: ${
        this.phone
      }`;
    },
  
  },
  {
    firstName: "Ronald",
    lastName: "Dachdecker",
    email: "ronald.d@example.com",
    phone: "015194458394",
    bestQuote: "Morgens schmeckt der Kaffee am besten",
    profession: "IT-Sicherheitsexperte",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    contactInfo: function () {
      return `Name: ${this.fullName()}, Email: ${this.email}, Phone: ${
        this.phone
      }`;
    },
   
  },
];

// Function to display contact data
function displayVisitors() {
  const visitorsDiv = document.getElementById("visitListDisp");
    
    const ulElement = document.createElement("ul");
    ulElement.classList.add("user-list");
    
    
  visitors.forEach((visitor) => {
    const liElement = document.createElement("li");
      
      
      liElement.innerHTML = `
            
            <strong>Name:</strong> ${visitor.fullName()}<br>
            <strong>Email:</strong> ${visitor.email}<br> 
            <strong>Beruf:</strong> ${visitor.profession}<br>
            <strong>Zitat:</strong> <em>${visitor.bestQuote}</em> <br><br>
        `;

        // Füge das Listenelement zur <ul>-Liste hinzu
       visitorsDiv.appendChild(ulElement);
        ulElement.appendChild(liElement);
     
    });

}



    document.addEventListener("DOMContentLoaded", displayUser);
    document.addEventListener("DOMContentLoaded", displayVisitors);