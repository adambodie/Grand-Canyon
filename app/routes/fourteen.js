import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return[
      { 'title': 'The Courtyard', 'image': 'courtyard', 'alt': 'courtyard', 'description': 'Never saw the courtyard until the last day', 'id': 0 },
      { 'title': 'Last Breakfast in Arizona', 'image': 'breakfast3', 'alt': 'breakfast3', 'description': 'A Fritatta, hash browns, potatoes, sausage and bacon', 'id': 1 },
      { 'title': 'Santa Fe Reservoir', 'image': 'santafedam', 'alt': 'santafe', 'description': 'That\'s an old looking dam. Damn!', 'id': 2 },
      { 'title': 'Just outside Williams', 'image': 'pioneer', 'alt': 'pioneer', 'description': 'Rural areas are always rural, no matter where you are', 'id': 3 },
      { 'title': 'Just outside Williams', 'image': 'rural', 'alt': 'rural', 'description': 'Beautiful drive, since we didn\'t do much driving', 'id': 4 },
      { 'title': 'Just outside Williams', 'image': 'rural2', 'alt': 'rural2', 'description': 'The air smells quite refreshing here, like vanilla and butterscotch', 'id': 5 },
      { 'title': 'Dogtown Lake', 'image': 'dogtown1', 'alt': 'dogtown', 'description': 'Our unplanned destination. Nice!', 'id': 6 },
      { 'title': 'Dogtown Lake', 'image': 'dogtown2', 'alt': 'dogtown2', 'description': 'At least Arizona has water. Not sure if it did.', 'id': 7 },
      { 'title': 'Dogtown Lake', 'image': 'dogtown4', 'alt': 'dogtown4', 'description': 'Sometimes it\'s good to do things spontaneously', 'id': 8 },
      { 'title': 'Dogtown Lake', 'image': 'dogtown6', 'alt': 'dogtown6', 'description': 'After seeing the Grand Canyon, it was different to see something that you could see an ending to', 'id': 9 },
      { 'title': 'Dogtown Lake', 'image': 'dogtown7', 'alt': 'dogtown7', 'description': 'Dad took the opportunity to learn about fishing in the area', 'id': 10 },
      { 'title': 'Dogtown Lake', 'image': 'dogtown8', 'alt': 'dogtown8', 'description': 'Not pictured is a dumptruck dumping a truckload of fish into the lake.', 'id': 11 },
      { 'title': 'Ducks', 'image': 'ducks', 'alt': 'ducks', 'description': 'Ducks are everywhere, even in Arizona', 'id': 12 },
      { 'title': 'Butterfly', 'image': 'butterfly', 'alt': 'butterfly', 'description': 'Great! It\'s brown, like the state', 'id': 13 },
      { 'title': 'Our dirty rental car', 'image': 'dirty', 'alt': 'dirty', 'description': 'The price for driving on gravel road', 'id': 14 },
      { 'title': 'Downtown Williams', 'image': 'downtown', 'alt': 'downtown1', 'description': 'Anyone know how to get to Route 66', 'id': 15 },
      { 'title': 'Downtown Williams', 'image': 'downtown2', 'alt': 'downtown2', 'description': 'Nice and charming, a perfect way to end the sightseeing.', 'id': 16 },
      { 'title': 'Cruisers', 'image': 'cruisers', 'alt': 'cruisers', 'description': 'Reminds me of Johnny Rockets', 'id': 17 },
      { 'title': 'Cruisers', 'image': 'cruisers2', 'alt': 'cruisers2', 'description': '60s Styled Diner, meet Rote 66', 'id': 18 },
      { 'title': 'Cruisers', 'image': 'cruisers3', 'alt': 'cruisers3', 'description': 'The smell was good, they had BBQ', 'id': 19 },
      { 'title': 'Now this is an Old Fart', 'image': 'old_fart', 'alt': 'old_fart', 'description': 'Another victim of the Booger Picker', 'id': 20 },
      { 'title': 'Beer', 'image': 'beer', 'alt': 'beer', 'description': 'Sadly, some beers are cheaper than gas per gallon', 'id': 21 },
      { 'title': 'Cruisers', 'image': 'cruisers4', 'alt': 'cruisers4', 'description': 'Just like many of restaurants of the style, but this one\'s in Williams, Arizona', 'id': 22 },
      { 'title': 'Lunch', 'image': 'lunch2', 'alt': 'lunch2', 'description': 'Chili Burgers, always have to have one of them!', 'id': 23 },
      { 'title': 'Bathroom', 'image': 'bathroom', 'alt': 'bathroom', 'description': 'Is this really a bathroom?', 'id': 24 },
      { 'title': 'Humphreys Peak', 'image': 'humphreys3', 'alt': 'humphreys3', 'description': 'Towering over the region and the only place with snow.', 'id': 25 },
      { 'title': 'Dinner', 'image': 'dinner4', 'alt': 'dinner4', 'description': 'Courtesy of Panda Express, which I can get at home but don\'t', 'id': 26 },
      { 'title': 'It\'s a bird, it\'s a plane. No, it\'s Jose Cuervo!', 'image': 'geico', 'alt': 'geico', 'description': 'Actually, with optimal zoom, it\'s Geico. I didn\'t save 15% on my Car Insurance by taking this picture', 'id': 27 },
      { 'title': 'Gammage Auditorium', 'image': 'asu', 'alt': 'asu', 'description': 'This building I saw from the plane is Frank Lloyd Wright\'s last building, at Arizona State University', 'id': 28 },
      { 'title': 'Arizona State University', 'image': 'asu2', 'alt': 'asu', 'description': 'They\'ve beaten USC two years in a row (62-24, anyone?)', 'id': 29 },
      { 'title': 'Where is this?', 'image': 'utah', 'alt': 'utah', 'description': 'According to my iPhone, this nice picture indicates we flew over Cedar City, Utah', 'id': 30 },
      { 'title': 'Home Sweet Moisture', 'image': 'home', 'alt': 'home', 'description': 'It if looks like Portland and feels like Portland, it must be Portland', 'id': 31 }
    ]
  }
});
