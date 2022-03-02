import moment from 'moment';

export default [{
    id: '1',
    description: 'Bananas',
    note: 'Blah blah',
    amount: 200,
    createdAt: 0
},
{
    id: '2',
    description: 'Rent',
    note: 'Blah blah',
    amount: 7200,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'Credit Card',
    note: 'Blah blah',
    amount: 25600,
    createdAt: moment(0).add(4, 'days').valueOf()
}]
