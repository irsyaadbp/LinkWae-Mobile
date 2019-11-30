import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  AsyncStorage
} from "react-native";
import { Icon } from "native-base";
import Modal from "react-native-modal";

import styles from "./styles";
import { TakePictureComponent } from "../../components";
import AccountType from "./AccountType";

export default ProfileScreen = props => {
  const [isTakePicture, setIsTakePicture] = useState(false);
  const [imageUri, setImageUri] = useState("");
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState("");

  const logout = () => {
    AsyncStorage.removeItem("user").then(response =>
      props.navigation.navigate("AuthNavigation")
    );
  };

  return (
    <ScrollView style={styles.container}>
      <TakePictureComponent
        isVisible={isTakePicture}
        hide={() => setIsTakePicture(false)}
        result={result => setImageUri(result)}
      />
      <Modal
        isVisible={modal}
        style={styles.modal}
        onBackButtonPress={() => setModal(false)}
      >
        {content == "accountType" && (
          <AccountType hide={() => setModal(false)} />
        )}
      </Modal>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerName}>Haqi Ramadhani</Text>
          <Text style={styles.headerPhone}>+6285229302095</Text>
        </View>
        <View style={styles.headerRight}>
          <Image
            source={{
              uri: "http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
            }}
            style={styles.headerImage}
          ></Image>
          <Icon name="create" style={styles.headerIcon}></Icon>
        </View>
      </View>
      {/* ========================================== */}
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => {
            setModal(true);
            setContent("accountType");
          }}
        >
          <Text style={styles.title}>Account Type</Text>
          <View style={styles.rowChild}>
            <Text>Basic</Text>
            <Icon name="alert" style={styles.icon}></Icon>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.title}>LinkWae Syariah</Text>
          <View style={styles.rowChild}>
            <Text>Not Active</Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Text style={styles.title}>Payment Method</Text>
          <View style={styles.rowChild}>
            <Text></Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>LinkAja TAP</Text>
          <View style={styles.rowChild}>
            <Text>Not set</Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
      </View>
      {/* ========================================= */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.title}>Email</Text>
          <View style={styles.rowChild}>
            <Text>**********ani@**ail.com</Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Text style={styles.title}>Change PIN</Text>
          <View style={styles.rowChild}>
            <Text></Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Language</Text>
          <View style={styles.rowChild}>
            <Text>English</Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
      </View>
      {/* ========================================= */}
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.title}>Term of Service</Text>
          <View style={styles.rowChild}>
            <Text></Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Privacy Policy</Text>
          <View style={styles.rowChild}>
            <Text></Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.row}>
          <Text style={styles.title}>Help</Text>
          <View style={styles.rowChild}>
            <Text></Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.title}>Review</Text>
          <View style={styles.rowChild}>
            <Text></Text>
            <Icon name="arrow-dropright" style={styles.icon}></Icon>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <TouchableOpacity onPress={logout}>
          <View style={styles.row}>
            <Text style={styles.logout}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.version}>LinkWae v.1.0.0</Text>
    </ScrollView>
  );
};
