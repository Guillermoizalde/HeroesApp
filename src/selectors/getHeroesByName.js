import { heroes } from '../data/heroes';

export const getHeroesByName = (name = '') => {

    //name = name.toLowerCase();

    //return heroes.filter(hero => hero.name.toLowerCase().includes(name));

    return [...heroes];

}

export const getHeroesByName = (name = '') => {

    //name = name.toLowerCase();
    if ( name.length === 0 ) {
        return [];
    }

    //return heroes.filter(hero => hero.name.toLowerCase().includes(name));

    return [...heroes];
    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

}