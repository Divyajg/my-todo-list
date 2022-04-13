import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';

export default function App() {
  return (
    <View>
    <View style={styles.mobileLayout}>
      <Text style={styles.title}>Today's List</Text>
      <View style={styles.items}>
        <Task todo='Finish todo App'/>
        <Task todo='Pickup Dhruv'/>
        <Task todo='Call Shankar'/>
        <Task todo='Prepare Dinner'/>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mobileLayout: {
    width: 300,
    height: 600,
    backgroundColor: '#E8EAED',
    borderColor: '#000',
    alignContent: 'center',
    margin:100,
    padding: 10,
    borderRadius:10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom:20,
  },
  items: {
    
  },
});
