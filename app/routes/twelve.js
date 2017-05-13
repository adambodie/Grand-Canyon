import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
      { 'title': 'El Tovar', 'image': 'tovar5', 'alt': 'tovar5', 'description': 'Another day walking by El Tovar.', 'id': 0 },
      { 'title': 'Hopi House', 'image': 'hopihouse3', 'alt': 'hopihouse3', 'description': 'The good old Hopi House', 'id': 1 },
      { 'title': 'Grand Canyon', 'image': 'tovar7', 'alt': 'tovar7', 'description': 'The view outside El Tovar (at the daytime)', 'id': 2 },
      { 'title': 'Grand Canyon', 'image': 'tovar8', 'alt': 'tovar8', 'description': 'Another nice view', 'id': 3 },
      { 'title': 'Mules', 'image': 'mule', 'alt': 'mule', 'description': 'Mules are hungry, just like us.', 'id': 4 },
      { 'title': 'Mule', 'image': 'mule2', 'alt': 'mule2', 'description': 'They also poop like us.', 'id': 5 },
      { 'title': 'Mule', 'image': 'mule3', 'alt': 'mule3', 'description': 'A White Mule', 'id': 6 },
      { 'title': 'Mules', 'image': 'mule4', 'alt': 'mule4', 'description': 'White Mule passes by Brown Mule', 'id': 7 },
      { 'title': 'Train', 'image': 'train3', 'alt': 'train3', 'description': 'Another nice Train shot', 'id': 8 },
      { 'title': 'Grand Canyon Railway', 'image': 'train4', 'alt': 'train4', 'description': 'The front of the Grand Canyon Railway. Majestic.', 'id': 9 },
      { 'title': 'Grand Canyon Railway', 'image': 'train5', 'alt': 'train5', 'description': 'Thirteen Boxcars and we were the one with the biggest dome', 'id': 10 },
      { 'title': 'Grand Canyon Railway', 'image': 'train6', 'alt': 'train6', 'description': 'Much better than being stuck in traffic.', 'id': 11 },
      { 'title': 'Bright Angel Lodge', 'image': 'brightangel', 'alt': 'brightangel', 'description': 'The other nice lodge at Grand Canyon Village (or is it El Tovar)', 'id': 12 },
      { 'title': 'Grand Canyon', 'image': 'rim25', 'alt': 'Grand Canyon', 'description': 'I\'ve had enough, for this trip', 'id': 13 },
      { 'title': 'Buckey O\'Neill Cabin', 'image': 'buckey', 'alt': 'Buckey', 'description': 'Thought this was Becky, thank god it was Buckey.', 'id': 14 }
    ]
  }
});

/*,*/
