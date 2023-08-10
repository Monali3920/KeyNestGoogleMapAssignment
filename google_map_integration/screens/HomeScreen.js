
import React from 'react';
import { ActivityIndicator, View} from 'react-native';
import {getStoreDetails} from '../api_service/GetStore'
import { useEffect, useState } from 'react';
import styles from '../components/AppStyles'
import MapComponent from '../components/MapComponent';

const HomeScreen = () => {
	const [isLoading, setLoading] = useState(true);
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
		getStoreDetails().then(storeResponse => {
			if (storeData?.length === 0) {
				setLoading(false)
				setStoreData(storeResponse);
			}
		}).catch((error) => {
        console.log(error)
		});
	}, []);

  if (!isLoading) {
    return (
        <View style={{flex: 1}}>
      {!isLoading?
            <View style={styles.container}>
               <MapComponent storeDetails={storeData}/>
            </View>:
        <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9" />
            <Text style={{fontSize:16,color:'black', alignItems:'center'}}>Loading Data...</Text>
        </View>
        } 
      </View>
    );
  }
}
export default HomeScreen;