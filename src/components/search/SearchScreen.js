import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';


export const SearchScreen = () => {

  const [ formValues, handleInputChange] = useForm({
    searchText: '',
  })
  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });
const { searchText }  = formValues;
  const heroesFileted = getHeroesByName('ALGO POR AQUI')
  const heroesFileted = getHeroesByName(q);

  const handleSearch = (e) => {
    e.preventDefautl();
    console.log(searchText);
    e.preventDefault();
    navigate(`?q=${ searchText }`)
  }

    return (

import { useForm } from "../../hooks/useForm"


export const SearchScreen = () => {

  const [ formValues, handleInputChange] = useForm({
    searchText: '',
  })

  const { searchText }  = formValues;

  const handleSearch = (e) => {
    e.preventDefautl();
    console.log(searchText);
  }

    return (
      <div>
          <h1>SearchScreen</h1>
      </div>
      <>
          <h1>Búsquedas</h1>
          <hr />

          <div className="row">

            <div className="col-5">

              <h4>Buscar</h4>
              <hr />

              <form onSubmit={ handleSearch }>

                <input
                    type="text"
                    placeholder="Buscar un héroe"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange = { handleInputChange }
                />

                <button
                className="btn btn-outline-primary mt-1"
                type="submit">
                    Buscar...
                </button>

              </form>

            </div>


          </div>
      </>
    )
  }

import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import { useMemo } from 'react';


export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });

  const { searchText }  = formValues;

  const heroesFileted = useMemo( () => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`)
  }

    return (
      <>
          <h1>Búsquedas</h1>
          <hr />

          <div className="row">

            <div className="col-5">

              <h4>Buscar</h4>
              <hr />

              <form onSubmit={ handleSearch }>

                <input
                    type="text"
                    placeholder="Buscar un héroe"
                    className="form-control"
                    name="searchText"
                    autoComplete="off"
                    value={ searchText }
                    onChange = { handleInputChange }
                />

                <button 
                className="btn btn-outline-primary mt-1"
                type="submit">
                    Buscar...
                </button>

              </form>

            </div>

            <div className='col-7'>
              <h4>Resultados</h4>
              <hr />

              {
                (q == '')
                ? <div className="alert alert-info">Buscar un héroe </div>
                : ( heroesFileted.length == 0) 
                && <div className="alert alert-danger"> No hay resultados: { q } </div>
              }

              {
                heroesFileted.map(hero =>(
                  <HeroCard 
                     key={ hero.id }
                     {...hero }
                  />
                ))
              }

            </div>
            
          </div>
      </>
    )
  }
  import { useForm } from "../../hooks/useForm"
  import { useForm } from '../../hooks/useForm'
  import { getHeroesByName } from '../../selectors/getHeroesByName';
  import { HeroCard } from '../hero/HeroCard';


  export const SearchScreen = () => {
  }

   })

    const { searchText }  = formValues;
    const heroesFileted = getHeroesByName('ALGO POR AQUI')

    const handleSearch = (e) => {
      e.preventDefautl();


            </div>

            <div className='col-7'>
              <h4>Resultados</h4>
              <hr />

              {
                heroesFileted.map(hero =>(
                  <HeroCard
                     key={ hero.id }
                     {...hero }
                  />
                ))
              }

            </div>

          </div>
      </>
  