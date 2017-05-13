import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return [
      {'title': 'Grand Canyon Railway Hotel', 'image': 'grand_canyon_railway2', 'alt': 'Grand Canyon Railway', 'description': 'A Beautiful place to start my Birthday!', 'id': 0},
      {'title': 'Bill Williams Mountain', 'image': 'bill_williams', 'alt': 'Hotel Inside', 'description': 'A nice picture of the mountain closest to Williams.  Named after its founder.', 'id': 1},
      {'title': 'The entrance', 'image': 'hotel_entrance', 'alt': 'Entrance', 'description': 'Here\'s the entrance to the Hotel.  GC all the way.', 'id': 2},
      {'title': 'The Gateway', 'image': 'gateway', 'alt': 'Gateway', 'description': 'It\'s true what they say, Williams is the Gateway to the Grand Canyon', 'id': 3},
      {'title': 'More about the Gateway', 'image': 'gateway2', 'alt': 'Gateway', 'description': 'After all, it is the closest to the Canyon you can get on the Interstate', 'id': 4},
      {'title': 'First meal as a 30 year old', 'image': 'breakfast1', 'alt': 'Breakfast', 'description': 'Southwestern styled Omelet, Potatoes, Bacon & Sausage', 'id': 5 },
      {'title': 'Welcome to the Wild West', 'image': 'wild_west', 'alt': 'Wild West', 'description': 'I\'d like to introduce you to the World\'s Worst Robbers...', 'id': 6},
      {'title': 'Cowboy #1', 'image': 'cowboy', 'alt': 'Cowboy', 'description': 'What a joy', 'id': 7},
      {'title': 'Cowboy #2', 'image': 'cowboy2', 'alt': 'Cowboy2', 'description': 'Next....', 'id': 8},
      {'title': 'Cowboy #3', 'image': 'cowboy3', 'alt': 'Cowboy3', 'description': 'Same as Cowboy #2', 'id': 9},
      {'title': 'The Whole Gang', 'image': 'cowboys', 'alt': 'Cowboys', 'description': 'Let\'s play cards and pin a theft on the new guy', 'id': 10},
      {'title': 'Aren\'t you supposed to be dead?', 'image': 'dead_cowboy', 'alt': 'Dead Cowboy', 'description': 'I\'m naming him Brad, reminds me of a co-worker.', 'id': 11},
      {'title': 'Why do people keep shooting Brad?', 'image': 'dead_cowboy2', 'alt': 'Dead Cowboy2','description': 'Because they didn\'t understand the joke about laughingstocks.', 'id': 12}
    ]
  }
});
