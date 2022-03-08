import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
    <Link className='list-item' to={`/edit/${id}`}>
        <div>
            <h3 className='list-item__description'>{description}</h3>
            <span>{moment(createdAt).format('MMMM Do, YYYY')}</span>
            {note && <p className='list-item__note'>Note: {note}</p>}

        </div>
        <h3 className='list-item__amount'>
            {numeral(amount / 100).format('$0,0.00')}
        </h3>
    </Link>
)
export default ExpenseListItem