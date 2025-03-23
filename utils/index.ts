export async function fetchCars() {
    const headers = {
            'x-rapidapi-key': '0cfae8fb0bmsh0d8e9767eed3e53p140655jsn7c5ba1379023',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result
}