import React, {useState} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTheme, TextInput, Button, Card} from 'react-native-paper';
import {createGoal, createTransaction} from '../../utils/api';
import {useNavigation} from '@react-navigation/native';

const AddTransactionScreen = ({route}) => {
  const theme = useTheme();
  const {userId, goalId} = route.params;
  const [amount, setAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handelSubmit = () => {
    setIsLoading(true);
    createTransaction({
      amount: amount,
      goal_id: goalId,
      user_id: userId,
      transaction_date: new Date(),
    }).then(() => {
      setIsLoading(false);
      navigation.goBack();
    });
  };

  return (
    <ScrollView style={{flex: 1, padding: 16}}>
      {!isLoading ? (
        <View>
          <Card
            mode="elevated"
            style={{marginVertical: 10, backgroundColor: 'white'}}>
            <Card.Content>
              <Text style={{...style.heading, color: theme.colors.secondary}}>
                Add Amount
              </Text>
              <View style={{marginVertical: 10}}>
                <TextInput
                  label="Amount"
                  mode="outlined"
                  inputMode="text"
                  keyboardType="numeric"
                  style={{marginVertical: 5}}
                  onChangeText={text => setAmount(text)}
                />
              </View>
              <Button labelStyle={{}} mode="contained" onPress={handelSubmit}>
                Finish
              </Button>
            </Card.Content>
          </Card>
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
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AddTransactionScreen;
