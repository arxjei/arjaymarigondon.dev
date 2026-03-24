export function initProgressBar() {
	let progress = null;

	document.addEventListener("astro:before-preparation", () => {
		progress = document.createElement("div");
		progress.id = "progressbar";
		document.body.appendChild(progress);

		setTimeout(() => {
			if (progress) progress.style.width = "30%";
		}, 50);

		setTimeout(() => {
			if (progress) progress.style.width = "90%";
		}, 300);
	});

	document.addEventListener("astro:page-load", () => {
		if (progress) {
			progress.style.width = "100%";
			setTimeout(() => {
				if (progress) {
					progress.remove();
					progress = null;
				}
			}, 300);
		}
	});
}

if (typeof window !== "undefined") {
	initProgressBar();
}
