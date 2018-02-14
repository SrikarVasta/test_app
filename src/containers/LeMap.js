
import React from 'react'
import PropTypes from 'prop-types'
import MapComponent from '../components/MapComponent'
import {addMarker} from '../actions'
import {connect} from 'react-redux'

let LeMap = ({todos, onTodoClick, maps, dispatch}) => {
      let lat = 35
      let lng = 36
      let lock
      let text
      return(
            <div className="map-container">
            <div className="map-overlay">
                <button> B 1</button>
                <button> B 2</button>
                <button> B 3</button>
            </div>
            <MapComponent
              isMarkerShown={true}
              lock={(maps && maps.length)>0?+maps[maps.length-1].lock:0}
              text={(maps && maps.length)>0?maps[maps.length-1].text:0}
              lat2={(maps && maps.length)>0?+maps[maps.length-1].lat:0}
              lng2={(maps &&maps.length>0)?+maps[maps.length-1].lng:0}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkosIe81_iC3yd44WuzN8RtRAXkhvW-cg&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
            <div>
                        <form
                            onSubmit={e => {
                              e.preventDefault()
                              if (!lat.value.trim() || !lng.value.trim()) {
                                  return
                              }
                              dispatch(addMarker(lat.value, lng.value, lock.checked, text.value))
                              lat.value = ''
                              lng.value=''
                              text.value=''
                            }}>
                            <label>
                                lat
                                <input type="number" ref={node => {
                                lat = node
                            }}/>
                            </label>
                            <label>
                                long
                                <input  type="number" ref={node => {
                                    lng = node
                                }}/>
                            </label>
                            <label>
                                Text
                                <input ref={node => {
                                    text = node
                                }}/>
                            </label>
                            <label>
                                Lock
                                <input type="checkbox" ref={node => {
                                    lock = node
                                }}/>
                            </label>
                            
                            
                            
                           
                            
                            <button type="submit">
                                Refresh
                            </button>
                        </form>
                    </div>
            </div>
            )
}

LeMap.propTypes = {
}
const mapStateToProps = state => {
  console.log(state)
  return {
      maps: state.maps
  }
}
LeMap = connect(mapStateToProps)(LeMap)

export default LeMap
