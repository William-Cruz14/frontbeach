export async function getGeocode(address) {

    const uri = "https://beachtest.onrender.com/api/geocode?address=";
    const uriBase = `${uri}${address}`;

    try {

        const response = await fetch(uriBase, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const json = await response.json();
        const data = json.features;

        const result = data.find(obj => obj.properties.type == 'Beach' && obj.properties.confidence == 'High' || obj.properties.confidence == 'Medium');

        
        return result ? result : null;


    } catch (error) {
        console.error(error.message);
        return null;
    }

}