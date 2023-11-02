// WelcomeText for h1
let h1 = document.querySelector('.welcomeText');
let text = "Salesforce Certified Admin | Frontend Developer 🧑‍💻";
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
		author: 'Paul',
	},

	{
		img: 'images/poo.jpeg',
		par:
			'"Karma is a real stand-up guy, and a most dedicated and passion-filled, aspiring web developer. His ambition and self-less heart for the work keeps me inspired and allows me to remember the joy and excitement of being young. I am grateful for friendship, and look forward to the what Karma creates."',
		author: 'Poo',
	},
	{
		img: 'images/josh.jpeg',
		par:
			'Karma is a great person to work with. He is dedicated to learning and is always coding.',
		author: 'Josh',
	},
	{
		img: 'images/roy.jpeg',
		par:
			'Karma is serious about learning and understanding the fundamentals of the tools he is using, this makes him a developer who does not take things on face value as he strives to improve his knowledge and understanding.',
		author: 'Roy',
	},
];

let interval = 4000;
let increment = 1;

const loop = () => {
	// Looping through an array of object
	testimoniousText.forEach((ele) => {
		let appear = setTimeout(() => {
			// Emptying out the test
			$('.testimonial').empty();
			// Inserting image, paragraph and author name dynamically
			let card = `<div class="testimonialText">
                      <img src="${ele.img}" class="rounded-circle"/>
                      <p class="lead display-5 pt-4">${ele.par}</p>
                      <cite><p>${ele.author}</p> </cite>
                  </div>`;
			// Appending card in empty container
			$('.testimonial').append(card).fadeIn();

			clearTimeout(appear);
		}, interval * increment);
		increment = increment + 1;
	});
};
loop();
setInterval(loop, 3000);

// Selects every <a> element whose href attribute value begins with "https"
$("a[href^='#']").click(function (e) {
	e.preventDefault();
	let position = $($(this).attr('href')).offset().top;

	$('body,html').animate(
		{
			scrollTop: position - 50,
		},
		800
	);
});

// !Animation while scrolling to each section
// Function which adds the 'animated' class to any '.animatable' in view
let doAnimations = function () {
	// Calc current offset and get all animatables
	let offset = $(window).scrollTop() + $(window).height(),
		$animatables = $('.animatable');

	// Unbind scroll handler if we have no animatables
	if ($animatables.length == 0) {
		$(window).off('scroll', doAnimations);
	}

	// Check all animatables and animate them if necessary
	$animatables.each(function (i) {
		let $animatable = $(this);
		if ($animatable.offset().top + $animatable.height() - 20 < offset) {
			$animatable.removeClass('animatable').addClass('animated');
		}
	});
};

// Hook doAnimations on scroll, and trigger a scroll
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');
