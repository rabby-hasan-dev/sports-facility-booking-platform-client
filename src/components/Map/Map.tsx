

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";


const Map = () => {
    const position = [23.820626491316503, 90.37038287534364]
  
    return (

        <>
            <MapContainer className=" h-[480px]  w-[364px]  sm:w-[400px] md:w-[410px]  lg:w-[600px] xl:w-[700px]  2xl:w-[800px] rounded-xl "  center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 
                />
                <Marker position={position} >
                    <Popup>
                        Mirpur,Dhaka 1216, Dhaka, Bangladesh
                    </Popup>
                </Marker>
            </MapContainer>
        </>

    );
};

export default Map;