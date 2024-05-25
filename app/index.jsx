import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Edit app/index.tsx to edit this screennnnnn.</Text>
      <Link href={"/profile"} style={{ color: "blue" }}>
        Go to Profile
      </Link>
      <Link href={"/hello"} style={{ color: "red" }}>
        Go to Hello
      </Link>
    </View>
  );
}
