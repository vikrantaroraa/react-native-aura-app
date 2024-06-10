import { View, Text, StyleSheet, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/global-context";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { email, password, username } = form;
  const { setIsLoggedIn, setUser } = useGlobalContext();

  const submit = async () => {
    if (username === "" || email === "" || password === "") {
      Alert.alert("Error", "Please fill in all the fields!");
      return;
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(email, password, username);

      // setting it to global state...
      setUser(result);
      setIsLoggedIn(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-[85vh] w-full px-4 my-6 justify-center">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px] border border-[red]"
            resizeMode="contain"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Sign up to Aura
          </Text>
          <FormField
            title="Username"
            value={username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address" //useful for auto-filling emails
          />
          <FormField
            title="Password"
            value={password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title={"Sign up"}
            handlePress={submit}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
          />

          <View className="flex-row justify-center pt-5 gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href={"./sign-in"}
              className="text-lg font-psemibold text-secondary"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
