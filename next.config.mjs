/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/conference",
        destination: "https://conference.futurepathways.ng",
        permanent: true,
      },
      {
        source: "/delegate",
        destination: "https://conference.futurepathways.ng/delegate",
        permanent: true,
      },
      {
        source: "/volunteer",
        destination: "https://conference.futurepathways.ng/volunteer",
        permanent: true,
      },
      {
        source: "/speakers",
        destination: "https://conference.futurepathways.ng/speakers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
