import React from "react"
import Background from "../../../features/Bg"
// import Header from '../../../features/Header'
import Paragraph from "../../../features/Paragraph"
import BackButton from "../../../features/BackButton"
import Button from "../../../features/Button"

export default function InstructionsScreen02({ navigation }) {
  return (
    <Background>
      {/* <BackButton goBack={navigation.goBack} /> */}
      {/* <Header>INSTRUCTIONS</Header>
       */}
      {/* <Button mode="outlined" color="#F8772E">
        INSTRUCTIONS
      </Button> */}
      <Paragraph>1. All teams must have at least 2 members and no more than 4 members.</Paragraph>
      <Paragraph>2.Teams must stay together during the Treasure Hunt and are encouraged to work together to solve the clues and retrieve the coins from each location.</Paragraph>
      <Paragraph>3. Teams are encouraged to bring along a phonebook and/or a cell phone with internet access to locate addresses for locations once they’ve solved the clues.</Paragraph>
      <Paragraph>4. Teams will be scored depending on the number of level completed and the amount of time taken.</Paragraph>
      <Paragraph>5. Players must use the camera on your phone to photograph each task completed or item obtained. (Each team member must appear in at least one of the photos.)</Paragraph>
      <Paragraph>6. Disqualification will result from any of the following Damaging any property b. Interfering with other teams or their members in any way. c. Copying from other teams. d. Stealing from other teams.</Paragraph>
      {/* <Button
        mode="contained"
        color="#F8772E"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "UserPanelTab" }],
          })
        }
      >
        Accept and Continue
      </Button> */}
    </Background>
  )
}
