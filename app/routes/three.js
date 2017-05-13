import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return [
    {'title': 'Leaving Oregon behind', 'image': 'columbia', 'description': 'A nice shot of the Columbia River from the airplane', 'alt': 'Columbia River', 'id': 0},
    {'title': 'Descending into Phoenix', 'image': 'paradise', 'description': 'Just Northeast of Phoenix is a place called Paradise Valley', 'alt': 'Paradise Valley', 'id': 1},
    {'title': 'Oooh la la, a rainbow spectrum on the Wing', 'image': 'rainbow', 'description': 'How did I get that rainbow spectrum to appear in the picture you ask?  I took this picture through my sunglasses lens!', 'alt': 'Rainbow', 'id': 2},
    {'title': 'Scottsdale, Arizona, what\'s the big deal?', 'image': 'scottsdale', 'description': 'Just south of Paradise Valley is the famous Scottsdale, Arizona.  All I can say is: We\'re heading closer to Phoenix.', 'alt': 'Scottsdale', 'id': 3},
    {'title': 'Tempe, Arizona: Didn\'t see any Sun Devils from the Plane!', 'image': 'tempe', 'description': 'Just to the east of the airport is Tempe, home of the Arizona State Sun Devils. ', 'alt': 'Tempe', 'id': 4},
    {'title': 'Clouds sitting on top of the Mountain', 'image': 'flagstaff', 'description': 'Mom took this picture on the way to Flagstaff.  I had the scratched windows on each flight in Flagstaff.', 'alt': 'Flagstaff', 'id': 5},
    {'title': 'Is that Snow?', 'image': 'snow', 'description': 'We landed in Flagstaff, it was 45 degrees and had snowed earlier in the day.  There\'s proof!', 'alt': 'Snow', 'id': 6},
    {'title': 'Which way to go?', 'image': 'albuquerque', 'description': 'You know you\'re in Arizona if you have to decide between Los Angeles and Albuquerque.  Now I know how Bugs Bunny feels!', 'alt': 'Albuquerque', 'id': 7},
    {'title': 'We headed towards Los Angeles', 'image': 'los_angeles', 'description': 'Who know I was just 481 miles away from my original Birthday Party choice.', 'alt': 'Los Angeles', 'id': 8},
    {'title': 'What\'s up with those clouds?', 'image': 'dark_cloud', 'description': 'Weather wise this was not the way to start, from 80 degree Portland to 45 degree Arizona.  How ironic?', 'alt': 'Dark Cloud', 'id': 9}
  ];
}
});
