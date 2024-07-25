import { Image, StyleSheet, Text, TouchableOpacity, View,  } from "react-native";
import React from "react";

export default function Cardlist() {
  const contact = [
    {
      uid: 1,
      name: "biwan shrestha",
      image:
        "https://images.unsplash.com/photo-1719937206491-ed673f64be1f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "khana khais",
      time:'9:30'
    },
    {
      uid: 2,
      name: "bipisha shrestha ",
      image:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/438255469_1608429519697927_353542910417774858_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEUQNP_i4bYUrCuRVyNhz5by1dowmw4nv3LV2jCbDie_cTam6z3MG-iqdByyLevlTnqTWt860pqoMHcOjaTpGid&_nc_ohc=mz7yZho2-kkQ7kNvgFJCDoV&_nc_ht=scontent.fktm8-1.fna&oh=00_AYCmSuhIgJzBgBskzgGiytIJCw3NAZsQXUVG4nQmKml13g&oe=66A66686",
      desc: "khana khais",  time:'9:30'
    },
    {
      uid: 3,
      name: "binita shrestha",
      image:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/440441657_3736327126645432_6975478865504879994_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeG_sPy9NPOVTXXrdHXLBfaN8pz7ufT6YmvynPu59Ppia3J1b04_xBZY_eUZ9FgFgZZNC75nX2ZYoakgR8QTDD16&_nc_ohc=6uPhCUojUf4Q7kNvgEZVm7v&_nc_ht=scontent.fktm8-1.fna&oh=00_AYBEElHsmiW00SP08yaj-fQJsmLLSTQXxKuCxUEYljbI2A&oe=66A6686D",
      desc: "khana khais",  time:'9:30'
    },
    {
      uid: 4,
      name: "bipana shrestha",
      image:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-1/438231042_3424137361065292_8558993701610760008_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=102&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEqeO1NgqroXxjRIo33wr8XXqoM6zLluiNeqgzrMuW6IxfpQDcvOuxMF1XQ4k_DREYr3ID7xYD-LkrTuGDhb4uy&_nc_ohc=SHmSHuGdAkMQ7kNvgECkpzX&_nc_ht=scontent.fktm8-1.fna&oh=00_AYD8nWoZtSlhTur4aPd3H-ZlKW2Mr0HmSVxQ2hoEEgSKTw&oe=66A65A43",
      desc: "khana khais",  time:'9:30'
    },
    {
      uid: 5,
      name: "kaya basukala",
      image:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/274865526_1135023873705163_4865652141996217590_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5dvPs7kz3ywzPM_iTN7GdSwWlFQho_q1LBaUVCGj-rd_8nT81-2q1SL7w2sVKpBU2nFLttCtgkNJz-TR6Gas_&_nc_ohc=rl1mt-OLc-MQ7kNvgGJ_myS&_nc_ht=scontent.fktm8-1.fna&oh=00_AYBlmktUQqX9q430DvBAw_Bo9FxLY-uEC0P0IB4mtsC7uw&oe=66A6527D",
      desc: "khana khais",  time:'9:30'
    },
    {
      uid: 6,
      name: "basu kala",
      image:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/94138311_2086827978129577_3459511430108151808_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFWg9SGjxk0xAKLXG7hy0r-K5z1V-9RXu8rnPVX71Fe74aqr4902mIUiXuH-lPVFUxj4nge3n_wfrMZ4YvIplkC&_nc_ohc=BfZHA4IJbCoQ7kNvgGKooJh&_nc_ht=scontent.fktm8-1.fna&oh=00_AYD_PuAbdWjnNVdcGZYnj1YBZLih-BisK64P9lC_NcD34g&oe=66C807FC",
      desc: "khana khais",  time:'9:30'
    },
    {
      uid: 6,
      name: "basu kala",
      image:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/94138311_2086827978129577_3459511430108151808_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFWg9SGjxk0xAKLXG7hy0r-K5z1V-9RXu8rnPVX71Fe74aqr4902mIUiXuH-lPVFUxj4nge3n_wfrMZ4YvIplkC&_nc_ohc=BfZHA4IJbCoQ7kNvgGKooJh&_nc_ht=scontent.fktm8-1.fna&oh=00_AYD_PuAbdWjnNVdcGZYnj1YBZLih-BisK64P9lC_NcD34g&oe=66C807FC",
      desc: "khana khais",  time:'9:30'
    }
  ];
  return (
    <View>
      <View style={styles.container}>
        {contact.map(({ uid, name, image, desc, time }) => (
          <View key={uid} style={styles.card}>
            <TouchableOpacity>
            <View style={[styles.story]}>
              <Image style={[styles.image]} source={{ uri: image }} />
            </View>
              </TouchableOpacity>
            
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.de}>
                {desc}.{time}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  card: {
    borderRadius: 30,
    backgroundColor: "black",
    margin: 10,
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal:10
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 100,
  },
  image: {
    height:"100%",
    borderRadius: 100,
    borderColor:'black',
    borderWidth: 3,
  },
  name: {
    textTransform: "capitalize",
    fontSize: 16,
    fontWeight: "bold",
    color:'white'
  },
  de:{
    fontSize: 14
  },
  story: {
    height: 50,
    width: 50,
    borderRadius: 100,
  padding:2,
    backgroundColor: "gray",
    alignContent:'center'
  },
});
