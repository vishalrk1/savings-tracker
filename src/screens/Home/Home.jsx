import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {getAllGoals, storeUserData} from '../../utils/api';

import {User, dummyGoalsData, supabaseClient} from '../../utils/types';
import {Card, ProgressBar, useTheme} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import {useUser} from '../../provider/userProvider';
import GoalCard from '../../components/Goal/GoalCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const user = useUser();
  const [isLoading, setisLoading] = useState(false);
  const [goals, setGoals] = useState(null);

  const handelCardClick = goal => {
    navigation.navigate('GoalScreen', {
      goal: goal,
      goalName: goal.goal_name,
    });
    this.props.navigation.setParams({headerLabel: 'Goal Name'});
  };

  useEffect(() => {
    setisLoading(true);
    if (user.user) {
      getAllGoals(user.user.id)
        .then(data => {
          setGoals(data);
          setisLoading(false);
        })
        .catch(err => {
          console.log(err);
          setisLoading(false);
        });
    }
  }, [user.user]);

  return (
    <View
      style={{
        ...styles.screenContainer,
        backgroundColor: theme.colors.background,
      }}>
      {!isLoading ? (
        goals && (
          <FlatList
            style={{width: '100%', marginTop: 10}}
            // horizontal={false}
            numColumns={2}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            data={goals}
            renderItem={({item}) => <GoalCard goal={item} />}
          />
        )
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={theme.colors.primary} />
        </View>
      )}
      {!isLoading && !goals && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>No Goals Found</Text>
        </View>
      )}
      <FloatingButton
        onClick={() =>
          navigation.navigate('AddGoalScreen', {userId: user.user.id})
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default HomeScreen;
