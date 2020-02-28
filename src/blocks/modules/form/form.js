(function() {
	// Elements UI
	const form = document.querySelector(".form");
	const validateBtn = form.querySelector(".form__button");
	const firstName = form.querySelector(".first-name");
	const lastName = form.querySelector(".last-name");
	const email = form.querySelector(".email");
	const password = form.querySelector(".password");
	const confirmPassword = form.querySelector(".confirm-password");
	const fields = form.querySelectorAll(".field");

	// Events
	email.addEventListener("input", function(event) {
		if (email.validity.typeMismatch) {
			email.setCustomValidity("I expect an e-mail!");
		} else {
			email.setCustomValidity("");
		}
	});

	firstName.addEventListener(
		"input",
		function(event) {
			if (!firstName.validity.valid) {
				console.log(" не валидный ");
				firstName.classList.add("error");
				firstName.parentNode.classList.remove("valid");
			} else {
				console.log(" валидный ");
				firstName.classList.remove("error");
				firstName.parentNode.classList.add("valid");
			}
		},
		false
	);

	lastName.addEventListener(
		"input",
		function(event) {
			if (!lastName.validity.valid) {
				console.log(" не валидный ");
				lastName.classList.add("error");
				lastName.parentNode.classList.remove("valid");
			} else {
				console.log(" валидный ");
				lastName.classList.remove("error");
				lastName.parentNode.classList.add("valid");
			}
		},
		false
	);

	email.addEventListener(
		"input",
		function(event) {
			if (!email.validity.valid) {
				console.log(" не валидный ");
				email.classList.add("error");
				email.parentNode.classList.remove("valid");
			} else {
				console.log(" валидный ");
				email.classList.remove("error");
				email.parentNode.classList.add("valid");
			}
		},
		false
	);
	form.addEventListener(
		"input",
		function(event) {
			if (!form.validity.valid) {
				validateBtn.classList.add("error");
			} else {
				form.classList.remove("error");
			}
		},
		false
	);

	const checkPasswordMatch = function() {
		if (password.value !== confirmPassword.value) {
			password.setCustomValidity("Password does not match!");
		} else {
			password.setCustomValidity("");
		}
	};

	form.addEventListener("submit", function(event) {
		console.log(" wgssdhf+ ");
		event.preventDefault();
		checkPasswordMatch();

		form.reset();
	});
})();
