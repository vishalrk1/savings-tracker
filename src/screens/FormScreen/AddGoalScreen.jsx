import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTheme, TextInput, Button} from 'react-native-paper';
import {createGoal} from '../../utils/api';
import {useNavigation} from '@react-navigation/native';

const AddGoalScreen = ({route}) => {
  const theme = useTheme();
  const {userId} = route.params;
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handelSubmit = () => {
    setIsLoading(true);
    createGoal({
      goal_name: goalName,
      target_amount: targetAmount,
      user_id: userId,
      start_date: new Date(),
    }).then(() => {
      setIsLoading(false);
      navigation.goBack();
    });
  };

  return (
    <ScrollView
      style={{flex: 1, padding: 20, backgroundColor: theme.colors.background}}>
      {!isLoading ? (
        <View>
          <Text style={{...style.heading, color: theme.colors.secondary}}>
            Create New Target
          </Text>
          <View style={{marginVertical: 10}}>
            <TextInput
              label="Goal Name"
              mode="outlined"
              inputMode="text"
              style={{marginVertical: 5}}
              onChangeText={text => setGoalName(text)}
            />
            <TextInput
              label="Target Amount"
              mode="outlined"
              inputMode="text"
              keyboardType="numeric"
              style={{marginVertical: 5}}
              onChangeText={text => setTargetAmount(text)}
            />
          </View>
          <Button labelStyle={{}} mode="contained" onPress={handelSubmit}>
            Submit
          </Button>
        </View>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={theme.colors.secondary} />
        </View>
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default AddGoalScreen;
