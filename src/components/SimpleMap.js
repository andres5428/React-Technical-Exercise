import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from "styled-components";
import { GrLocationPin } from "react-icons/gr";


const AnyReactComponent = ({ text }) => <div className='userLocation'><Icon />{text}</div>;

const Icon = styled(GrLocationPin)`
  color: red;
  font-size: 2rem;
`

class SimpleMap extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            },
            zoom: 16
        };

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                this.setState({ center: { lat: position.coords.latitude, lng: position.coords.longitude } })
                // currentComponent.setState({zoom: 11});
            }); 
        } else {
            alert("We don´t have access to your location");
        }
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    <AnyReactComponent
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        text="Your position"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;