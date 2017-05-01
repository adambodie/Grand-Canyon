import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
      { 'title': 'Grand Canyon Depot', 'image': 'depot2', 'alt': 'depot', 'description': 'Where the Train dropped us off', 'id': 0 },
      { 'title': 'El Tovar', 'image': 'tovar1', 'alt': 'tovar', 'description': 'Nice place, nicer than our lodge', 'id': 1 },
      { 'title': 'El Tovar', 'image': 'tovar2', 'alt': 'tovar', 'description': 'Better views=More money', 'id': 2 },
      { 'title': 'Hopi House', 'image': 'hopi_house', 'alt': 'hopihouse', 'description': 'I did a school project on the Hopi\'s at West TV.', 'id': 3 },
      { 'title': 'Hopi House', 'image': 'hopi_house2', 'alt': 'hopihouse', 'description': 'Neat to see an actual example of a Pueblo after all those years', 'id': 4 },
      { 'title': 'Sunset', 'image': 'gcsunset1', 'alt': 'sunset', 'description': 'More color shifting at the Grand Canyon', 'id': 5 },
      { 'title': 'Sunset', 'image': 'gcsunset3', 'alt': 'sunset', 'description': 'The glow was quite exquisite', 'id': 6 },
      { 'title': 'Sunset', 'image': 'gcsunset5', 'alt': 'sunset', 'description': 'The temperature was Perfect!', 'id': 7 },
      { 'title': 'Dinner', 'image': 'dinner2', 'alt': 'dinner', 'description': 'Duck Sliders, Garlic Fries, Shrimp Cocktails and Vegetarian Chili. Yummy!', 'id': 8 },
      { 'title': 'Sunset', 'image': 'gcsunset7', 'alt': 'sunset', 'description': 'The sun setting was Perfect!', 'id': 9 },
      { 'title': 'El Tovar', 'image': 'tovar3', 'alt': 'sunset', 'description': 'The back of El Tovar looked cool as well', 'id': 10 },
      { 'title': 'Sunset', 'image': 'gcsunset9', 'alt': 'sunset', 'description': 'The dot keeps showing up', 'id': 10 },
      { 'title': 'Sunset', 'image': 'gcsunset10', 'alt': 'sunset', 'description': 'Perfect', 'id': 11 },
      { 'title': 'Sunset', 'image': 'gcsunset11', 'alt': 'sunset', 'description': 'And here\'s what happens when you get too much light in a picture. Eerie!', 'id': 12 },
      { 'title': 'Sunset', 'image': 'gcsunset13', 'alt': 'sunset', 'description': 'Compared to the actual look', 'id': 13 },
      { 'title': 'Sunset', 'image': 'gcsunset14', 'alt': 'sunset', 'description': 'Bye bye Sun, see you tomorrow!', 'id': 14 },
      { 'title': 'Sunset', 'image': 'gcsunset15', 'alt': 'sunset', 'description': 'The yellows and oranges glow in the sky', 'id': 15 },
      { 'title': 'Sunset', 'image': 'gcsunset17', 'alt': 'sunset', 'description': 'Countdown 5,4,3,2,1...', 'id': 16 },
      { 'title': 'Sunset', 'image': 'gcsunset18', 'alt': 'sunset', 'description': 'Couldn\'t ask for a better night.', 'id': 17 },
      { 'title': 'Warming some Grand Marnier', 'image': 'grandmarnier', 'alt': 'grandmarnier', 'description': 'Neat, never seen this before', 'id': 18 },
      { 'title': 'Chocolate Taco', 'image': 'chocolatetaco', 'alt': 'chocolatetaco', 'description': 'Yummy, combining two great things, Chocolate, and Tacos', 'id': 19 },
      { 'title': 'Chocolate Taco with Grand Marnier', 'image': 'dessert2', 'alt': 'dessert', 'description': 'A perfect birthday dessert', 'id': 20 },
      { 'title': 'El Tovar', 'image': 'tovar4', 'alt': 'tovar', 'description': 'Looks even better at night with the Star', 'id': 21 },
      { 'title': 'The North Star', 'image': 'star', 'alt': 'star', 'description': 'Biggest one I saw in the sky', 'id': 22 }
    ]
  }
});
