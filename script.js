const complimentBtn = document.getElementById("complimentBtn");
const complimentOutput = document.getElementById("complimentOutput");

const compliments = [
  "You have good taste in how you approach things.",
  "You're thoughtful in ways most people miss.",
  "You bring a kind of calm that's easy to be around.",
  "You notice the details — that matters.",
  "You're steady. That's rare.",
  "You think before you speak, and it shows.",
  "You're the kind of person people quietly rely on.",
  "Your work has clarity — and that's not easy to pull off.",
  "You make decisions with care. That earns trust.",
  "You handle things. Even when they're not easy.",
  "You're consistent, which is way more valuable than perfect.",
  "You show up — and most people don't even get that far.",
  "You don't need to be loud to be respected.",
  "You're good at giving things structure. That's underrated.",
  "You bring order to chaos without making it a big deal."
];


let count = 0;

complimentBtn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * compliments.length);
  const compliment = compliments[index];

  complimentOutput.innerHTML = `
    <p>${compliment}</p>
    <img src="https://picsum.photos/600/300?${count++}" alt="Random inspirational image" class="compliment-image" />
  `;
});
