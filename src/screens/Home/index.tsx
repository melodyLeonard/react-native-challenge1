import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CardItem from '../../components/Card';
import Header from '../../components/Header';
import ServiceItem from '../../components/ServiceItem';
import TransactionItem from '../../components/TransactionItem';
import {Flex, Lead, Paragraph} from '../../components/Typography';
import global from '../../global';
import useTheme from '../../hooks/useTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const avatar =
  'https://static.wikia.nocookie.net/intothebadlands/images/d/dd/ItB_S1_E2_0303.jpg/revision/latest/top-crop/width/300/height/300?cb=20180624130831';

const Home: FC = () => {
  const {colors, gutter} = useTheme();
  return (
    <View style={styles.container}>
      <Header profile={avatar} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          contentContainerStyle={{padding: gutter.md}}
          showsHorizontalScrollIndicator={false}
          horizontal>
          <CardItem
            number="4410235123791414"
            expiry="12/25"
            icon={
              <Ionicons name="nutrition-sharp" size={34} color={colors.white} />
            }
            name="Arun Ahuja"
            currency="USD"
            amount={48006}
            color={colors.pink}
            accentColor={colors.primary}
            style={{marginRight: gutter.md}}
          />
          <CardItem
            number="4410235123791414"
            expiry="12/25"
            icon={<Ionicons name="paw" size={34} color={colors.white} />}
            name="Arun Ahuja"
            currency="NGN"
            amount={48006}
            color={colors.gray_text}
            accentColor={colors.success}
            style={{marginRight: gutter.md}}
          />
          <CardItem
            number="4410235123791414"
            expiry="12/25"
            icon={
              <Ionicons name="nuclear-sharp" size={34} color={colors.white} />
            }
            name="Arun Ahuja"
            currency="USD"
            amount={48006}
            color={colors.orange}
            accentColor={colors.text}
          />
        </ScrollView>
        <View style={styles.service}>
          <Lead style={{marginBottom: gutter.sm}}>Service</Lead>
          <Flex.Row>
            <ServiceItem
              color={colors.orange}
              icon={
                <Ionicons name="server-sharp" size={34} color={colors.white} />
              }
            />
            <ServiceItem
              color={colors.pink}
              icon={<Ionicons name="share" size={34} color={colors.white} />}
            />
            <ServiceItem
              color={colors.success}
              icon={
                <Ionicons
                  name="shield-checkmark"
                  size={34}
                  color={colors.white}
                />
              }
            />
            <ServiceItem
              color={colors.danger}
              icon={<Ionicons name="terminal" size={34} color={colors.white} />}
            />
          </Flex.Row>
        </View>

        <View style={styles.service}>
          <Lead style={{marginBottom: gutter.sm}}>Recent Transactions</Lead>

          <TransactionItem
            color={colors.success}
            icon={
              <Ionicons name="logo-angular" size={34} color={colors.white} />
            }
            amount={280}
            title="Dribble"
            subTitle="Payment Received"
            style={{marginBottom: gutter.md}}
          />
          <TransactionItem
            color={colors.danger}
            icon={
              <Ionicons name="logo-firefox" size={34} color={colors.white} />
            }
            amount={280}
            title="Google Wallet"
            subTitle="Payment via wallet can be done"
            style={{marginBottom: gutter.md}}
          />
          <TransactionItem
            color={colors.pink}
            icon={
              <Ionicons name="logo-github" size={34} color={colors.white} />
            }
            amount={280}
            title="Dribble"
            subTitle="Payment Received"
            style={{marginBottom: gutter.md}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: global.gutter.md,
    marginBottom: global.gutter.lg,
  },
  service: {
    padding: global.gutter.sm,
  },
});
