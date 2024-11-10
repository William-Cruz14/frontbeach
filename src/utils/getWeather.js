export async function getWaether(address) {
    
    const uri = "https://beachtest.onrender.com/api/weather?address="
    const uriBase = `${uri}${address}`
    
    try {

        const response = await fetch(uriBase, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const data = await response.json();
        
        return data;


    } catch (error) {
        console.error(error.message);
        return null;
    }
}