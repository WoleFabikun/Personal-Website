/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	output: 'export',
	images: {
		domains: ["res.craft.do"],
		unoptimized: true,
	},
	webpack: (config) => {
		config.resolve.fallback = { fs: false, module: false, path: false };
		return config;
	},
};

export default nextConfig;
