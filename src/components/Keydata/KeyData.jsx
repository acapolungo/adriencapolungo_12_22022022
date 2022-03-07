import React from 'react'
import PropTypes from 'prop-types';

/**
* Component that build the user's key datas in right section.
* @param { string } name
* @param { string } logo
* @param { string } count
* @return { KeyData }
*/
export default function KeyData({ name, picture, count }) {
  return (
    <article className="keydata">
      <div className={`keydata__${name}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${picture}.png`} alt={name} />
      </div>
      <div>
        <p className="keydata__count">{count}</p>
        <p className="keydata__name">{name}</p>
      </div>
    </article>
  )
}

KeyData.propTypes = {
  /**
  * Data name
  */
  name: PropTypes.string,
  /**
  * Data picture
  */
  picture: PropTypes.string,
  /**
  * data value
  */
  count: PropTypes.string,
};
