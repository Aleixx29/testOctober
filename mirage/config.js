export default function() {
  this.namespace = '/api';

  this.get('/cards', function() {
    return {
      data: [{
        type: 'cards',
        id: 'toto1',
        attributes: {
          title: 'Test',
          date: '11 days ago',
          rate: '7.00%',
          time: '18 months',
          amount: 15000,
          image: '#',
          grade: 'C'
        }
      },{
        type: 'cards',
        id: 'toto2',
        attributes: {
          title: 'Test2',
          date: '23 days ago',
          rate: '1.00%',
          time: '32 months',
          amount: 200000,
          image: '#',
          grade: 'B'
        }
      },{
        type: 'cards',
        id: 'toto3',
        attributes: {
          title: 'Test2',
          date: '23 days ago',
          rate: '1.00%',
          time: '32 months',
          amount: 200000,
          image: '#',
          grade: 'B'
        }
      }]
    };
  });
}
