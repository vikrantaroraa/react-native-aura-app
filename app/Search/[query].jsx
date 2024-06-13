import { FlatList, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import { searchPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import VideoCard from "@/components/VideoCard";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => {
          return (
            <View className="my-6 px-4 border border-green-700">
              <Text className="font-pmedium text-sm text-gray-100">
                Search results
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                {query}
              </Text>
              <View className="mt-6 mb-8">
                <SearchInput initialQuery={query} />
              </View>
            </View>
          );
        }}
        ListEmptyComponent={() => {
          return (
            <EmptyState
              title={"No videos found"}
              subtitle={"No Videos found for the query"}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

export default Search;
