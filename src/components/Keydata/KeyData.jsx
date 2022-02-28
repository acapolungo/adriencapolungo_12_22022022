import React from 'react'
import PropTypes from 'prop-types';

/**
 * Component that build the user's key datas in right section.
 * @component
*/
export default function KeyData(props) {
  return (
    <article className="keydata">
        <div className={`keydata__${props.name}`}>
            <img src={`${process.env.PUBLIC_URL}/images/${props.picture}.png`} alt={props.name} />
        </div>
        <div>
            <p className="keydata__count">{props.count}</p>
            <p className="keydata__name">{props.name}</p>
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
