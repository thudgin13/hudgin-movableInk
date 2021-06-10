## Movable Ink Front End Challenge

Thank you so much for this opportunity. After clarification I was able to re-do the implementation of the zipcode via form data. The loading of clearning out the HTML and adding new elements as children isn't as smooth as I wanted for the user, but it does accomplish the task. On another note, I divided the api call functions and the render functions into their own files leaving a clear app.js file where the fetch functions and render functions could be imported. I ran out of the time to use the _getDay()_ to render dynamically, so I just did a quick array with just today, tomorrow and the day after tomorrow. Not my favorite, but a quick 5 second solution. 🙃

## Challenge details

Requirements for the challenge:

1. [x] Create a project that consume the **geolocation endpoint**.
1. [x] Use the data from the geolocation endpoint to make a second call to the **forecast endpoint**.
1. [x] Use the data from both endpoints to generate the creative found [here.](/img/creative_mock_up.gif)
1. [x] Your code should be as maintainable and extensible as possible.
1. [x] Please timebox this exercise to 2 hours.

## Place To Improve

1. The pictures need to be properly rendered, and if I had more time I would have been able to complete this.
1. Implementing the logic to be able to correctly render the days of the week in the forecast
1. I would have liked to use the summary or UV index for additional advice about "using sunscreen" or "grabbing an umbrella"
1. I would've liked the loading to have an animation or a cleaner exit from loading into the forecast data.

## Get Started

- Run `npm run start` to start your local dev environment
- Run `npm run pack` to package your code and send to us
