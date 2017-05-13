import Ember from 'ember';
import RSVP from 'rsvp';
export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      parks: [
        {image: 'crater', alt: 'Crater Lake', 'title': 'Crater Lake National Park'},
        {image: 'yellowstone', alt: 'Yellowstone', 'title': 'Yellowstone National Park'},
        {image: 'haleakala', alt: 'Haleakala', 'title': 'Haleakala National Park'},
        {image: 'joshua', alt: 'Joshua Tree', 'title': 'Joshua Tree National Park'},
        {image: 'rainier', alt: 'Mt. Rainier', 'title': 'Mt. Rainier National Park'}
      ],
      items: ['Bathing Suit', 'Camera', 'Camera Charger from Murfreesboro','Chainsaw', 'Guns', 'iPad', 'iPhone', 'Laptop', 'Medicine', 'Pants', 'Phone Charger', 'Shoes', 'Shorts', 'Socks', 'Sunscreen', 'Sweatshirt', 'T-Shirt', 'Tie', 'Toiletries', 'Tuxedo', 'Underwear'
      ],
      problems: ['Not knowing what your future will bring you',
                'Being overworked at all hours of the day',
                'Constantly on the go to get on the MAX, knowing that if you miss it, that it will cost you 10-15 minutes',
                'Becky, the Neanderthal Jackass, a boss who doesn\'t know what she\'s doing',
                'Not having enough time to yourself',
                'Co-workers who think they\'re better than you',
                'Having too many interviews that don\'t go your way',
                'Crappy weather that makes you feel uninspired and depressed']
  });
  }
});
