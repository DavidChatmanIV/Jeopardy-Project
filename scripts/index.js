// Do not change the import statement
import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// Do not change this code

const placeholderQuestions = [
  {
    category: "Nature",
    question: "The human heart has how many chambers?",
    answer: "4",
  },
  // Function to log questions and answers asynchronously
  async function logQuestions(question) {
    for (const questionObj of question) {
      console.log(`Category: ${questionObj.catClicks}`);
      console.log(`Question: ${questionObj.question}`);
      console.log(`Answer: ${questionObj.answer}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  },
];

// Define the DOM elements globally
const natureElements = document.getElementById("nature");
const animalsElements = document.getElementsByClassName("animals");
const modal = document.getElementById("myModal");
const closeBtn = document.querySelector(".close");
const dynamicH1Container = document.getElementById("dynamicH1Container");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to update the URL parameter
function updateCatClickCounter() {
  let url = new URL(window.location);
  let natureClicks = url.searchParams.get("natureClicks");
  natureClicks = catClicks ? parseInt(natureClicks) + 1 : 1;
  url.searchParams.set("natureClicks", natureClicks);
  window.history.pushState({}, "", url);

  // Create and append the new H1 element
  const newH1 = document.createElement("h1");
  newH1.textContent = `nature clicked: ${natureClicks}`;
  dynamicH1Container.innerHTML = ""; // Clear previous H1
  dynamicH1Container.appendChild(newH1);

  // Event listener for when the DOM content is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Add click event listener to each nature element
    natureElements.addEventListener("click", () => {
      updateNatureClickCounter();
      showAlertWithQuestion();
    });

    // Add click event listener to the close button
    closeBtn.addEventListener("click", closeModal);

    // Add click event listener to the window to close the modal when clicking outside
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        closeModal();
      }
    });

    // Display the initial cat click counter if it exists in the URL
    let url = new URL(window.location);
    let natureClicks = url.searchParams.get("natureClicks");
    if (natureClicks) {
      const initialH1 = document.createElement("h1");
      initialH1.textContent = `nature clicked: ${natureClicks}`;
      dynamicH1Container.appendChild(initialH1);
    }
  });
  // Function to show an alert with a question
  function showAlertWithQuestion() {
    // Get a random question from the placeholderQuestions array
    const randomQuestion =
      placeholderQuestions[
        Math.floor(Math.random() * placeholderQuestions.length)
      ];
    alert(`Question: ${randomQuestion.question}`);
  }
}
