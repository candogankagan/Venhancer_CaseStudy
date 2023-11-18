import {SafeAreaView, Text, FlatList, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {styles} from './style';
import Button from '../../components/Button';
import FavCharacter from '../../components/FavCharacter';
import Spacer from '../../components/Spacer';

const HomeScreen = ({navigation}) => {
  const favCharacters = useSelector(state => state.character.favCharacters);

  const onCharacterPressed = () => {
    navigation.navigate('List');
  };

  const onComicsPressed = () => {
    navigation.navigate('List', {isComics: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={'Characters'}
          onPress={onCharacterPressed}
          styleOverrides={{
            container: styles.subButtonContainer,
            title: styles.buttonTitle,
          }}
        />
        <Button
          title={'Cosmics'}
          onPress={onComicsPressed}
          styleOverrides={{
            container: styles.subButtonContainer,
            title: styles.buttonTitle,
          }}
        />
      </View>
      <Text style={styles.favText}>Favorite Characters</Text>
      {!favCharacters?.length > 0 && <Text>List is empty</Text>}
      <FlatList
        style={{}}
        data={favCharacters}
        ItemSeparatorComponent={() => <Spacer vertical={10} />}
        renderItem={({item}) => <FavCharacter name={item.name} id={item.id} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
