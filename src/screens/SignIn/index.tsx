import React, { useState } from 'react';
import { Text, View, Image} from 'react-native';

import { styles } from './styles';

import IllustrationImg from '../../assets/illustration.png';

export function SignIn() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
     <Image source={ IllustrationImg } />
      
    </View>
  );
}