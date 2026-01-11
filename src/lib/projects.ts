import { getCollection } from "astro:content";

export async function getRecentProjects(limit = 4) {
	const projects = await getCollection("projects", ({ data }) => {
		return data.draft !== true;
	});

	return projects.slice(0, limit);
}
