import React, { useState } from "react"
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity, Modal, NativeModules } from "react-native"
import data from "../../../features/data"
import { COLORS } from "./theme"
import { useNavigation } from '@react-navigation/native';
import { SIZES } from "./theme"
import Background from "../../../features/BgT"
import Animated from 'react-native-reanimated';
import Button from "../../../features/Button"

const { UIManager } = NativeModules;

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Quiz1 = () => {
  const allQuestions = data
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
  const [correctOption, setCorrectOption] = useState(null)
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false)
  const [score, setScore] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [showScoreModal, setShowScoreModal] = useState(false)

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"]
    setCurrentOptionSelected(selectedOption)
    setCorrectOption(correct_option)
    setIsOptionsDisabled(true)
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1)
    }
    // Show Next Button
    setShowNextButton(true)
  }
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setCurrentOptionSelected(null)
      setCorrectOption(null)
      setIsOptionsDisabled(false)
      setShowNextButton(false)
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start()
  }
  const Choose = () => {
    setShowScoreModal(false)

    setCurrentQuestionIndex(0)
    setScore(0)

    setCurrentOptionSelected(null)
    setCorrectOption(null)
    setIsOptionsDisabled(false)
    setShowNextButton(false)
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start()
  }

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ color: COLORS.white, fontSize: 10, opacity: 0.6, marginRight: 2 }}>{currentQuestionIndex + 1}</Text>
          <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>/ {allQuestions.length}</Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 20,
          }}
        >
          {allQuestions[currentQuestionIndex]?.question}
        </Text>
      </View>
    )
  }
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.options.map((option) => (
          <TouchableOpacity
            onPress={() => validateAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
              borderColor: option == correctOption ? COLORS.success : option == currentOptionSelected ? COLORS.error : COLORS.secondary + "40",
              backgroundColor: option == correctOption ? COLORS.success + "20" : option == currentOptionSelected ? COLORS.error + "20" : COLORS.secondary + "20",
              height: 45,
              borderRadius: 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: COLORS.white }}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {option == correctOption ? (
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 20 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : option == currentOptionSelected ? (
              <View
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 25 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    )
  }
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 25,
            width: "100%",
            backgroundColor: COLORS.accent,
            padding: 10,
            borderRadius: 3,
          }}
        >
          <Text style={{ fontSize: 20, color: COLORS.white, textAlign: "center" }}>Next</Text>
        </TouchableOpacity>
      )
    } else {
      return null
    }
  }

  const [progress, setProgress] = useState(new Animated.Value(0))
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  })
  // const renderProgressBar = () => {
  //   return (
  //     <View
  //       style={{
  //         width: "100%",
  //         height: 20,
  //         borderRadius: 20,
  //         backgroundColor: "#00000020",
  //       }}
  //     >
  //       <Animated.View
  //         style={[
  //           {
  //             height: 20,
  //             borderRadius: 20,
  //             backgroundColor: COLORS.accent,
  //           },
  //           {
  //             width: progressAnim,
  //           },
  //         ]}
  //       ></Animated.View>
  //     </View>
  //   )
  // }
  const handleLogout = async () => {
    navigation.navigate('UserPanelTab');
  }
    const navigation = useNavigation()
  return (
    <Background>
     
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
        <View
          style={{
            flex: 1,
            paddingVertical: 104,
            paddingHorizontal: 12,
            backgroundColor: COLORS.background,
            position: "relative",
          }}
        >
         

          {/* Question */}
          {renderQuestion()}

          {/* Options */}
          {renderOptions()}

          {/* Next Button */}
          {renderNextButton()}

          {/* Score Modal */}
          <Modal animationType="slide" transparent={true} visible={showScoreModal}>
            <View
              style={{
                flex: 1,
                backgroundColor: COLORS.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: COLORS.white,
                  width: "90%",
                  borderRadius: 20,
                  padding: 20,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{score > allQuestions.length / 2 ? "Congratulations!" : "Oops u are failed!"}</Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginVertical: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: score > allQuestions.length / 2 ? COLORS.success : COLORS.error,
                    }}
                  >
                    {score}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      color: COLORS.black,
                    }}
                  >
                    / {allQuestions.length}
                  </Text>
                </View>
                  {/* Retry Quiz button */}


                  
                 <TouchableOpacity
                  onPress={handleLogout}
                 style={{
                     backgroundColor: COLORS.accent,
                  padding: 20,
                     width: "100%",
                     borderRadius: 20,
                   }}
                 >
                   <Text
                    style={{
                      textAlign: "center",
                     color: COLORS.white,
                      fontSize: 20,
                    }}
                  >
                    Go Back
                  </Text>
                </TouchableOpacity>

            
              </View>
            </View>
          </Modal> 

        </View>
      </SafeAreaView>
      </Background>

  )

}

export default Quiz1