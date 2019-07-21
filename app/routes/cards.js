import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return [{
            id: 'toto',
            title: 'Test',
            date: '11 days ago',
            rate: '7.00%',
            time: '18 months',
            amount: 15000,
            image: '#',
            grade: 'C'
        },{
            id: 'toto2',
            title: 'Test2',
            date: '23 days ago',
            rate: '1.00%',
            time: '32 months',
            amount: 200000,
            image: '#',
            grade: 'B'
        },{
            id: 'toto3',
            title: 'Test3',
            date: '45 days ago',
            rate: '10.00%',
            time: '54 months',
            amount: 100000,
            image: '#',
            grade: 'A'
        }];
    }
});
