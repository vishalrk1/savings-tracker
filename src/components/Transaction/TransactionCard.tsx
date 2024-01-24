import React from 'react';
import {Image, Text, View} from 'react-native';
import {Card, useTheme} from 'react-native-paper';
import {Transaction} from '../../utils/types';

interface TransactionCardProps {
  transaction: Transaction;
}

const TransactionCard: React.FC<TransactionCardProps> = ({transaction}) => {
  const theme = useTheme();

  return (
    <Card
      mode="elevated"
      elevation={1}
      style={{
        padding: 10,
        borderRadius: 4,
        marginVertical: 8,
        backgroundColor: theme.colors.surface,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.primaryContainer,
            paddingVertical: 12,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/banknote.png')}
            style={{width: 32, height: 32}}
          />
        </View>
        <View style={{flexDirection: 'column', flex: 3, gap: 4}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: theme.colors.secondary,
            }}>
            {transaction.amount}
          </Text>
          <Text style={{fontSize: 14, color: 'black', fontWeight: '400'}}>
            {transaction.transaction_date.toLocaleString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 4,
            paddingVertical: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../assets/arrow-up-down.png')}
            style={{width: 24, height: 24}}
          />
        </View>
      </View>
    </Card>
  );
};

export default TransactionCard;
