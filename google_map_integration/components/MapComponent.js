
import React from 'react';

import MapView, {Marker} from "react-native-maps";
import styles from '../components/AppStyles';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { useRef, useMemo, useState } from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import StoreBottomSheetModal from './StoreBottomSheetModal';

const MapComponent = ({storeDetails = [{}]}) => {
    const [storeInfo, setStoreInfo] = useState([]);
    const bottomSheetModalRef = useRef(null);
    const snapPoints = useMemo(() => ["60%"], []);
    const openModal = (data) => {
        setStoreInfo(data)
     bottomSheetModalRef.current.present();
   };
   
return(
<GestureHandlerRootView style={styles.container}>
<BottomSheetModalProvider>
    <MapView
        style={styles.map}
        initialRegion={{
          latitude: 51.5025,
          longitude: -0.1414,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
      
       { storeDetails.map((data) => {
        return(
          <Marker 
          key={data.StoreId}
          coordinate={{
            latitude: (data.Latitude !== null) ? parseFloat(data.Latitude): 0, 
            longitude:(data.Longitude !== null) ? parseFloat(data.Longitude): 0
            }}
            image={require('../assets/images/marker.png')}
            onPress={(e) => openModal(data)}>
                
        </Marker>
        )
      })} 

    <BottomSheetModal
       ref={bottomSheetModalRef}
       index={0}
       snapPoints={snapPoints}
       style={styles.bottomSheet}
     >
        <StoreBottomSheetModal data={storeInfo} />
     </BottomSheetModal> 

      </MapView>
</BottomSheetModalProvider>
</GestureHandlerRootView>
    );

}

export default MapComponent;