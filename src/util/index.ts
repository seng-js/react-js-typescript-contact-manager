const getSetting = () => {
    return {
        "locationFilter": "img/location-filter.png"
    }
}

const getLocationsByData = (data: any[]) => {
    let locations = data.map(item => item.city);
    return Array.from(new Set(locations));
}

const isValidInput = (filterByData: any) => {
    return filterByData !== undefined && filterByData.length > 0
}

const isFilterByLocation = (filterByLocation: string, contact: any) => {
    return contact.city.toLowerCase() === filterByLocation.toLowerCase();
}

const isFilterDelete = (contact: any, index: string) => {
    return contact.index !== index;
}

const isFilterByName = (filterByName: string, contact: any) => {
    const fullSearchQuery = `${contact.name.toLowerCase()} ${contact.company.toLowerCase()} ${contact.position.toLowerCase()}`;
    return fullSearchQuery.toLowerCase().includes(filterByName.toLowerCase());
}

export {
    isValidInput,
    isFilterByLocation,
    isFilterByName,
    isFilterDelete,
    getLocationsByData,
    getSetting
}
