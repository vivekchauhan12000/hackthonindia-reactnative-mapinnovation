import React, { Component } from 'react';
import { StyleSheet, Text, View,Dimensions ,ImageBackground ,TouchableOpacity,Image} from 'react-native';
import MapView from 'react-native-maps';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';




import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
maptyle=
  [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8ec3b9"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1a3646"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#64779e"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#334e87"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6f9ba5"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "poi.business",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3C7680"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#304a7d"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c6675"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#255763"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#b0d5ce"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3a4762"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0e1626"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#4e6d70"
        }
      ]
    }
  ]

class HomeScreen extends React.Component {
   constructor(){
    super();
    this.state = {
        ready: false,
        where: {lat:26.835690, lng:75.829590},
        error: null
    }
}

componentDidMount(){
    let geoOptions = {
        enableHighAccuracy: true,
        timeOut: 200,
        maximumAge: 6
    };
    this.setState({ready:false, error: null });
    navigator.geolocation.getCurrentPosition( this.geoSuccess, 
                                            this.geoFailure,
                                            geoOptions);
}

// delete this line
geoSuccess = (position) => {
    
    
    this.setState({
        ready:true,
        where: {lat: position.coords.latitude,lng:position.coords.longitude }
    })
}
geoFailure = (err) => {
    this.setState({error: err.message});
}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop:90 }}>
        
        <MapView
        style={styles.mapStyle}
         showsUserLocation= {true}
         followUserLocation = {true}
        customMapStyle={maptyle} 

        initialRegion={{
          latitude: 26.835690,
            longitude:75.829590,
          latitudeDelta: 0.0032,
          longitudeDelta: 0.0012,
        }}
        ></MapView>
        
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground source={require("./assets/screen2.png")} style={{width: '100%', height: '100%'}}>
   
  </ImageBackground>
      </View>
    );
  }
}



class natureScreen extends React.Component {
  constructor(){
    super();
    this.state = {
        ready: false,
        where: {lat:26.835690, lng:75.829590},
        error: null
    }
}
componentDidMount(){
    let geoOptions = {
        enableHighAccuracy: true,
        timeOut: 200,
        maximumAge: 6
    };
    this.setState({ready:false, error: null });
    navigator.geolocation.getCurrentPosition( this.geoSuccess, 
                                            this.geoFailure,
                                            geoOptions);
}

// delete this line
geoSuccess = (position) => {
    
    
    this.setState({
        ready:true,
        where: {lat: position.coords.latitude,lng:position.coords.longitude }
    })
}
geoFailure = (err) => {
    this.setState({error: err.message});
}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',paddingTop:90 }}>
        <Text>nature</Text>
        <MapView
        
        style={styles.mapStyle}
        showsUserLocation= {true}
         
        
        initialRegion={{
          latitude: 26.835690,
            longitude:75.829590,
          latitudeDelta: 0.0132,
          longitudeDelta: 0.0112,
        }}
        />
          
      </View>
    );
  }
}



const TabNavigator = createMaterialBottomTabNavigator({
  Surrounding: SettingsScreen,
  Urban: HomeScreen,
  
  Naturfy:natureScreen,
 
  
},
{
  
  initialRouteName: 'Surrounding',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#A937DC' },
},
);

export default createAppContainer(TabNavigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:30,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  gamebutton: {
    marginTop: 10,
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: "bold",
    borderWidth: 5,
    paddingVertical: 4,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#454648",
    backgroundColor: '#454648'
  }
});
