import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {UserContext} from '../../provider/userProvider';
import {getAllTransactions} from '../../utils/api';
import TransactionCard from '../../components/Transaction/TransactionCard';

const HistoryScreen = () => {
  const theme = useTheme();
  const {user} = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllTransactions(user.id).then(data => {
      setTransactions(data);
      setLoading(false);
    });
  }, []);

  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: theme.colors.secondary,
        }}>
        Transaction History
      </Text>
      {!loading ? (
        <FlatList
          style={{flex: 1, marginTop: 10}}
          data={transactions}
          renderItem={({item}) => {
            return <TransactionCard transaction={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={theme.colors.secondary} />
        </View>
      )}
    </View>
  );
};

export default HistoryScreen;
