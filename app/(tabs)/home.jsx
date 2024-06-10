import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "@/components/SearchInput";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => {
          return (
            <View className="my-6 px-4 space-y-6">
              <View className="flex-row justify-between items-start mb-6">
                <View>
                  <Text className="font-pmedium text-sm text-gray-100">
                    Welcome back
                  </Text>
                  <Text className="text-2xl font-psemibold text-white">
                    JSMastery
                  </Text>
                </View>
                <View className="mt-1.5">
                  <Image
                    source={images.logoSmall}
                    className="w-9 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>
              <SearchInput />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
