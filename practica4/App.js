import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBarContainer}>
        <View style={styles.titleBar}>
            <Ionicons name="chevron-back-outline" size={24} color="#000"></Ionicons>
            <Text style={styles.titleText}> Profile </Text>
            <Ionicons name="cog-outline" size={24} color="#000"></Ionicons>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContainer}>

        <ImageBackground source={require('./assets/leaves-banner.avif')} style={styles.profileImageBackground}>
          <View style={styles.profileImageContainer}>
            <Image source={require('./assets/profile-image.png')} style={styles.profileImage} />
          </View>
        </ImageBackground>
        <View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>Emmanuel Moscoso</Text>
          <Text style={styles.profileDetail}>Software Engineer</Text>

          
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>I'm a passionate software developer diving into the world of FrontEnd development. </Text>
        </View>

        </View> 


        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.buttonFill, styles.button]}>
            <Text style={styles.buttonFillText}>FOLLOW</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonOutline, styles.button]}>
            <Text style={styles.buttonOutlineText}>MESSAGE</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonOutline, styles.button]}>
            <Text style={styles.buttonOutlineText}>MORE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dataContainer}>

          <View style={styles.dataItem}>
            <Text style={styles.dataNumber}>21</Text>
            <Text style={styles.dataLabel}>POSTS</Text>
          </View>

          <View>
            <Text style={styles.divider}> | </Text>
          </View>

          <View style={styles.dataItem}>
            <Text style={styles.dataNumber}>101</Text>
            <Text style={styles.dataLabel}>FOLLOWERS</Text>
          </View>

          <View>
            <Text style={styles.divider}> | </Text>
          </View>

          <View style={styles.dataItem}>
            <Text style={styles.dataNumber}>7</Text>
            <Text style={styles.dataLabel}>FOLLOWING</Text>
          </View>
        </View>


        <View style={styles.detailsContainer}>
          <Text style={styles.detailsLabel}>Details</Text>
            <View style={styles.detailsItem}>
              <Ionicons name="location-outline" size={24} color="#000"></Ionicons>
              <View>
                <Text style={styles.detailsText}>Querétaro</Text>
              </View>
            </View>
            <View style={styles.detailsItem}>
              <Ionicons name="at-outline" size={24} color="#000"></Ionicons>
              <View>
                <Text style={styles.detailsText}>emmanuel.moscoso.a@gmail.com</Text>
              </View>
            </View>
            <View style={styles.detailsItem}>
              <Ionicons name="call-outline" size={24} color="#000"></Ionicons>
              <View>
                <Text style={styles.detailsText}>442 269 5668</Text>
              </View>
            </View>
        </View>

        <View style={styles.postBannerContainer}>
          <Text style={styles.postBannerLabel}>Emmanuel's Posts</Text>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.postImageContainer}>
            <Image source={require('./assets/post.png')} style={styles.postImage}></Image>
          </View>
          <View style={styles.postDescriptionContainer}>
            <Text style={styles.postDescription}>Designing and coding! </Text>
          </View>
          <View style={styles.postButtonsContainer}>
          <View style={styles.postButton}>
            <Ionicons name="heart-outline" size={24} color="#808183"></Ionicons>
            </View>
            <View style={styles.postButton}>
              <Ionicons name="chatbox-outline" size={24} color="#808183"></Ionicons>
            </View>
            <View style={styles.postButton}>
              <Ionicons name="share-social-outline" size={24} color="#808183"></Ionicons>
            </View>
          </View>
        </View>

        <View style={styles.emptyAreaContainer}></View>

      </ScrollView>

      <View style={styles.navbar}>
        <View style={styles.navbarItem}>
          <Ionicons name="home-outline" size={24} color="#40916c"></Ionicons>
        </View>
        <View style={styles.navbarItem}>
          <Ionicons name="search-outline" size={24} color="#40916c"></Ionicons>
        </View>
        <View style={styles.navbarItem}>
          <Ionicons name="add-outline" size={24} color="#40916c"></Ionicons>
        </View>
        <View style={styles.navbarItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#40916c"></Ionicons>
        </View>
        <View style={styles.navbarItem}>
          <Ionicons name="person-circle-outline" size={24} color="#40916c"></Ionicons>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#525750"
  },
  titleBarContainer: {
    backgroundColor: "#ffffff",
    paddingBottom: 12
    
  },
  titleBar:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    fontSize: 20,
    
  },
  titleText: {
    fontSize: 20,
    color: "#3e3e3e",
    fontWeight: "bold"
  },
profileImageBackground: {
    height: 100,
    marginBottom: 80,
    backgroundColor: "#91c6b2"
  },
  profileImageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingVertical: 24,
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
    borderWidth: 5,
    borderColor: "#ffffff"
  },
  profileNameContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  profileName: {
    fontSize: 28,
    fontWeight: "bold"
  },
  profileLastName:{
    fontSize: 18,
    color: "#3e3e3e"

  },
  profileDetail:{
    marginTop: 12,
    fontSize: 14,
    backgroundColor: "#ffffff",
    paddingHorizontal: 18,
    paddingVertical: 4,
    borderRadius: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  descriptionContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginHorizontal: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  descriptionText: {
    marginTop: 8,
    fontSize: 16,
    color: "#808183",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: 24
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 25,
    fontSize: 16,
    color: "#ffffff",
    marginHorizontal: 8,
  },
  buttonFill: { 
    backgroundColor: "#40916c",
  },
  buttonFillText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
    borderWidth: 2,
    borderColor: "#40916c"
  },
  buttonOutline: {
    borderWidth: 2,
    borderColor: "#40916c"
  },
  buttonOutlineText: {
    fontSize: 16,
    color: "#40916c"
  },

  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24
  },
  dataItem: {
    alignItems: "center",
    flex: 1
  },
  dataNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#808183"      
  },
  dataLabel: {
    fontSize: 14,
    color: "#808183",
    marginTop: 4,
  },
  divider: {
    fontSize: 30,
    color: "#40916c",
    fontWeight: "light",
  },

  detailsContainer: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    marginVertical: 24,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  detailsLabel: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,

  },
  detailsItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 6,
  }, 
  detailsText: {
    marginHorizontal: 12,
    fontSize: 16,
  },
  postBannerContainer: {
    backgroundColor: "#40916c",
    paddingVertical: 12,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  postBannerLabel: {
    fontSize: 22,
    fontWeight: "bold",
    marginHorizontal: 16,
    color: "#ffffff"

  },
  postContainer: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  postImageContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  postImage:{
    height: 370,
    width: 370,
    borderWidth: 1,
    borderColor: "#eeeeee",
    borderRadius: 12
  },

  postDescriptionContainer: {
    marginVertical: 12,
  },
  postDescription: {
    fontSize: 16,
  },
  postButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8

  },
  postButton: {
    marginRight: 16,
  },
 

  navbar: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#eeeeee",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  navbarItem: {
    alignItems: "center"
  },

  emptyAreaContainer: {
    height: 50
  },
});
