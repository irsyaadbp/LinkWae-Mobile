import React from "react";
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  StyleSheet
} from "react-native";

import { useSelector } from "react-redux";

import axios from "axios";

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default HistoryScreen = props => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [listHistory, setListHistory] = React.useState([]);

  const { authResponse } = useSelector(state => state.auth);

  React.useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    axios
      .get(
        // `http://ec2-34-205-127-114.compute-1.amazonaws.com:5000/transactions`
        `http://ec2-34-205-127-114.compute-1.amazonaws.com:5000/transactions/user/${authResponse.user.id}`
      )
      .then(response => {
        console.log(response, "hai");
        setListHistory(response.data.response);
        setRefreshing(false);
      });
  }, [refreshing]);

  return (
    <View style={styles.viewContainer}>
      <View style={{ padding: 24, backgroundColor: "#fff" }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Transaction History
        </Text>
      </View>
      <View style={{ paddingHorizontal: 24 }}>
        <ScrollView
          contentContainerStyle={{ paddingVertical: 16 }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {listHistory.length === 0 ? (
            <Text>No Transaction History</Text>
          ) : (
            listHistory.map((item, index) => (
              <View style={styles.cardContainer} key={index}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <Text style={{ fontWeight: "bold", color: "#c7c7c7" }}>
                    {item.invoice_no}
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: item.status === "success" ? "#4caf50" : "#ff9800"
                    }}
                  >
                    {item.status}
                  </Text>
                </View>

                <Text style={{ fontWeight: "bold" }}>
                  {item.category.parent_category} - {item.category.name}
                </Text>
                <Text style={{ fontWeight: "bold", marginTop: 16 }}>
                  Rp {item.amount}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: "#f0f0f0",
    height: "100%"
  },
  cardContainer: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 100,
    width: "100%"
  }
});
