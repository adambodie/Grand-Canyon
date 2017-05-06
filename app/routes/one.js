import Ember from 'ember';

export default Ember.Route.extend({
    model(){
 return[
        {'language': 'English', 'name': 'Grand Canyon', 'id': 0},
        {'language': 'Hopi', 'name': 'Ongtupqa', 'id': 1},
        {'language': 'Yavapai', 'name': 'Wi:kaʼi:la', 'id': 2},
        {'language': 'Spanish', 'name': 'Gran Cañón', 'id': 3}
        ]
    }
});
