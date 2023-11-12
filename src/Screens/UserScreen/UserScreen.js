import React, { useState } from 'react'
import { Alert, Modal, Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { registration } from '../../store/UserSlice'
import Colors from '../../utils/Colors'
import userStyles from './UserScreen.style'

export default function UserScreen() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  const currentDate = new Date()
  const currentDateString = currentDate.toISOString().split('T')[0]
  const [selected, setSelected] = useState()
  const [visible, setVisible] = useState(false)

  const [name, setName] = useState(user.name)
  const [identityNumber, setIdentityNumber] = useState('')
  const [email, setEmail] = useState(user.email)
  const [dateOfBirth, setDateOfBirth] = useState('')

  const [inputErrors, setInputErrors] = useState({
    isValidName: '',
    isValidIdentityNumber: '',
    isValidEmail: '',
    isValidDateOfBirth: '',
  })

  const validateInputs = () => {
    const errors = {}

    if (name.trim() === '') {
      errors.isValidName = 'Name is required'
    }
    if (identityNumber.trim() === '') {
      errors.isValidIdentityNumber = 'Identity Number is required'
    }
    if (email.trim() === '') {
      errors.isValidEmail = 'Email is required'
    }
    if (dateOfBirth.trim() === '') {
      errors.isValidDateOfBirth = 'Date of Birth is required'
    }
    return errors
  }

  const isErrorView = (errorValidation) => {
    if (errorValidation) {
      return <Text style={{ color: 'red', marginTop: 3, paddingLeft: 8 }}>{errorValidation}</Text>
    }
  }

  const submission = () => {
    const errors = validateInputs()

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors)
    } else {
      const payload = {
        ...user,
        name: name,
        identity_number: identityNumber,
        email: email,
        date_of_birth: dateOfBirth
      }
      console.log('== USER_SCREEN : ', payload)

      dispatch(registration(payload))
      Alert.alert('Succesful Submission', '',
        [{
          text: 'Done',
          style: 'default'
        }],
        {
          cancelable: true
        })
    }
  }

  const chooseDate = () => {
    setDateOfBirth(selected)
    setInputErrors({ ...inputErrors, isValidDateOfBirth: '' })
    setVisible(!visible)
  }

  return (
    <View style={userStyles.container}>
      <Text style={userStyles.titleLarge}>Complete your Personal Info</Text>

      <View>
        <TextInput
          mode='outlined'
          label='Name'
          value={name}
          onChangeText={(name) => {
            setName(name)
            setInputErrors({
              ...inputErrors,
              isValidName: ''
            })
          }}
          selectionColor={Colors.gainsboro}
          cursorColor={Colors.gainsboro}
          underlineColor={Colors.gainsboro}
          outlineColor={Colors.gainsboro}
          activeOutlineColor={Colors.jet}
          textColor={Colors.jet}
          style={userStyles.input}
        />
        {isErrorView(inputErrors.isValidName)}

        <TextInput
          mode='outlined'
          label='Identity Number'
          value={identityNumber}
          placeholder='e.g. 1234567890'
          onChangeText={(identityNumber) => {
            setIdentityNumber(identityNumber)
            setInputErrors({
              ...inputErrors,
              isValidIdentityNumber: ''
            })
          }}
          selectionColor={Colors.gainsboro}
          cursorColor={Colors.gainsboro}
          underlineColor={Colors.gainsboro}
          outlineColor={Colors.gainsboro}
          activeOutlineColor={Colors.jet}
          textColor={Colors.jet}
          style={userStyles.input}
          keyboardType='numeric'
        />
        {isErrorView(inputErrors.isValidIdentityNumber)}

        <TextInput
          mode='outlined'
          label='Email'
          value={email}
          onChangeText={(email) => {
            setEmail(email)
            setInputErrors({
              ...inputErrors,
              isValidEmail: ''
            })
          }}
          selectionColor={Colors.gainsboro}
          cursorColor={Colors.gainsboro}
          underlineColor={Colors.gainsboro}
          outlineColor={Colors.gainsboro}
          activeOutlineColor={Colors.jet}
          textColor={Colors.jet}
          style={userStyles.input}
          keyboardType='email-address'
        />
        {isErrorView(inputErrors.isValidEmail)}

        <View style={userStyles.viewDateContainer}>
          <TextInput
            mode='outlined'
            label='Date of Birth'
            value={dateOfBirth}
            placeholder='e.g. 1990-12-21'
            onChangeText={(dateOfBirth) => {
              setDateOfBirth(dateOfBirth)
              setInputErrors({
                ...inputErrors,
                isValidDateOfBirth: ''
              })
            }}
            selectionColor={Colors.gainsboro}
            cursorColor={Colors.gainsboro}
            underlineColor={Colors.gainsboro}
            outlineColor={Colors.gainsboro}
            activeOutlineColor={Colors.jet}
            textColor={Colors.jet}
            style={userStyles.inputDate}
            keyboardType='numeric'
          />

          <Button
            mode='contained'
            buttonColor={Colors.sonicSilver}
            textColor='white'
            style={userStyles.btnDate}
            onPress={() => setVisible(!visible)}
          >Date</Button>
        </View>
        {isErrorView(inputErrors.isValidDateOfBirth)}


        <Modal
          animationType='fade'
          transparent={true}
          visible={visible}
          onRequestClose={() => { setVisible(!visible) }}
        >
          <View style={userStyles.centeredView}>
            <View style={userStyles.modalView}>
              <Calendar
                initialDate={currentDateString}
                onDayPress={(date) => setSelected(date.dateString)}
                markedDates={{ [selected]: { selected: true, selectedColor: Colors.jet } }}
                theme={{
                  backgroundColor: 'white',
                  calendarBackground: 'white',
                }}
              />

              <View style={userStyles.btnPickDateContainer}>
                <Button
                  mode='outlined'
                  buttonColor='white'
                  textColor={Colors.jet}
                  style={userStyles.pickDateBtnCancel}
                  onPress={() => { setVisible(!visible) }}
                >Cancel</Button>

                <Button
                  mode='contained'
                  buttonColor={Colors.jet}
                  textColor='white'
                  style={userStyles.pickDateBtnOk}
                  onPress={() => chooseDate()}
                >OK</Button>
              </View>

            </View>
          </View>
        </Modal>

        <Button
          mode='contained'
          buttonColor={Colors.jet}
          style={userStyles.btnSubmission}
          labelStyle={userStyles.labelSubmission}
          onPress={() => submission()}
        >Submission</Button>
      </View>
    </View>
  )
}
