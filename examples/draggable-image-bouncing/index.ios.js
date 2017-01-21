/**
 * Entry point DraggableView demo 
 */
'use strict';

var DemoScreen = require('./DemoScreen')
var React = require('react')
import { AppRegistry } from 'react-native'


var component = React.createClass({


       render: function() {
          return (  <DemoScreen/> )
       }

})




AppRegistry.registerComponent('DraggableDrawerImageBouncing', () => component);
