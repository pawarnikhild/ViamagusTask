import React from 'react';
import {View, FlatList} from 'react-native';

import BadgeCard from '../components/BadgeCard';

import {badgesCardData} from '../utils/DummyData';

import BadgesScreenStyle from '../styles/BadgesScreenStyle';

const BadgesScreenView = () => {
  return (
    <View style={BadgesScreenStyle.container}>
      <FlatList
        data={badgesCardData}
        renderItem={({item}) => (
          <BadgeCard
            image={item.image}
            title={item.title}
            description={item.description}
            cardCount={item.cardCount}
            style={BadgesScreenStyle.badgecard}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BadgesScreenView;
