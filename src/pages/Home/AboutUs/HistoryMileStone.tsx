

const HistoryMileStone = () => {
  const milestones = [
    {
      year: "2015",
      event: "Founded the platform with a mission to make sports facility booking accessible.",
    },
    {
      year: "2017",
      event: "Reached 10,000 users and partnered with 50 sports facilities.",
    },
    {
      year: "2020",
      event: "Expanded services internationally, serving over 100,000 users.",
    },

  ];

  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Our Journey
        </h2>
        <div className="mt-8 space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center">
              <div className="text-gray-800 text-2xl font-bold">{milestone.year}</div>
              <div className="ml-8 text-gray-600">{milestone.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default HistoryMileStone;