import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Table from 'react-bootstrap/lib/Table';
import {sort,paginate} from '../actions'
import {  withScriptjs, withGoogleMap, GoogleMap, Marker, Polygon } from "react-google-maps"
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager"

const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");
const coords = [
  { lat: 0.397, lng: 0.397 },
  { lat: -2.397, lng: 3.397 },
  { lat: -1.397, lng: -1.397 },
  { lat: 0.397, lng: 0.397 },
];
let onMarkerClick= () => (marker) => {  //<- event object, not a marker object!  
  console.log(1 )
}
const MapComponent = withScriptjs(withGoogleMap((props) =>
  {
    console.log(props)
    let disable =  false
    return(<GoogleMap
            onClick={onMarkerClick}
            defaultOptions={{
              scrollwheel :  (props.lock==1)?false:true,
              draggable: (props.lock==1)?false:true 
            }}
            
            defaultZoom={8}
            defaultCenter={{ lat: 34.397, lng: 34.397 }}
            center={{ lat: props.lat2 || 0, lng: props.lng2 || 0 }}
          >
            <DrawingManager />
            {props.isMarkerShown ? (
            <MarkerWithLabel
              
              position={{ lat: props.lat2 || 0, lng: props.lng2 || 0 }}
              labelAnchor={{ lat: props.lat2 || 0, lng: props.lng2 || 0 }}
              labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
            >
              <div>{props.text || 'hello'}</div>
            </MarkerWithLabel>
            
            ) : "" }
            {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
          </GoogleMap>)}
))


export default MapComponent