// Team Section Component
const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "CEO & Founder",
      bio: "Alice is passionate about sports and technology. She founded this platform to bridge the gap between sports facilities and the community.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bob Smith",
      role: "CTO",
      bio: "Bob leads our tech team, ensuring that our platform is always up to date with the latest technologies.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Jack Smith",
      role: "COO",
      bio: "Bob leads our tech team, ensuring that our platform is always up to date with the latest technologies.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },

  ];
  return (
    <div className="py-12">
      <div className=" text-center">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default TeamSection;