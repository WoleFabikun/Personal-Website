import Layout from "@/components/Layout";
import Socials from "@/components/Socials";
import Project from "@/components/Project";
import Post from "@/components/Post";
import Skill from "@/components/Skill";
import Footer from "@/components/Footer";

import { DoubleArrowDownIcon } from "@radix-ui/react-icons";

import fs from "fs";
import * as path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Headshot2 from "../public/assets/images/Headshot2.jpeg";

import ButtonLink from "@/components/ButtonLink";

const Home = ({ posts, projects, skill, mdxSource, frontmatter: { title } }) => {

	projects = projects.sort((a, b) => a.frontmatter.title - b.frontmatter.title);
	projects = projects.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

	// limit to 3 projects
	projects = projects.slice(0, 3);

	posts = posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)).filter((post) => post.frontmatter.published);
	// limit to 6 posts
	posts = posts.slice(0, 3);

	const scroll = () => window.scrollTo(0, 750);

	return (
		<Layout>
			<main className="flex flex-col px-6 pt-20 font-sans sm:px-20 md:pt-28 lg:px-32 ">
				{/* Hero */}
				<section>
					<h1 className="pb-3 font-sans font-bold text-slate-100 lg:text-9xl text-7xl">
						<span className="dark:drop-shadow-lg">
							<span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-500 animate-gradient-x">Oluwole Fabikun</span>
						</span>
					</h1>
					<span className="text-3xl font-bold text-left lg:text-7xl md:text-5xl dark:text-blue-500  text-blue-500 ">Software engineer on a mission to create smart solutions, efficient code, and breakthrough innovations.</span>

					<Socials />
				</section>
				
				{/* Divider */}
				<span className="flex flex-col items-center mt-5 dark:text-blue-500 text-blue-500">
					<DoubleArrowDownIcon className="w-10 h-10 cursor-pointer animate-pulse" onClick={scroll} />
				</span>

				{/* About Me */}
				<section className="flex flex-col gap-10 mt-8 mb-8 text-lg leading-8 text-left dark:text-slate-200 text-blue-600">
					<div className="flex flex-col items-center border rounded-lg shadow-md dark:border-slate-900 lg:flex-row bg-[#eeeef3] dark:bg-transparent">
						<Image className="object-cover w-full rounded-t-lg h-96 lg:h-120 xl:h-100 xl:w-200 md:rounded-none md:rounded-l-lg" src={Headshot2} alt="" />
						<div className="flex flex-col justify-between p-4 leading-normal">
							<h1 className="mb-2 text-2xl font-bold tracking-tight ">{title}</h1>
							<MDXRemote {...mdxSource} components={{
								p: ({ children, ...props }) => <p className="mb-3 text-base font-normal dark:text-slate-200 text-blue-600" {...props}>{children}</p>,
								a: ({ children, ...props }) => <a className="dark:text-blue-300 text-blue-900 hover:underline underline-offset-4 " {...props}>{children}</a>,
							}} />
						</div>
					</div>
				</section>

				{/* Projects */}
				<section className="grid w-full h-full grid-flow-row auto-row-max" >
					<Project projects={projects} />
					<ButtonLink route={"/projects"} />
				</section>

				{/* Skills */}
				<section className="grid w-full h-full grid-flow-row mb-5 auto-row-max">
					<Skill skill={skill} />
				</section>

				{/* Blog Posts */}
				<section className="grid w-full h-full grid-flow-row mb-5 auto-row-max">
					<Post posts={posts} />
					<ButtonLink route={"/posts"} />
				</section>

				{/* Footer */}
				<Footer />
			</main>
		</Layout>
	);
};

const getStaticProps = async () => {
	const markdownWithMeta = fs.readFileSync(path.join("pages", "../content/", "about.mdx"), "utf-8");
	const projectFiles = fs.readdirSync(path.join("pages", "../content/projects"));
	const postFiles = fs.readdirSync(path.join("pages", "../content/posts"));
	const skillFiles = fs.readdirSync(path.join("pages", "../content/skills"));

	const projects = projectFiles.map((filename) => {
		const markdownWithMeta = fs.readFileSync(path.join("pages", "../content/projects", filename), "utf-8");
		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			frontmatter,
			slug: filename.split(".")[0],
		};
	});

	const posts = postFiles.map((filename) => {
		const markdownWithMeta = fs.readFileSync(path.join("pages", "../content/posts", filename), "utf-8");
		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			frontmatter,
			slug: filename.split(".")[0],
		};
	});

	const skill = skillFiles.map((filename) => {
		const markdownWithMeta = fs.readFileSync(path.join("pages", "../content/skills", filename), "utf-8");
		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			frontmatter,
			slug: filename.split(".")[0],
		};
	});

	const { data: frontmatter, content } = matter(markdownWithMeta);
	const mdxSource = await serialize(content);

	return {
		props: {
			frontmatter: frontmatter,
			mdxSource: mdxSource,
			projects: projects,
			posts: posts,
			skill: skill,
		},
	};
};

export default Home;
export { getStaticProps };
