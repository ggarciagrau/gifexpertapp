export const getGifs = async (category) => {

    const apiKey = 'SACDQdnWUlRG1GZTaP0r3wmqTqBhdt7T';
    const searchURL = 'https://api.giphy.com/v1/gifs/search';
    const limit = 10;

    let queryURL = `${searchURL}?api_key=${apiKey}&q=${category}&limit=${limit}`;
    const resp = await fetch(queryURL);

    const { data } = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}