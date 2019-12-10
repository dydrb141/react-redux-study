import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Nav({ categories }) {
    const to = users => `${users.id}`;

    return (
        <ul>
            {/* props.categories를 기반으로 링크 생성 */}
            {categories.map(users => (
                <li key={`nav-item-${users.id}`}>
                    <Link to={to(users)}>
                        {users.name}
                        {to(users)}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

Nav.propTypes = {
    // state.users.categories 구조
    categories: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        })
    ).isRequired
};
