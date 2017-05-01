import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {'title': 'Grand Canyon Railway Hotel', 'image': 'grand_canyon_railway', 'alt': 'Grand Canyon Railway', 'description': 'Here\'s the hotel we stayed at (for the 1st and 3rd nights)', 'id': 0},
      {'title': 'A look inside the Hotel', 'image': 'railway_inside', 'alt': 'Hotel Inside',  'description': 'This was inside the lobby.  Nice painting of the Grand Canyon', 'id': 1},
      {'title': 'The first of many Trains', 'image': 'train', 'alt': 'Train',
      'description': 'Just outside the hotel was this train.  A model, not an actual working train.', 'id': 2},
      {'title': 'Train Depot', 'image': 'train_depot', 'alt': 'Train Depot', 'description': 'This is where we got our shit-load of tickets.  I didn\'t go inside this building though.', 'id': 3},
      {'title': 'Singer', 'image': 'singer', 'alt': 'Singer', 'description': 'Having a buffet styled dinner with entertainment.  I was more entertained by the little moving train.', 'id': 4 },
      {'title': 'Ring Ding Ding! It\'s my first meal!', 'image': 'dinner1', 'alt': 'Dinner 1', 'description': 'On the menu: Mahi Mahi, Mac & Cheese, Broccoli & Cheese, Roasted Potatoes and Mini Corn Dogs, with an Olive Salad', 'id': 5 },
      {'title': 'Which way to go?', 'image': 'dessert1', 'alt': 'Dessert1', 'description': 'Cheesecake with Chocolate Drizzle.  Yummy!', 'id': 6},
      {'title': 'Inside the Grand Canyon Depot', 'image': 'grand_canyon_depot', 'alt': 'Depot', 'description': 'We spent half of our meals here.  It beats Hometown Buffet, yuck!', 'id': 7 },
      {'title': 'Horses & Carriage', 'image': 'horse', 'alt': 'Horse', 'description': 'Never got that horsey ride Jenn wanted me to have...', 'id': 8},
      {'title': 'Sunset', 'image': 'sunset', 'alt': 'Sunset', 'description': 'Despite the chilly weather, the sunset was nice here.', 'id': 9},
      {'title': 'Look who decided to join the fun?', 'image': 'singers', 'alt': 'Singers', 'description': 'One of the cooks I think, singing "Hallelujah"', 'id': 10},
      {'title': 'Let\'s give it up for the 20s', 'image': 'sunset2', 'alt': 'Sunset2', 'description': 'And so ends my time as a 20 something year old know it all.', 'id': 11}
    ]
  }
});
