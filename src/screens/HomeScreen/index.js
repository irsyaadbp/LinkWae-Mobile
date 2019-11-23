import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  RefreshControl,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Icon } from "native-base";

import styles from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { getUserById } from '../../redux/actions/auth';
import Amount from "../TopUpScreen";

const { width, height } = Dimensions.get("window");
export default HomeScreen = props => {
  const [topCarouselIndex, setTopCarouselIndex] = useState(0);
  const [isMerchantsOn, setIsMerchantsOn] = useState(false);
  const [promoAlign, setPromoAlign] = useState("start");
  const [infoAlign, setInfoAlign] = useState("start");
  const [merchantAlign, setMerchantAlign] = useState("start");
  const [topUp, setTopUp] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const { authResponse } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    // axios
    //   .get(
    //     // `http://ec2-34-205-127-114.compute-1.amazonaws.com:5000/transactions`
    //     `http://ec2-34-205-127-114.compute-1.amazonaws.com:5000/id/${authResponse.user.id}`
    //   )
    //   .then(response => {
    //     console.log(response, "hai");
    //     setListHistory(response.data.response);
    //     setRefreshing(false);
    //   });

    dispatch(getUserById(authResponse.user.id)).then(() => setRefreshing(false)).catch(() => setRefreshing(false))
  }, [refreshing]);

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
      <Amount navigation={props.navigation} visible={topUp} hide={() => setTopUp(false)} />
      {/* Foto profil, Name, Phone Books Button, Favorite Button */}
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.profileLeft}
          onPress={() => props.navigation.navigate("ProfileScreen")}
        >
          <Image
            style={styles.profileImage}
            source={{
              uri: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
            }}
          ></Image>
          <Text style={styles.profileName}>{authResponse.user.name}</Text>
        </TouchableOpacity>
        <View style={styles.profileRight}>
          <Icon
            style={styles.profilePhoneBook}
            name="bookmarks"
            onPress={() => props.navigation.navigate("ComingSoonScreen")}
          ></Icon>
          <Icon
            style={styles.profileFavorite}
            name="heart"
            onPress={() => props.navigation.navigate("ComingSoonScreen")}
          ></Icon>
        </View>
      </View>
      {/* ====================================================== */}

      <View style={styles.balance}>
        {/* Balance, Bonus Balance, Logo */}
        <View style={styles.balanceSection}>
          <TouchableOpacity
            style={styles.balanceLeft}
            onPress={() => props.navigation.navigate("ComingSoonScreen")}
          >
            <Text style={styles.balanceAccount}>
              Rp {authResponse.user.balance}
            </Text>
            <View style={styles.balanceBonus}>
              <Text style={styles.balanceBonusText}>Bonus Balance 0</Text>
              <Icon
                style={styles.balanceBonusIcon}
                name="arrow-round-forward"
              />
            </View>
          </TouchableOpacity>
          <View style={styles.balanceRight}>
            <Image
              style={styles.balanceImage}
              source={{
                uri:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/LinkAja.svg/1200px-LinkAja.svg.png"
              }}
            ></Image>
          </View>
        </View>
        {/* Send Money, Top Up, Ticket Code, See All */}
        <View style={styles.shortcut}>
          <TouchableOpacity
            style={styles.shortcutItem}
            onPress={() => props.navigation.navigate("SendMoneyScreen")}
          >
            <Image
              style={styles.shortcutImage}
              source={require("../../../assets/sendfund.png")}
            ></Image>
            <Text style={styles.shortcutText}>Send Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shortcutItem} onPress={() => setTopUp(true)}>
            <Image
              style={styles.shortcutImage}
              source={require("../../../assets/topup.png")}
            ></Image>
            <Text style={styles.shortcutText}>Top Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shortcutItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.shortcutImage}
              source={require("../../../assets/ticketcode.png")}
            ></Image>
            <Text style={styles.shortcutText}>Ticket Code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shortcutItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.shortcutImage}
              source={require("../../../assets/all.png")}
            ></Image>
            <Text style={styles.shortcutText}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ====================================================== */}

      {/* Add Payment Method */}
      <TouchableOpacity style={styles.addPayment} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
        <Image
          style={styles.addPaymentImage}
          source={require("../../../assets/addpaymethod.png")}
        ></Image>
        <View style={styles.addPaymentText}>
          <Text style={styles.addPaymentTitle}>Add Payment Method</Text>
          <Text style={styles.addPaymentSubtitle}>
            Link your debit card and other source of fund
          </Text>
        </View>
        <Icon style={styles.addPaymentIcon} name="add"></Icon>
      </TouchableOpacity>
      {/* ====================================================== */}
      <View style={styles.feature}>
        {/* Pulsa Data, Games, Electricity, PDAM */}
        <View style={styles.featureRow}>
          <TouchableOpacity style={styles.featureItem} onPress={() => props.navigation.navigate('PulsaDataComponent')}>
            <Image
              style={styles.featureImage}
              source={require("../../../assets/pulsadata.png")}
            ></Image>
            <Text style={styles.featureText}>Pulsa/Data</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.featureImage}
              source={require("../../../assets/games.png")}
            ></Image>
            <Text style={styles.featureText}>Games</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.featureImage}
              source={require("../../../assets/electricity.png")}
            ></Image>
            <Text style={styles.featureText}>Electricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.featureImage}
              source={require("../../../assets/pdam.png")}
            ></Image>
            <Text style={styles.featureText}>PDAM</Text>
          </TouchableOpacity>
        </View>
        {/* LinkAja Berbagi, Kartu Uang Elektronik, Transport, More */}
        <View style={styles.featureRow}>
          <TouchableOpacity style={styles.featureItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.featureImage}
              source={require("../../../assets/berbagi.png")}
            ></Image>
            <Text style={styles.featureText}>LinkAja Berbagi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.featureImage}
              source={require("../../../assets/emoney.png")}
            ></Image>
            <Text style={styles.featureText}>Kartu Uang Electricity</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.featureImage}
              source={require("../../../assets/transport.png")}
            ></Image>
            <Text style={styles.featureText}>Transport</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureItem} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
            <Image
              style={styles.featureImage}
              source={require("../../../assets/more.png")}
            ></Image>
            <Text style={styles.featureText}>More</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* ====================================================== */}

      {/* Carousell Top 5 Info */}
      <View style={styles.topCarousel}>
        <Carousel
          sliderWidth={width}
          itemWidth={0.8 * width}
          data={[
            { url: require("../../../assets/promo1.jpg") },
            { url: require("../../../assets/promo2.jpg") },
            { url: require("../../../assets/promo3.jpg") },
            { url: require("../../../assets/promo4.jpg") },
            { url: require("../../../assets/promo5.jpg") }
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.topCarouselItem} onPress={() => props.navigation.navigate('DealsDetailComponent')}>
              <Image style={styles.topCarouselImage} source={item.url}></Image>
            </TouchableOpacity>
          )}
          onSnapToItem={index => setTopCarouselIndex(index)}
          autoplay={true}
          autoplayInterval={10000}
          loop={true}
        />
        <Pagination
          dotsLength={5}
          activeDotIndex={topCarouselIndex}
          dotColor="red"
          inactiveDotColor="#F2F2F2"
        />
      </View>
      {/* ====================================================== */}

      <View style={styles.promo}>
        {/* Promo, See All */}
        <View style={styles.promoHeader}>
          <Text style={styles.promoHeaderTitle}>Promo</Text>
          <Text style={styles.promoHeaderLink}>See All</Text>
        </View>
        {/* Carosell List Promo with Title and Summary */}
        <View style={styles.promoCarousel}>
          <Carousel
            sliderWidth={width - 20}
            itemWidth={0.8 * width}
            inactiveSlideScale={1}
            activeSlideAlignment={promoAlign}
            onSnapToItem={index =>
              index == 4 ? setPromoAlign("end") : setPromoAlign("start")
            }
            data={[
              {
                url: require("../../../assets/promo1.jpg"),
                title: "This is Title of Promo1",
                summary:
                  "This is summary text of promo or short description of promo"
              },
              {
                url: require("../../../assets/promo2.jpg"),
                title: "This is Title of Promo2",
                summary:
                  "This is summary text of promo or short description of promo"
              },
              {
                url: require("../../../assets/promo3.jpg"),
                title: "This is Title of Promo3",
                summary:
                  "This is summary text of promo or short description of promo"
              },
              {
                url: require("../../../assets/promo4.jpg"),
                title: "This is Title of Promo4",
                summary:
                  "This is summary text of promo or short description of promo"
              },
              {
                url: require("../../../assets/promo5.jpg"),
                title: "This is Title of Promo5",
                summary:
                  "This is summary text of promo or short description of promo"
              }
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.promoCarouselItem} onPress={() => props.navigation.navigate('DealsDetailComponent')}>
                <Image
                  style={styles.promoCarouselImage}
                  source={item.url}
                ></Image>
                <Text style={styles.promoCarouselTitle}>{item.title}</Text>
                <Text style={styles.promoCarouselSubtitle}>{item.summary}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      {/* ====================================================== */}

      <View style={styles.promo}>
        {/* Information */}
        <View style={styles.promoHeader}>
          <Text style={styles.promoHeaderTitle}>Information</Text>
        </View>
        {/* Carousell List Information with Title and Summary */}
        <View style={styles.promoCarousel}>
          <Carousel
            sliderWidth={width - 20}
            itemWidth={0.8 * width}
            inactiveSlideScale={1}
            activeSlideAlignment={infoAlign}
            onSnapToItem={index =>
              index == 4 ? setInfoAlign("end") : setInfoAlign("start")
            }
            data={[
              {
                url: require("../../../assets/promo1.jpg"),
                title: "This is Title of Information",
                summary:
                  "This is summary text of Information or short description of Information"
              },
              {
                url: require("../../../assets/promo2.jpg"),
                title: "This is Title of Information",
                summary:
                  "This is summary text of Information or short description of Information"
              },
              {
                url: require("../../../assets/promo3.jpg"),
                title: "This is Title of Information",
                summary:
                  "This is summary text of Information or short description of Information"
              },
              {
                url: require("../../../assets/promo4.jpg"),
                title: "This is Title of Information",
                summary:
                  "This is summary text of Information or short description of Information"
              },
              {
                url: require("../../../assets/promo5.jpg"),
                title: "This is Title of Information",
                summary:
                  "This is summary text of Information or short description of Information"
              }
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.promoCarouselItem} onPress={() => props.navigation.navigate('DealsDetailComponent')}>
                <Image
                  style={styles.promoCarouselImage}
                  source={item.url}
                ></Image>
                <Text style={styles.promoCarouselTitle}>{item.title}</Text>
                <Text style={styles.promoCarouselSubtitle}>{item.summary}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      {/* ====================================================== */}

      <View style={styles.merchants}>
        {/* Nearby Merchants */}
        <View style={styles.merchantsHeader}>
          <Text style={styles.merchantsHeaderTitle}>Nearby Merchants</Text>
          <Text style={styles.merchantsHeaderSubtitle}>
            Don't miss out on interesting merchants around you. Let's check them
            out!
          </Text>
        </View>
        {/* Summary */}
        {!isMerchantsOn ? (
          <TouchableOpacity
            style={styles.merchantsBanner}
            onPress={() => setIsMerchantsOn(true)}
          >
            <Image
              style={styles.merchantsBannerImage}
              source={require("../../../assets/merchants.jpeg")}
            ></Image>
            <TouchableOpacity
              style={styles.merchantsOnButton}
              onPress={() => setIsMerchantsOn(true)}
            >
              <Text style={styles.merchantsOnButtonText}>Turn On</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ) : (
            /* Carousell List Merchants */
            <View>
              <Carousel
                sliderWidth={width - 40}
                itemWidth={width / 3}
                inactiveSlideScale={1}
                activeSlideAlignment={merchantAlign}
                onSnapToItem={index =>
                  index == 4 - 2
                    ? setMerchantAlign("end")
                    : setMerchantAlign("start")
                }
                data={[
                  {
                    url: "https://picsum.photos/id/500/500/200",
                    title: "This is Title of Merchant",
                    distance: "0.37"
                  },
                  {
                    url: "https://picsum.photos/id/500/500/200",
                    title: "This is Title of Merchant",
                    distance: "0.4"
                  },
                  {
                    url: "https://picsum.photos/id/500/500/200",
                    title: "This is Title of Merchant",
                    distance: "0.45"
                  },
                  {
                    url: "https://picsum.photos/id/500/500/200",
                    title: "This is Title of Merchant",
                    distance: "0.65"
                  },
                  {
                    url: "https://picsum.photos/id/500/500/200",
                    title: "This is Title of Merchant",
                    distance: "0.65"
                  }
                ]}
                renderItem={({ item }) => (
                  <View style={styles.merchantCarouselItem}>
                    <Image
                      style={styles.merchantCarouselImage}
                      source={{ uri: item.url }}
                    ></Image>
                    <Image
                      style={styles.merchantCarouselIcon}
                      source={{ uri: item.url }}
                    ></Image>
                    <Text style={styles.merchantCarouselTitle}>{item.title}</Text>
                    <Text style={styles.merchantCarouselSubtitle}>
                      {item.distance}
                    </Text>
                    <TouchableOpacity style={styles.merchantDetailButton} onPress={() => props.navigation.navigate('ComingSoonScreen')}>
                      <Text style={styles.DetailButtonText}>Details</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </View>
          )}
      </View>
      {/* ====================================================== */}

      {/* ====================================================== */}
    </ScrollView>
  );
};
