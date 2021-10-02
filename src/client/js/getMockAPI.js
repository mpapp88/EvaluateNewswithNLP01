const getMockAPI = async (url="") => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log('This is an error', error);
    }
};

export { getMockAPI };