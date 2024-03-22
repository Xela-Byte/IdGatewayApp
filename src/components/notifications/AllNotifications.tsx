import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomText from '../text/CustomText';
import {sizeBlock, universalStyle} from '../../styles/UniversalStyle';
import Notification from './Notification';

type Props = {};

const AllNotifications = (props: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Notification />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...universalStyle.container,
    paddingVertical: sizeBlock.getHeightSize(20),
  },
});

export default AllNotifications;
