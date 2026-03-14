import { useState } from "react"

export const Pokemon = () => {
    const [number, setNumPoke] = useState(0);
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    // Cuando se debe realizar una accion para traer la informacion

  const getPokes = async () => {
    try {
      await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
        .then((res) => res.json())
        .then((pokes) => setData(pokes.results));
    } catch (error) {
      setError(error);
    }
  };

    const handleSubmit = (e) => {
    e.preventDefault()
    getPokes()
  }
  
    return (
        
        <>

        {error && <p>{error}</p>}

        {data.length <2 && <p>Hay un solo Pokemon</p>}

        <form
        onSubmit={handleSubmit}>
        <input
        placeholder="Numero de pokemons"
        onChange={(e) => setNumPoke(e.target.value)}
        />
        <button>Obtener pokemons</button>
        <div>
            {data.map((poke, index) => (
            <h1 key={index}>{poke.name}</h1>
            ))}
        </div>
        </form>

        </>
    )
}