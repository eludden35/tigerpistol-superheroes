import React from 'react';

const ViewContent = (props) => {
    
    const {superHeroData, index} = props;

    return(
        <>
            {
                index === 0 ?
                superHeroData.map(superhero => <ul className='list-group'> <li className='list-group-item mt-1'><strong>ID:</strong> {superhero.id}, <strong>SuperHero Name</strong>: {superhero.name}, <strong>Real Name:</strong> {superhero.biography["full-name"]} </li> </ul>)
                :
                superHeroData.map(superhero => {
                    return(
                    <div className='card col-md-3 m-1'>
                        <img className='card-img-top mt-3' style={{width: "50%", margin: "0 auto"}} src={superhero.image.url} alt="superhero-img" />
                        <div className='card-body'>
                            <h4 style={{width: "fit-content", margin: "0 auto"}}>{superhero.name}</h4>
                        </div>
                    </div>
                    )
                })
            }
        </>
    );
}

export default ViewContent;