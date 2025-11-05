import Image from "next/image";

export default function Home() {
  const features = [
    {
      icon: "★",
      title: "Top-end Curation",
      desc: "Carefully selected properties that meet our high standards of quality.",
    },
    {
      icon: "⚙️",
      title: "Personalized Insight",
      desc: "Expert guidance tailored to your unique needs and preferences.",
    },
    {
      icon: "💼",
      title: "Transaction Moving",
      desc: "Streamlined process from viewing to closing with dedicated support.",
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Browse Curated Homes",
      desc: "Explore verified properties that match your lifestyle and budget.",
    },
    {
      num: "2",
      title: "Get Expert Advice",
      desc: "Connect with agents who understand your needs and simplify your buying journey.",
    },
    {
      num: "3",
      title: "Build a Tour",
      desc: "Visit multiple properties in one trip — we handle all coordination.",
    },
    {
      num: "4",
      title: "Offer & Close",
      desc: "Negotiate and close smoothly — we handle paperwork for you.",
    },
  ];

  const categories = ["House", "Villa", "Apartment"];

  const properties = [
    {
      name: "Piney Hills",
      price: "$218,000",
      beds: 4,
      baths: 2,
      size: "2,120 sqft",
    },
    {
      name: "River Oak",
      price: "$469,000",
      beds: 3,
      baths: 2,
      size: "2,480 sqft",
    },
    {
      name: "Maple Glen",
      price: "$318,000",
      beds: 3,
      baths: 2,
      size: "2,280 sqft",
    },
    {
      name: "Forest Hill",
      price: "$325,000",
      beds: 4,
      baths: 2,
      size: "2,300 sqft",
    },
    {
      name: "Cedar Park",
      price: "$285,000",
      beds: 3,
      baths: 2,
      size: "1,950 sqft",
    },
    {
      name: "Willow Creek",
      price: "$425,000",
      beds: 5,
      baths: 3,
      size: "2,850 sqft",
    },
  ];

  const agents = [
    {
      name: "Michael Chen",
      role: "Senior Real Estate Agent",
      sold: "24 Properties Sold",
    },
    {
      name: "David Martinez",
      role: "Property Specialist",
      sold: "18 Properties Sold",
    },
    {
      name: "James Wilson",
      role: "Investment Advisor",
      sold: "32 Properties Sold",
    },
    {
      name: "Robert Thompson",
      role: "Luxury Home Expert",
      sold: "25 Properties Sold",
    },
  ];

  const footerLinks = {
    "Need Help": ["Contact Us", "FAQ", "Support"],
    Company: ["About Us", "Careers", "Blog"],
    "Quick Links": ["Buy", "Rent", "Mortgage"],
    Follow: ["Facebook", "Twitter", "LinkedIn"],
  };

  return (
    <div className="font-sans text-gray-800">
      <section className="text-center p-[64px,80px] bg-white">
        <h2 className="text-[24px] font-semibold">Smart Tools</h2>
        <h2 className="text-[24px] font-semibold">Real Experts, Easy Moves</h2>
        <p className="text-gray-600 mt-2">
          Your journey to finding the perfect home starts here
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 px-8 max-w-5xl mx-auto">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl hover:shadow-md transition"
            >
              <div className="text-2xl text-orange-500 mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Get Started
        </button>
      </section>

      <section className="bg-gray-50 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Buying Doesn’t Have to Be Overwhelming
        </h2>
        <p className="text-gray-600 mb-10">
          Our streamlined process makes finding your dream home simple and
          stress-free
        </p>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {steps.map((step) => (
            <div key={step.num} className="p-6 bg-white rounded-xl border">
              <div className="text-orange-500 text-3xl font-bold">
                {step.num}
              </div>
              <h4 className="mt-4 font-semibold">{step.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Explore Properties
        </h2>

        <div className="flex justify-center space-x-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-lg ${
                cat === "House"
                  ? "bg-orange-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((home, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="h-48 bg-gray-200" />
              <div className="p-5">
                <h4 className="font-semibold text-lg">{home.name}</h4>
                <p className="text-orange-500 font-medium mt-1">{home.price}</p>
                <p className="text-gray-600 text-sm mt-1">
                  🛏 {home.beds} Beds • 🛁 {home.baths} Baths • 📐 {home.size}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
            Load More Listings
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Meet the People Behind the Process
        </h2>
        <p className="text-gray-600 mb-10">
          Our experienced team is dedicated to helping you find your perfect
          home
        </p>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl p-5 hover:shadow-md transition"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4" />
              <h4 className="font-semibold">{agent.name}</h4>
              <p className="text-sm text-gray-600">{agent.role}</p>
              <p className="text-orange-500 text-sm mt-2">{agent.sold}</p>
            </div>
          ))}
        </div>

        <button className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Meet the Team
        </button>
      </section>

      <section className="bg-slate-900 text-center text-white py-16">
        <h3 className="text-lg font-medium mb-2">The Only Market Update</h3>
        <h2 className="text-2xl font-semibold mb-4">
          You’ll Actually Want to Read
        </h2>
        <p className="text-gray-300 mb-6">
          Get weekly insights on the real estate market, new listings, and
          expert tips.
        </p>
        <form className="flex justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-l-md outline-none text-gray-800"
          />
          <button className="bg-orange-500 px-6 rounded-r-md hover:bg-orange-600">
            Subscribe
          </button>
        </form>
      </section>

      <footer className="bg-white text-gray-400 py-12 text-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white mb-3 font-semibold">{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center text-gray-500 mt-10">
          © 2024 Real Estate Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
