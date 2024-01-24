import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, ProgressBar, useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const GoalCard = ({goal}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <Card
      mode="elevated"
      style={{margin: 10, flex: 1}}
      onPress={() =>
        navigation.navigate('GoalScreen', {
          goal: goal,
          goalName: goal.goal_name,
        })
      }>
      <View style={styles.goalCard}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: theme.colors.secondary,
          }}>
          {goal.goal_name}
        </Text>
        <Text
          style={{
            color: theme.dark ? 'white' : 'black',
            fontWeight: '400',
            fontSize: 15,
          }}>
          Target:{' '}
          {
            <Text
              style={{
                color: theme.dark ? 'white' : 'black',
                fontWeight: '400',
                fontSize: 15,
              }}>
              {goal.target_amount}
            </Text>
          }
        </Text>
        {/* <ProgressBar progress={0.5} color="green" /> */}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
    goalCard: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
        padding: 16,
        gap: 8,
      },
      goalCardContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default GoalCard;
