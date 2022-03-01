import React from 'react';
import PropTypes from 'prop-types';

/**
* Component that build the Error in Dashboard component
* @param { string } error
* @return { Error404 } 
*/
export default function Error404({ error }) {
  return (
    <section className='error'>
      <div className='error__number'>404<span className='error__txt'>Oups... {error}</span>
      </div>
    </section>
  )
}

Error404.propTypes = {
  /**
  * Dashboard Error
  */
   error: PropTypes.string
};
