import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
      {'title': 'That\'s a Lake?', 'image': 'lake', 'alt': 'Lake', 'description': 'Just outside Williams, home of the Prairie Dogs', 'id': 0},
      {'title': 'The Infamous Toilet', 'image': 'toilet', 'alt': 'Toilet', 'description': 'A dinky toilet; apparently, just a toilet...', 'id': 1},
      {'title': 'But wait...Where did the sink come from?', 'image': 'sink_toilet', 'alt': 'Sink', 'description': 'A folding sink just above the toilet.  How sweet!', 'id': 2},
      {'title': 'Bye Bye Williams', 'image': 'williams', 'alt': 'Williams', 'description': 'We make the townspeople\'s day by leaving by train.  Say bye bye townsfolk!', 'id': 3},
      {'title': 'Polar Express', 'image': 'polar', 'alt': 'Gateway', 'description': 'I didn\'t realize the North Pole was actually located in Arizona...', 'id': 4},
      {'title': 'Look at that butte', 'image': 'butte', 'alt': 'Butte', 'description': 'Look at that bump in an otherwise flat area.', 'id': 5},
      {'title': 'Humphreys Peak covered by clouds', 'image': 'humphreys_clouds', 'alt': 'Humphreys', 'description': 'Somewhere in that picture is Humphreys Peak, the Tallest Mountain in Arizona', 'id': 6},
      {'title': 'Singing Country', 'image': 'country', 'alt': 'Country', 'description': 'The Harmonica, an instrument that doesn\'t need any hands.  Neat.', 'id': 7},
      {'title': 'Kaibab National Forest', 'image': 'kaibab', 'alt': 'Kaibab', 'description': 'If you thought Central Oregon had that good smell, wait till you get here.', 'id': 8},
      {'title': 'The Train Heads through the Ponderosa Pines', 'image': 'switchback', 'alt': 'Switchback', 'description': 'It beats being stuck in traffic...', 'id': 9},
      {'title': 'Looking back at the Train Tracks', 'image': 'tracks', 'alt': 'tracks', 'description': 'Who knew Train Tracks could bring such entertainment', 'id': 10},
      {'title': 'Burnt Tree', 'image': 'burnt', 'alt': 'Burnt', 'description': 'Who can prevent Forest Fires? Only you can prevent forest fires.', 'id': 11}

    ]
  }
});
