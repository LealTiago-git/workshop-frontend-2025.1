export async function fetchCards() {
  try {
    const response = await fetch("https://api.pokemontcg.io/v2/cards");
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}