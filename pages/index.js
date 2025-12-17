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
import { useState } from "react";

const Home = ({ posts, projects, skill, mdxSource, frontmatter: { title } }) => {

	const [showContactForm, setShowContactForm] = useState(false);
	const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
	const [formStatus, setFormStatus] = useState('');

	projects = projects.sort((a, b) => a.frontmatter.title - b.frontmatter.title);
	projects = projects.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

	// limit to 3 projects
	projects = projects.slice(0, 3);

	posts = posts.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)).filter((post) => post.frontmatter.published);
	// limit to 6 posts
	posts = posts.slice(0, 3);

	const scroll = () => window.scrollTo(0, 680);

	const scrollToContact = () => {
		setShowContactForm(true);
		setTimeout(() => {
			const contactSection = document.getElementById('contact');
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
			}
		}, 100);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setFormStatus('sending');

		try {
			// Using Web3Forms - simple and free!
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
					name: formData.name,
					email: formData.email,
					phone: formData.phone || 'Not provided',
					message: formData.message,
					subject: `New Project Inquiry from ${formData.name}`,
				}),
			});

			if (response.ok) {
				setFormStatus('success');
				setFormData({ name: '', email: '', phone: '', message: '' });
				setTimeout(() => {
					setShowContactForm(false);
					setFormStatus('');
				}, 3000);
			} else {
				setFormStatus('error');
			}
		} catch (error) {
			setFormStatus('error');
		}
	};

	return (
		<Layout>
			<main className="flex flex-col px-6 pt-20 font-sans sm:px-20 md:pt-15 lg:px-32 ">
				{/* Hero */}
				<section>
					<h1 className="pb-3 font-sans font-bold text-slate-100 text-center lg:text-6xl text-7xl">
						<span className="dark:drop-shadow-lg">
							<span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-500 animate-gradient-x">Lu Fabikun</span>
						</span>
					</h1>
					<span className="text-3xl font-bold text-center lg:text-4xl md:text-4xl dark:text-blue-500  text-blue-500  block">Software developer on a mission to create smart solutions, efficient code, and breakthrough innovations.</span>

					<Socials />
				</section>
				
				{/* Divider */}
				<span className="flex flex-col items-center mt-6 dark:text-blue-500 text-blue-500">
					<DoubleArrowDownIcon className="w-10 h-10 mb-5 cursor-pointer animate-pulse" onClick={scroll} />
				</span>

				{/* Contact Box */}
								<section id="contact" className="flex flex-col gap-6 mt-8 mb-12 text-center">
					<div className="border rounded-lg shadow-lg dark:border-slate-900 bg-gradient-to-br from-purple-400 to-blue-500 p-8">
						<h2 className="mb-4 text-3xl font-bold text-white">Available for Projects</h2>
						<p className="mb-6 text-lg text-white/90">
							I'm currently open to freelance opportunities and collaborations. Let's discuss how we can work together to bring your ideas to life.
						</p>
						
						{!showContactForm ? (
							<button 
								onClick={scrollToContact}
								className="inline-block px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors duration-200 shadow-md hover:shadow-xl"
							>
								Get in Touch
							</button>
						) : (
							<div className="animate-fadeIn">
								<form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6 text-left">
									<div className="mb-4">
										<label htmlFor="name" className="block mb-2 text-sm font-semibold text-white">
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
											placeholder="Your name"
										/>
									</div>
									
									<div className="mb-4">
										<label htmlFor="email" className="block mb-2 text-sm font-semibold text-white">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											required
											className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
											placeholder="your.email@example.com"
										/>
									</div>
									
									<div className="mb-4">
										<label htmlFor="phone" className="block mb-2 text-sm font-semibold text-white">
											Phone Number <span className="text-white/70 font-normal">(Optional)</span>
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={handleInputChange}
											className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent"
											placeholder="(123) 456-7890"
										/>
									</div>
									
									<div className="mb-6">
										<label htmlFor="message" className="block mb-2 text-sm font-semibold text-white">
											Message
										</label>
										<textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											required
											rows="5"
											className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
											placeholder="Tell me about your project..."
										/>
									</div>
									
									<div className="flex gap-4 justify-center">
										<button
											type="submit"
											disabled={formStatus === 'sending'}
											className="px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-slate-100 transition-colors duration-200 shadow-md hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
										>
											{formStatus === 'sending' ? 'Sending...' : 'Send Message'}
										</button>
										<button
											type="button"
											onClick={() => {
												setShowContactForm(false);
												setFormStatus('');
											}}
											className="px-8 py-3 text-lg font-semibold text-white bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
										>
											Cancel
										</button>
									</div>
									
									{formStatus === 'success' && (
										<p className="mt-4 text-center text-white font-semibold">
											✓ Message sent successfully! I'll get back to you soon.
										</p>
									)}
									{formStatus === 'error' && (
										<p className="mt-4 text-center text-red-200 font-semibold">
											✗ Failed to send message. Please try again or email me directly at lufabikun@gmail.com
										</p>
									)}
								</form>
							</div>
						)}
					</div>
				</section>

				{/* About Me */}
				<section className="flex flex-col gap-10 mt-8 mb-8 text-lg leading-8 text-left dark:text-slate-200 text-blue-600">
					<div className="flex flex-col items-center border rounded-lg shadow-md dark:border-slate-900 lg:flex-row bg-[#eeeef3] dark:bg-transparent">
						<Image className="object-contain w-full rounded-t-lg h-96 lg:h-120 xl:h-100 xl:w-200 md:rounded-none md:rounded-l-lg" src={Headshot2} alt="" />
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
				<section className="grid w-full h-full grid-flow-row auto-row-max " >
					<Project projects={projects} />
					<ButtonLink route={"/projects"} />
				</section>

				{/* Skills */}
				{/* <section className="grid w-full h-full grid-flow-row mb-5 auto-row-max">
					<Skill skill={skill} />
				</section> */}

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
