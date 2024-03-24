function displayDestination (response){
  new Typewriter('#travel', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor:"",
});

}


function generateDestination (event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "bb0741b0aa475cabbe3bbdftd8oa9bfa";
    let context = "You are a romantic Travel Destination expert and love to make a perfect well designed and with some emojis a programm list for travel destination. You mission is to generate.You want a person to start the day with breakfast at 8 am in the morning, You want to present the most important things to see, visit, do and eat and drink in the place ${instructionsInput.value} from 8 am to 23 11pm, a full day in a very careful, disciplined programmed manner, it is for you very important that the prices are generally at a medium level, which will not exhaust a person financially in basic HTML and separate each line with a <br /> show only the Programm and nothing else. Make sure to follow the user instructions. Include  title <div> A Day in ${instructionsInput.value} </div>, that centered and it is bold it.";
    let prompt = `User instructions: Generate a Travel Destination about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`; 

    
    let travelElement = document.querySelector("#travel");
    travelElement.classList.remove("hidden");
    travelElement.innerHTML = `Your day in ${instructionsInput.value} is generating <span class = "generating">. . .⏳</span>`;

    
    axios.get(apiURL).then(displayDestination);


}


let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateDestination);