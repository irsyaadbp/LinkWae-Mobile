import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 15,
  },
  profileLeft: {
    // flex: 1,
    flexDirection: 'row',
  },
  profileImage: {
    borderRadius: 30,
    width: 30,
    height: 30,
    marginRight: 20,
  },
  profileName: {
    fontSize: 15,
    justifyContent: 'center',
  },
  profileRight: {
    flexDirection: 'row',
  },
  profilePhoneBook: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  profileFavorite: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  balance: {
    // marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'red',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceAccount: {
    color: 'white',
  },
  balanceBonus: {
    flexDirection: 'row',
  },
  balanceBonusText: {
    fontSize: 11,
    color: 'white',
  },
  balanceBonusIcon: {
    color: 'red',
    fontSize: 15,
    marginLeft: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingHorizontal: 3,
    borderRadius: 30,
  },
  balanceRight: {

  },
  balanceImage: {
    height: 30,
    width: 30,
  },
  shortcut: {
    marginTop: 30,
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shortcutItem: {
    alignItems: 'center',
    flex: 1,
  },
  shortcutImage: {
    height: 30,
    width: 40,
    marginBottom: 10,
  },
  shortcutText: {
    color: 'white',
    fontSize: 11,
  },
  addPayment: {
    flexDirection: 'row',
    // marginHorizontal: 20,
    justifyContent: 'space-between',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
    backgroundColor: '#E9EFF9',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  addPaymentImage: {
    width: 40,
    height: 30,
    marginRight: 10,
  },
  addPaymentText: {
  },
  addPaymentTitle: {
    fontSize: 14,
  },
  addPaymentSubtitle: {
    fontSize: 11,
  },
  addPaymentIcon: {
    fontSize: 20,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    borderRadius: 30,
  },
  feature: {
    padding: 20,
    marginBottom: 30,
  },
  featureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
  },
  featureImage: {
    height: 40,
    width: 40,
  },
  featureText: {
    fontSize: 11,
    textAlign: 'center',
  },
  topCarousel: {
    alignItems: 'center',
  },
  topCarouselItem: {

  },
  topCarouselImage: {
    width: 280,
    height: 130,
    borderRadius: 20,
  },
  promo: {
    padding: 20,
  },
  promoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promoHeaderTitle: {
    fontSize: 18,
  },
  promoHeaderLink: {
    color: 'red',
    fontSize: 15,
  },
  promoCarousel: {
    justifyContent: 'flex-start',
  },
  promoCarouselItem: {
    marginTop: 20,
  },
  promoCarouselImage: {
    width: 280,
    height: 130,
    borderRadius: 20,
  },
  promoCarouselTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 2,
  },
  promoCarouselSubtitle: {
    color: '#F2F2F2',
  },
  merchants: {
    paddingHorizontal: 20,
    position: 'relative',
    marginBottom: 20,
  },
  merchantsHeaderTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  merchantsHeaderSubtitle: {
    color: '#F2F2F2',
    marginBottom: 5,
  },
  merchantsBannerImage: {
    width: width - 40,
    height: 130,
    borderRadius: 10,
  },
  merchantsOnButton: {
    position: 'absolute',
    bottom: 9,
    right: 15,
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 15,
  },
  merchantsOnButtonText: {
    color: 'white',
  },
  merchantCarouselItem: {
    marginHorizontal: 5,
    alignItems: 'center',
  },
  merchantCarouselImage: {
    height: 50,
    width: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  merchantCarouselIcon: {
    height: 35,
    width: 35,
    borderRadius: 30,
    marginTop: -17.5,
  },
  merchantCarouselTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 2,
    textAlign: 'center',
  },
  merchantCarouselSubtitle: {
    textAlign: 'center',
    marginVertical: 10,
  },
  merchantDetailButton: {
    backgroundColor: 'red',
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  DetailButtonText: {
    color: 'white',
  }
})