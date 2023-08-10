import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    loader: {
      flex:1,
      alignItems: "center",
  },
  markerImage: {
    width: 100,
    height: 100
  },
  bottomSheetContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  title:{
    margin: 10,
    fontSize: 20
    },
  image:{
    height:15,
    width: 15,
    margin: 10,
  },
  title_small:{
    margin: 10,
    fontSize: 10
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    buttonStyle:{
        height: 40,
        width: 80,
        margin: 10,
        padding: 20,
        backgroundColor: "green",
        borderRadius: 30
    }
  });

  export default styles;