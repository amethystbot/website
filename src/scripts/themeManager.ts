export function manageTheme() {
	if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
		document.documentElement.classList.add("dark");
		document.documentElement.style.overflow = "hidden";
		document.body.clientWidth;
		document.documentElement.setAttribute(
			"data-color-scheme",
			"dark"
		);
		document.documentElement.style.overflow = "";
	} else {
		document.documentElement.classList.remove("dark");
		document.documentElement.style.overflow = "hidden";
		document.body.clientWidth;
		document.documentElement.setAttribute(
			"data-color-scheme",
			"light"
		);
		document.documentElement.style.overflow = "";
	}

	const themeToggleDarkIcon: HTMLElement = document.getElementById("theme-toggle-dark-icon") as HTMLElement;
	const themeToggleLightIcon: HTMLElement = document.getElementById("theme-toggle-light-icon") as HTMLElement;

	if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
		themeToggleLightIcon.classList.remove("hidden");
	} else {
		themeToggleDarkIcon.classList.remove("hidden");
	}

	const themeToggleBtn: HTMLElement = document.getElementById("theme-toggle") as HTMLElement;

	themeToggleBtn.addEventListener("click", function () {
		themeToggleDarkIcon.classList.toggle("hidden");
		themeToggleLightIcon.classList.toggle("hidden");

		if (localStorage.getItem("color-theme")) {
			if (localStorage.getItem("color-theme") === "light") {
				document.documentElement.classList.add("dark");
				localStorage.setItem("color-theme", "dark");
				document.documentElement.style.overflow = "hidden";
				document.body.clientWidth;
				document.documentElement.setAttribute(
					"data-color-scheme",
					"dark"
				);
				document.documentElement.style.overflow = "";
			} else {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("color-theme", "light");
				document.documentElement.style.overflow = "hidden";
				document.body.clientWidth;
				document.documentElement.setAttribute(
					"data-color-scheme",
					"light"
				);
				document.documentElement.style.overflow = "";
			}
		} else {
			if (document.documentElement.classList.contains("dark")) {
				document.documentElement.classList.remove("dark");
				localStorage.setItem("color-theme", "light");
				document.documentElement.style.overflow = "hidden";
				document.body.clientWidth;
				document.documentElement.setAttribute(
					"data-color-scheme",
					"light"
				);
				document.documentElement.style.overflow = "";
			} else {
				document.documentElement.classList.add("dark");
				localStorage.setItem("color-theme", "dark");
				document.documentElement.style.overflow = "hidden";
				document.body.clientWidth;
				document.documentElement.setAttribute(
					"data-color-scheme",
					"dark"
				);
				document.documentElement.style.overflow = "";
			}
		}
	});
}
