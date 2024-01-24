import {supabaseClient} from './supabaseClient';
import {Goal, Transaction, User} from './types';

export const storeUserData = async (user: User): Promise<void> => {
  try {
    const {data, error} = await supabaseClient.from('users').insert(user);

    if (error) {
      console.error('Error storing user data:', error);
      throw new Error('Failed to store user data.');
    }

    console.log('User data stored successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
    throw new Error('Unexpected error occurred.');
  }
};

export const getUserData = async (email: string) => {
  try {
    const {data, error} = await supabaseClient
      .from('users')
      .select()
      .eq('email', email);

    console.log(data);
  } catch (error) {
    console.log('Error: ', error);
  }
};

export const getAllGoals = async (userId: string) => {
  try {
    let {data, error} = await supabaseClient
      .from('Goal')
      .select('*')
      .eq('user_id', userId);
    return data;
  } catch (error) {
    throw new Error('Unexpected error occurred.');
  }
};

export const getGoalTransactions = async (goalId: string) => {
  try {
    let {data, error} = await supabaseClient
      .from('Transaction')
      .select('*')
      .eq('goal_id', goalId);
    return data;
  } catch (error) {
    throw new Error('Unexpected error occurred.');
  }
};

export const getAllTransactions = async (userId: string) => {
  try {
    let {data, error} = await supabaseClient
      .from('Transaction')
      .select('*')
      .eq('user_id', userId);
    return data;
  } catch (error) {
    throw new Error('Unexpected error occurred.');
  }
};

export const createGoal = async (goal: Goal) => {
  try {
    const {data, error} = await supabaseClient.from('Goal').insert(goal);

    if (error) {
      console.error('Error creating goal:', error);
      throw new Error('Failed to create goal.');
    }

    console.log('Goal created successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
    throw new Error('Unexpected error occurred.');
  }
};

export const updateGoal = async (goal: any) => {
  try {
    const {data, error} = await supabaseClient
      .from('Goal')
      .update(goal)
      .eq('id', goal.id);

    if (error) {
      console.error('Error updating goal:', error);
      throw new Error('Failed to update goal.');
    }

    console.log('Goal updated successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
    throw new Error('Unexpected error occurred.');
  }
};

export const deleteGoal = async (goalId: string) => {
  try {
    const {data, error} = await supabaseClient
      .from('Goal')
      .delete()
      .eq('id', goalId);

    if (error) {
      console.error('Error deleting goal:', error);
      throw new Error('Failed to delete goal.');
    }

    console.log('Goal deleted successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
    throw new Error('Unexpected error occurred.');
  }
};

export const createTransaction = async (transaction: Transaction) => {
  try {
    const {data, error} = await supabaseClient
      .from('Transaction')
      .insert(transaction);

    if (error) {
      console.error('Error creating transaction:', error);
      throw new Error('Failed to create transaction.');
    }

    console.log('Transaction created successfully:', data);
  } catch (error) {
    console.error('Unexpected error:', error);
    throw new Error('Unexpected error occurred.');
  }
};
