import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
      { 'title': 'Lunch', 'image': 'lunch', 'alt': 'lunch', 'description': 'Southwestern Angus Burger with some French Fries, yummy', 'id': 0 },
      { 'title': 'Rim Trail', 'image': 'rim1', 'alt': 'Rim Trail', 'description': 'The views from the Rim were incredible.', 'id': 1 },
      { 'title': 'Rim Trail', 'image': 'rim2', 'alt': 'Rim Trail', 'description': 'Having time to ourselves was great to have!', 'id': 2 },
      { 'title': 'Rim Trail', 'image': 'rim3', 'alt': 'Rim Trail', 'description': 'More twists and turns with surrounding hills.', 'id': 3 },
      { 'title': 'Rim Trail', 'image': 'rim4', 'alt': 'Rim Trail', 'description': 'It\'s like a painting!', 'id': 4 },
      { 'title': 'Rim Trail', 'image': 'rim5', 'alt': 'Rim Trail', 'description': 'I was really happy to be here', 'id': 5 },
      { 'title': 'Rim Trail', 'image': 'rim6', 'alt': 'Rim Trail', 'description': 'The building up there is El Tovar: Looks so far yet is so close', 'id': 6 },
      { 'title': 'Rim Trail', 'image': 'rim7', 'alt': 'Rim Trail', 'description': 'I felt like a kid in a candy store!', 'id': 7 },
      { 'title': 'Rim Trail', 'image': 'rim8', 'alt': 'Rim Trail', 'description': 'Fortunately, I didn\'t run off too much. No Haleakala!', 'id': 8 },
      { 'title': 'Rim Trail', 'image': 'rim9', 'alt': 'Rim Trail', 'description': 'It felt like I was in heaven', 'id':9  },
      { 'title': 'Rim Trail', 'image': 'rim11', 'alt': 'Rim Trail', 'description': 'You know that feeling when you\'re in the zone. I was in the zone!', 'id': 10 },
      { 'title': 'Rim Trail', 'image': 'rim13', 'alt': 'Rim Trail', 'description': 'The back of my shirt said 30, but I had more than 30 reasons to be there.', 'id': 11 },
      { 'title': 'Rim Trail', 'image': 'rim14', 'alt': 'Rim Trail', 'description': 'Like a perfect dessert, this was worth savoring!', 'id': 12 },
      { 'title': 'Rim Trail', 'image': 'rim16', 'alt': 'Rim Trail', 'description': 'I\'m glad I did this!', 'id': 13 },
      { 'title': 'Rim Trail', 'image': 'rim17', 'alt': 'Rim Trail', 'description': 'Living life to the Fullest; but being responsible about it.', 'id': 14 },
      { 'title': 'Rim Trail', 'image': 'rim19', 'alt': 'Rim Trail', 'description': 'Not being a statistic, being a person!', 'id': 15 },
      { 'title': 'Rim Trail', 'image': 'rim20', 'alt': 'Rim Trail', 'description': 'Woo Hoo!', 'id': 16 },
      { 'title': 'Rim Trail', 'image': 'rim21', 'alt': 'Rim Trail', 'description': 'So So Amazing', 'id': 17 },
      { 'title': 'Rim Trail', 'image': 'rim23', 'alt': 'Rim Trail', 'description': 'No Wonder this is one of the Seven Natural Wonders of the World', 'id': 18 },
      { 'title': 'Kolb Studio', 'image': 'kolb_studio', 'alt': 'Kolb Studio', 'description': 'Couldn\'t imagine living in a place like this', 'id': 19 },
      { 'title': 'Kolb Studio', 'image': 'kolb_studio2', 'alt': 'Kolb Studio', 'description': 'It did look amazing to see though!', 'id': 20 },
      { 'title': 'Lizard', 'image': 'lizard2', 'alt': 'Lizard', 'description': 'This lizard was easier to spot...and to photograph', 'id': 21 },
      { 'title': 'Bird', 'image': 'bird', 'alt': 'Bird', 'description': 'They say not to feed the animals, but they\'ll try to find our food in other ways', 'id': 22 }
    ]
  }
});
