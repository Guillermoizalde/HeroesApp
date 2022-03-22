import { useMemo } from 'react';

import { HeroCard } from './HeroCard';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'


export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher( publisher );
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]) ;

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">