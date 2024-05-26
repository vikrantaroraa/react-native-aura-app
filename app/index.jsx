import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-pblack">
        Edit app/index.tsx to edit this screennnnnn.
      </Text>
      <Link href={"/sign-in"} style={{ color: "blue" }}>
        Go to Sign In
      </Link>
      <Link href={"/home"} style={{ color: "red" }}>
        Go to Home
      </Link>
    </View>
  );
}
