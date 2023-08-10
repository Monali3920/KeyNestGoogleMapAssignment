import React from 'react';
import { View, Text, Image, StyleSheet, Button} from 'react-native';
import styles from '../components/AppStyles';
import {StringConstants} from '../utils/StringConstants';

const StoreBottomSheetModal = ({data}) => {
    console.log("data value for sore name", data.StoreAddress);
    return(
        <View style={styles.bottomSheetContainer}>
            <Text style={styles.title}>{data.StoreName}</Text>
            <View style={styles.row}>
                <Text style={styles.title_small}>Directions</Text>
                <Image
                style={styles.image}
                source={require('../assets/images/diection.png')}
            />
            </View>

            <View style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}/>
            <View style={styles.row}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/hour.png')}
                    />
                    <Text style={styles.title_small}>Hours</Text>                   
            </View>
           
            <Text style={styles.title}>{data.StoreTimings}</Text>  

            <View style={styles.row}>
                    <Image
                        style={styles.image}
                        source={require('../assets/images/address.png')}
                    />
                    <Text style={styles.title_small}>Address</Text>                   
            </View>

            <Text style={styles.title}>{data.StoreAddress}</Text>  

            <View style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}/>

            <Button
              title="Add a new key"
              titleStyle={{
                color: 'white',
                marginHorizontal: 20,
              }}
            />
        </View>
    );
}

export default StoreBottomSheetModal;