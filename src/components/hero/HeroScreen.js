import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const { heroeId } = useParams();
  const navigate = useNavigate();
  const hero = getHeroById(heroeId);

  const hero = useMemo( () => getHeroById(heroeId), [heroeId]);


  const handleReturn = () => {
    navigate(-1)

import { useParams, Navigate } from "react-router-dom"
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const { heroeId } = useParams();

  const navigate = useNavigate();
  const hero = getHeroById(heroeId);

  const handleReturn = () => {
    navigate(-1)
  }

  if(!hero) {
    return <Navigate to = '/' />
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    firs_appearance,
    characters
  } = hero;

  const imgPath = `/assets/${ id }.jpg`;

  return (
      <div>
          <h1>HeroScreen</h1>
          <p>
              {hero.superhero}
          </p>
      <div className="row mt-5">
        <div className="col-4">
          <img
             src={ imgPath }
             alt={ superhero }
             className="img-thumbnail"
          />
        </div>

        <div className="col-8">
            <h3>{ hero.superhero }</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter ego:</b> { alter_ego } </li>
                <li className="list-group-item"><b>Publisher:</b> { publisher } </li>
                <li className="list-group-item"><b>First Appearance:</b> { firs_appearance } </li>
            </ul>

            <h5 className="mt-5">Characters</h5>
            <p> { characters }</p>

            <button
               className="btn btn-outline-info"
               onClick={ handleReturn }
            >
              Regresar
            </button>
        </div>
      </div>
    )
  }