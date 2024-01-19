import React, {useState} from 'react';

import GameScreenView from '../view/GameScreenView';

const GameScreen = () => {
  const [bottomModalVisible, setBottomModalVisible] = useState(false);

  return (
    <GameScreenView
      bottomModalVisible={bottomModalVisible}
      setBottomModalVisible={setBottomModalVisible}
    />
  );
};

export default GameScreen;
