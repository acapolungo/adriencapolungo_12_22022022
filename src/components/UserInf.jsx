import React from 'react';
import PropTypes from 'prop-types';

export default function UserInf({userName}) {

    //console.log(userName)
    return (
        <article className='dashboard__info'>
        <h1>Bonjour <span className='dashboard__name'>{userName}</span></h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
      </article>
    )
}

UserInf.propTypes = {
    /**
    * User's name
    */
    userName: PropTypes.string
};
