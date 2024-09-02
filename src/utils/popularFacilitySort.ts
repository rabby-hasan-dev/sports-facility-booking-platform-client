import { IFacilities } from "../types/faicility.type";

export const getPoplarFacilities = (facilities: IFacilities[]) => {

    if (!Array.isArray(facilities)) {
        throw new Error("Data should be an array");
    }
    const clonData = [...facilities];
    const sortedData = clonData
        .filter(item => {
            const filterData = typeof item.bookingsCount === 'number' && !isNaN(item.bookingsCount)
            return filterData;
        })
        .map(item => {

            const converted = { ...item, bookingsCount: Number(item.bookingsCount) }

            return converted;
        })
        .sort((a, b) => b.bookingsCount - a.bookingsCount);


    return sortedData.slice(0, 5);
};

