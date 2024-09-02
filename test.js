

const getTopThreeBookings = (data) => {
    if (!Array.isArray(data)) {
      throw new Error("Data should be an array");
    }

    const sortedData = data
      .filter(item => typeof item.bookingCount === 'number' && !isNaN(item.bookingCount))
      .sort((a, b) => b.bookingCount - a.bookingCount);
  
  
    return sortedData.slice(0, 3);
  };
  
  // Example usage
  const apiData = [
    { id: 1, name: 'Facility A', bookingCount: "12" }, // bookingCount as string
    { id: 2, name: 'Facility B', bookingCount: 8 },
    { id: 3, name: 'Facility C', bookingCount: 20 },
    { id: 4, name: 'Facility D', bookingCount: 15 },
    { id: 5, name: 'Facility E', bookingCount: 5 }
  ];
  
  const topThreeFacilities = getTopThreeBookings(apiData);
  
  console.log(topThreeFacilities);