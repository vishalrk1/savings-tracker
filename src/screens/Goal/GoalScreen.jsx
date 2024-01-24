import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';
import {Card, ProgressBar, useTheme} from 'react-native-paper';
import TransactionCard from '../../components/Transaction/TransactionCard';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import {createTransaction, getGoalTransactions} from '../../utils/api';
import {UserContext} from '../../provider/userProvider';
import {getProgress, getTotalAmount} from '../../utils/utils';
import {useNavigation} from '@react-navigation/native';


const GoalScreen = ({route, navigation}) => {
  const {goal} = route.params;
  const theme = useTheme();
  // const navigation = useNavigation();
  const {user} = useContext(UserContext);
  const [transactions, setTransactions] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    setIsLoading(true);
    getGoalTransactions(goal.goal_id).then(data => {
      setTransactions(data);
      setIsLoading(false);
    });
  }, [route]);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            Target: {goal.target_amount}
          </Text>
          <Text style={{fontSize: 16, color: 'green', fontWeight: 'bold'}}>
            {getProgress(transactions, goal) * 100 === 100
              ? 'Completed'
              : 'Ongoing'}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            gap: 4,
          }}>
          <ProgressBar
            progress={getProgress(transactions, goal)}
            color="green"
            style={{marginHorizontal: 20, marginTop: 4}}
          />
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginRight: 20,
              textAlign: 'right',
            }}>
            {`Amount Saved: ${getTotalAmount(transactions)}`}
          </Text>
        </View>
        <Card style={{margin: 20, height: 200}}>
          {/* Add Paragraph Component */}
        </Card>
        <Text
          style={{
            fontSize: 20,
            color: theme.colors.secondary,
            marginLeft: 20,
            fontWeight: 'bold',
          }}>
          Transaction History
        </Text>
        <View
          style={{margin: 10, marginTop: 10, flexDirection: 'column'}}>
          {/* use flatlist here insted of map */}
          {!isLoading ? (
            transactions.map((transaction, index) => (
              <TransactionCard key={index} transaction={transaction} />
            ))
          ) : (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                marginVertical: 100,
              }}>
              <ActivityIndicator size="large" color={theme.colors.secondary} />
            </View>
          )}
          {transactions.length === 0 && !isLoading && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                marginVertical: 100,
              }}>
              <Text style={{fontSize: 16, color: 'gray'}}>No Transactions</Text>
            </View>
          )}
        </View>
      </ScrollView>
      <FloatingButton onClick={() => navigation.navigate('AddTransactionScreen', {
        userId: user.id,
        goalId: goal.goal_id
      })} />
    </View>
  );
};

export default GoalScreen;
