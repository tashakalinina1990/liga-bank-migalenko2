import React from "react";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const getHeightMap = () => {
    if (document.documentElement.clientWidth > 767) {
        return (`462px`);
    }

    return(`381px`);
}

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: getHeightMap() }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={4}
    defaultCenter={{ lat: 57.96203128253547, lng: 59.995885925354315 }}
  >
    <Marker position={{ lat: 55.74805918921878, lng: 37.577693853969066 }} onClick={props.onMarkerClick} />
    <Marker position={{ lat: 51.55898716404956, lng: 45.995782866454924 }} onClick={props.onMarkerClick} />
    <Marker position={{ lat: 55.81402793738874, lng: 49.082787645688 }} onClick={props.onMarkerClick} />
    <Marker position={{ lat: 57.186073280994805, lng: 65.53104566851279 }} onClick={props.onMarkerClick} />
    <Marker position={{ lat: 55.03219148501268, lng: 73.42163204143563 }} onClick={props.onMarkerClick} />
  </GoogleMap>
)

const Map = () => {
    return (
        <section id="map" className="map">
            <div className="map__center-wrapper">
                <h2 className="map__title">Отделения Лига Банка</h2>
                <div className="map__wrapper">
                    <MyMapComponent/>              
                </div>
 
            </div>
            
        </section>
    )
}

export default Map;