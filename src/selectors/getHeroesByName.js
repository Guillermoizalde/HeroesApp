import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {

    //name = name.toLowerCase();

    //return heroes.filter(hero => hero.name.toLowerCase().includes(name));

    return [...heroes];

}