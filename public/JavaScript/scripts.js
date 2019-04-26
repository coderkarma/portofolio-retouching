// WelcomeText for h1
let h1 = document.querySelector('.welcomeText');
let text = 'I am Karma | Full Stack Developer';
let speed = 70;

let i = 0;
const typeWriter = () => {
	if (i < text.length) {
		h1.innerHTML += text.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
};
typeWriter();

// Testimonial section
let testimoniousText = [
	{
		img: 'images/paul.jpeg',
		par:
			'Karma is one of the most dedicated and focused developers I have met. He is always ready to learn something new and is great to pair program with.',
		author: 'Paul'
	},

	{
		img: 'images/poo.jpeg',
		par:
			'"Karma is a real stand-up guy, and a most dedicated and passion-filled, aspiring web developer. His ambition and self-less heart for the work keeps me inspired and allows me to remember the joy and excitement of being young. I am grateful for friendship, and look forward to the what Karma creates."',
		author: 'Poo'
	},
	{
		img: 'images/josh.jpeg',
		par: 'Codes Everyday',
		author: 'Josh'
	}
];

let interval = 4000;
let increment = 1;

let loop = () => {
	// Looping through an array of object
	testimoniousText.forEach(ele => {
		let appear = setTimeout(() => {
			console.log('trigger loop');
			// Emptying out the test
			$('.testimonial').empty();
			// Inserting image, paragraph and author name dynamically
			let card = `<div class="testimonialText">
                      <img src="${ele.img}" class="rounded-circle"/>
                      <p class="lead display-5 pt-4">${ele.par}</p>
                      <cite><p>${ele.author}</p> </cite>
                  </div>`;
			// Appending card in empty container
			$('.testimonial').append(card);

			clearTimeout(appear);
		}, interval * increment);
		increment = increment + 1;
	});
};
loop();
setInterval(loop, 3000);

// Selects every <a> element whose href attribute value begins with "https"
$("a[href^='#']").click(function(e) {
	e.preventDefault();
	//  Grabbing the attribute href offset value top. offSet is the number of pixel from the top
	let position = $($(this).attr('href')).offset().top;

	console.log('position', position);
	$('body,html').animate({
		// Position gives the position from the top in px
		scrollTop: position - 50
	});
});

// Weather update
let weatherInfo = $('.weatherInfo');
$(document).ready(e => {
	let lat;
	let lon;
	let url;
	let key = '303f8f961c655981bb7f245ce0486261';
	navigator.geolocation.getCurrentPosition(position => {
		lat = position.coords.latitude;
		lon = position.coords.longitude;

		url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${key}
    `;
		$.ajax({
			method: 'GET',
			url: url,
			success: response => {
				console.log(response.name, 'response');
				printWeather(response);
			},
			error: err => {
				console.log('err', err);
			}
		});
	});
});

// Print the weather
function printWeather(weather) {
	const temp = weather.main.temp;
	const name = weather.name;

	weatherInfo.append(
		`<h6 class="pt-2"> The Current Temperature is <span class="temp">${temp} </span> Fehrenheit in <span class="temp"> ${name}</span> </h6>`
	);
}
