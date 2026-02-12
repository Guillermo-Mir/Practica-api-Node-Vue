import express from 'express';
import fs from 'fs';

const router = express.Router();

const readData = () => JSON.parse(fs.readFileSync('./db/db.json'));
const writeData = (data) =>
  fs.writeFileSync('./db/db.json', JSON.stringify(data, null, 2));


router.get('/', (req, res) => {
  const data = readData();
  res.json({ pokemons: data.pokemons });
});


router.get('/:id', (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const pokemon = data.pokemons.find(p => p.id === id);

  if (!pokemon) {
    return res.status(404).json({ error: 'Pokemon not found' });
  }

  res.json({ pokemon });
});


router.post('/', (req, res) => {
  const data = readData();
  const { name, type, generation } = req.body;

  if (!name || !type || generation === undefined) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const newPokemon = {
    id: data.pokemons.length > 0
      ? data.pokemons[data.pokemons.length - 1].id + 1
      : 1,
    name,
    type,
    generation: parseInt(generation),
  };

  data.pokemons.push(newPokemon);
  writeData(data);

  res.status(201).json({ pokemon: newPokemon });
});

router.put('/:id', (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const index = data.pokemons.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Pokemon not found' });
  }

  data.pokemons[index] = { ...data.pokemons[index], ...req.body };
  writeData(data);

  res.json({ pokemon: data.pokemons[index] });
});


router.delete('/:id', (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const index = data.pokemons.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Pokemon not found' });
  }

  const deleted = data.pokemons.splice(index, 1);
  writeData(data);

  res.json({ message: 'Pokemon eliminado', pokemon: deleted[0] });
});

export default router;
