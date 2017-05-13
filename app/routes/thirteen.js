import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
      { 'title': 'Another Switchback Picture', 'image': 'switchback2', 'alt': 'switchback2', 'description': 'The Train heading through the Ponderosa Forest of the Kaibab National Forest', 'id': 0 },
      { 'title': 'Humphreys Peak', 'image': 'humphreys', 'alt': 'humphreys', 'description': 'As the clouds clear, an impressive view of Humphreys Peak appears.', 'id': 1 },
      { 'title': 'A herd of Cows', 'image': 'cows', 'alt': 'cows', 'description': 'Some of those cows are Sonic Cows...I think', 'id': 2 },
      { 'title': 'Horses stampeding through the field', 'image': 'horses', 'alt': 'horses', 'description': 'Real horses, not those being ridden by wannabe bank robbers', 'id': 3 },
      { 'title': 'Choo choo!', 'image': 'switchback3', 'alt': 'switchback3', 'description': 'Switchback', 'id': 4 },
      { 'title': 'The Sleeping Indian', 'image': 'sleeping_indian', 'alt': 'sleeping_indian', 'description': 'Look at it sideways: Do you see the Sleeping Indian?', 'id': 5 },
      { 'title': 'The same Butte', 'image': 'butte2', 'alt': 'butte2', 'description': 'Now that the clouds have cleared, nothing\'s changed because it was closer than Humphreys Peak', 'id': 6 },
      { 'title': 'Humphreys Peak', 'image': 'humphreys2', 'alt': 'humphreys2', 'description': 'The tallest mountain in Arizona, with lots of snow', 'id': 7 },
      { 'title': 'One of the few signs of human life out here', 'image': 'life', 'alt': 'life', 'description': 'A great place to be if you want neighbors miles apart.', 'id': 8 },
      { 'title': 'The Clouds are pointing to Humphreys Peak', 'image': 'clouds', 'alt': 'clouds', 'description': 'I wonder what they\'re pointing at. Humphreys Peak is where the Hopi Kachina\'s live.', 'id': 9 },
      { 'title': 'Uh oh, we\'re being robbed', 'image': 'robbers1', 'alt': 'robbers', 'description': 'Why now?', 'id': 10 },
      { 'title': 'Why are you slowing down the train? Go faster!', 'image': 'robbers2', 'alt': 'robbers2', 'description': 'The only train that apparently slows down for robbers', 'id': 11 },
      { 'title': 'Bad robbers! Stop it!', 'image': 'robbers3', 'alt': 'robbers3', 'description': 'I ain\'t afraid of no Ghost!', 'id': 12 },
      { 'title': 'Better hide your kids at home', 'image': 'robbers4', 'alt': 'robbers4', 'description': 'Not really, these guys are as useless as Tits on a Boar when it comes to robbery', 'id': 13 },
      { 'title': 'They don\'t want anything. What a shame!', 'image': 'robbers5', 'alt': 'robbers5', 'description': 'Probably a good thing. Real robbers suck', 'id': 14 },
      { 'title': 'Polar Express', 'image': 'polar2', 'alt': 'polar2', 'description': 'Yes, the North Pole is in Arizona', 'id': 15 },
      { 'title': 'Polar Express', 'image': 'polar3', 'alt': 'polar3', 'description': 'Look, it\'s really here', 'id': 16 },
      { 'title': 'Polar eXpress', 'image': 'polar4', 'alt': 'polar4', 'description': 'Great place for the kids', 'id': 17 },
      { 'title': 'Polar Express', 'image': 'polar5', 'alt': 'polar5', 'description': 'Now we can move on', 'id': 18 },
      { 'title': 'Kaibab National Forest', 'image': 'kaibab2', 'alt': 'kaibab2', 'description': 'Central Oregon, anyone?', 'id': 19 },
      { 'title': 'Kaibab National Forest', 'image': 'kaibab3', 'alt': 'kaibab3', 'description': 'A beautiful ride back with little walking', 'id': 20 },
      { 'title': 'Kaibab National Forest', 'image': 'kaibab4', 'alt': 'kaibab4', 'description': 'No dancing for Jenn. Too tired.', 'id': 21 },
      { 'title': 'Kaibab National Forest', 'image': 'kaibab5', 'alt': 'kaibab5', 'description': 'Look at the view from the dome window.', 'id': 22 },
      { 'title': 'Pitt Tank', 'image': 'pitt_tank', 'alt': 'pitt_tank', 'description': 'The infamous Pitt Tank Road', 'id': 23 },
      { 'title': 'Williams', 'image': 'williams3', 'alt': 'williams3', 'description': 'Hello Williams!', 'id': 24 },
      { 'title': 'Williams', 'image': 'williams4', 'alt': 'williams4', 'description': 'You\'re looking small and charming today.', 'id': 25 },
      { 'title': 'Williams', 'image': 'williams5', 'alt': 'williams5', 'description': 'And we\'re back', 'id': 26 },
      { 'title': 'Red Velvet Candy Bar', 'image': 'redvelvet', 'alt': 'redvelvet', 'description': 'Another Red Velvet thing. Yummy', 'id': 27 },
      { 'title': 'Pigs N Taters Candy Bar', 'image': 'pigstaters', 'alt': 'pigstaters', 'description': 'Candy bar with Bacon and Chips? I\'ll try it!', 'id': 28 },
      { 'title': 'Dinner', 'image': 'dinner3', 'alt': 'dinner3', 'description': 'My Dinner: Pork ribs, Mac N Cheese, Baked Potato, Salad and an Oak Creek Nut Brown Beer', 'id': 29 },
      { 'title': 'Dessert', 'image': 'dessert3', 'alt': 'dessert3', 'description': 'That\'s Tiramisu, not Cheesecake', 'id': 30 },
      { 'title': 'It\'s dark', 'image': 'dark', 'alt': 'dark', 'description': 'Hide your kids, it\'s Ghost Time!', 'id': 31 },
      { 'title': 'Again, it\'s dark', 'image': 'dark2', 'alt': 'dark2', 'description': 'Oooooooooooooh!', 'id': 32 }
    ]
  }
});
