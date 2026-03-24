import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";

export async function initParticles() {
	await loadSlim(tsParticles);
	await loadParticlesLinksInteraction(tsParticles);

	await tsParticles.load({
		id: "tsparticles",
		options: {
			background: {
				color: {
					value: "#0c0a09",
				},
				image: "url('/assets/images/-background.jpg')",
				position: "50% 50%",
				repeat: "no-repeat",
				size: "cover",
				opacity: 1,
			},
			fpsLimit: 60,
			particles: {
				number: {
					value: 150,
					density: {
						enable: true,
						width: 1920,
						height: 1080,
					},
				},
				color: {
					value: "#ffffff",
				},
				shape: {
					type: "circle",
				},
				opacity: {
					value: { min: 0.2, max: 0.9 },
					animation: {
						enable: true,
						speed: 0.8,
						sync: false,
					},
				},
				size: {
					value: { min: 0.5, max: 3 },
					animation: {
						enable: true,
						speed: 1.5,
						sync: false,
					},
				},
				links: {
					enable: false,
				},
				move: {
					enable: true,
					speed: 0.2,
					direction: "none",
					random: true,
					straight: false,
					outModes: {
						default: "out",
					},
				},
			},
			detectRetina: true,
		},
	});
}

// Initialize on first load
if (typeof window !== "undefined") {
	// Initial load
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initParticles);
	} else {
		initParticles();
	}

	// Reinitialize on SPA navigation
	document.addEventListener("astro:page-load", () => {
		// Check if particles container exists
		const particlesContainer = document.getElementById("tsparticles");
		if (particlesContainer) {
			initParticles();
		}
	});
}
