import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `src/assets/heroes/${id}.jpg`;

    const CharactersByHero = ({ alter_ego, characters }) => {
        if (alter_ego !== characters) {
            return <p>{characters}</p>;
        }
        return null;
    }

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4 '>
                        <img src={heroImageUrl} className='card-img' alt={superhero}></img>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            <p className='card-text'>{first_appearance}</p>
                            <CharactersByHero characters={characters} alter_ego={alter_ego}/>
                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
