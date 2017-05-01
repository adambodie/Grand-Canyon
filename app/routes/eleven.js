import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
      { 'title': 'Breakfast', 'image': 'breakfast2', 'alt': 'breakfast2', 'description': 'Breakfast Burrito and potatoes', 'id': 0 },
      { 'title': 'Grand Canyon Village Visitor Center', 'image': 'village', 'alt': 'village', 'description': 'A nice visitor center. Didn\'t go inside, too much to see outside.', 'id': 1 },
      { 'title': 'Rocks', 'image': 'rocks', 'alt': 'rocks', 'description': 'Lots of rocks surrounding this area', 'id': 2 },
      { 'title': 'Squirrel', 'image': 'squirrel', 'alt': 'squirrel', 'description': 'Squirrel looking for food. Yummy!', 'id': 3 },
      { 'title': 'Mather Point', 'image': 'mather1', 'alt': 'Grand Canyon', 'description': 'A great view in a different part.', 'id': 4 },
      { 'title': 'Mather Point', 'image': 'mather3', 'alt': 'Grand Canyon', 'description': 'Even without the sun shining, it\'s still a sight to see', 'id': 5 },
      { 'title': 'Mather Amphitheatre', 'image': 'amphitheatre', 'alt': 'amphitheatre', 'description': 'Like Red Rocks, but smaller. Still great to see.', 'id': 6 },
      { 'title': 'Mather Point', 'image': 'mather5', 'alt': 'Grand Canyon', 'description': 'Really great walk, even though by body wasn\'t happy', 'id': 7 },
      { 'title': 'Mather Point', 'image': 'mather6', 'alt': 'Grand Canyon', 'description': 'Look at the jaggedness of those rocks.', 'id': 8 },
      { 'title': 'Mather Point', 'image': 'mather7', 'alt': 'Grand Canyon', 'description': 'I don\'t know who Mather is, but it makes me think of Eminem', 'id': 9 },
      { 'title': 'Mather Point', 'image': 'mather8', 'alt': 'Grand Canyon', 'description': 'The colors lose their brightness, but the views are still exquisite.', 'id': 10 },
      { 'title': 'Mather Point', 'image': 'mather10', 'alt': 'Grand Canyon', 'description': 'I\'m glad we came out here. It was on a whim and with nothing better to do.', 'id': 11 },
      { 'title': 'Mather Point', 'image': 'mather12', 'alt': 'Grand Canyon', 'description': 'So many people here, but who cares! It\'s all about me!', 'id': 12 },
      { 'title': 'Mather Point', 'image': 'mather13', 'alt': 'Grand Canyon', 'description': 'It\'s so flat outside the Canyon, but rugged inside.', 'id': 13 },
      { 'title': 'Mather Point', 'image': 'mather14', 'alt': 'Grand Canyon', 'description': 'I really liked the Grand Canyon: Every Part I saw', 'id': 14 },
      { 'title': 'Mather Point', 'image': 'mather16', 'alt': 'Grand Canyon', 'description': 'Nice to walk around, even with the 1:00 limit', 'id': 15 },
      { 'title': 'Mather Point', 'image': 'mather17', 'alt': 'Grand Canyon', 'description': 'Almost to the next spot: Yavapai Point.', 'id': 16 },
      { 'title': 'Yavapai Point', 'image': 'yavapai2', 'alt': 'Grand Canyon', 'description': 'Another great spot, Yavapai Point. Just like Mather Point and in between.', 'id': 17 },
      { 'title': 'Yavapai Point', 'image': 'yavapai3', 'alt': 'Grand Canyon', 'description': 'I got to see the Grand Canyon in all different kinds of light, right on!', 'id': 18 },
      { 'title': 'Yavapai Point', 'image': 'yavapai4', 'alt': 'Grand Canyon', 'description': 'Wish I could\'ve spent more time...Like every spot', 'id': 19 },
      { 'title': 'Yavapai Point', 'image': 'yavapai6', 'alt': 'Grand Canyon', 'description': 'Really nice way to end the time at Grand Canyon Visitor Center', 'id': 20 },
      { 'title': 'Let\'s all do the Conga', 'image': 'conga', 'alt': 'Conga', 'description': '14 people walking in a row, who\'d have thunk it', 'id': 21 },
      { 'title': 'More Elk', 'image': 'elk2', 'alt': 'elk2', 'description': 'I see plenty of Elk here.', 'id': 22 }
    ]
  }
});
