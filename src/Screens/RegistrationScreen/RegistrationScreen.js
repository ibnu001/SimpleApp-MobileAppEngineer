import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import PATH from "../../navigation/NavigationPath"
import { registration } from '../../store/UserSlice'
import registrationStyles from './RegistrationScreen.style'

export default function RegistrationScreen({ navigation }) {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [inputErrors, setInputErrors] = useState({
        isValidName: '',
        isValidEmail: '',
        isValidPassword: '',
        isValidPasswordConfirm: '',
    })

    const validateInputs = () => {
        const errors = {}

        if (name.trim() === '') {
            errors.isValidName = 'Name is required'
        }
        if (email.trim() === '') {
            errors.isValidEmail = 'Email is required'
        }
        if (password.trim() === '') {
            errors.isValidPassword = 'Password is required'
        }
        if (password.length < 6) {
            errors.isValidPassword = 'at least 6 characters'
        }
        if (passwordConfirm.trim() === '') {
            errors.isValidPasswordConfirm = 'Confirm Password is required'
        }
        if (password !== passwordConfirm) {
            errors.isValidPasswordConfirm = 'Password do not match'
        }
        return errors
    }

    const signup = () => {
        const errors = validateInputs()

        if (Object.keys(errors).length > 0) {
            setInputErrors(errors)
        } else {
            const payload = {
                name: name,
                email: email,
                password: password
            }
            console.log('== REGISTRATION_SCREEN : ', payload)

            dispatch(registration(payload))
            Alert.alert('Succesful Registration', '',
                [{
                    text: 'Go to Login Screen',
                    onPress: () => moveToLogin(),
                    style: 'default'
                }],
                {
                    cancelable: true
                })
        }
    }

    const moveToLogin = () => {
        navigation.navigate(PATH.LOGIN)
    }

    const isErrorView = (errorValidation) => {
        if (errorValidation) {
            return <Text style={{ color: 'red', marginTop: 3, paddingLeft: 8 }}>{errorValidation}</Text>
        }
    }

    return (
        <View style={registrationStyles.container}>
            <Text style={registrationStyles.titleLarge}>Create an account</Text>
            <Text style={registrationStyles.titleSmall}>Please, enter your personal info</Text>

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
                    style={registrationStyles.input}
                />
                {isErrorView(inputErrors.isValidName)}

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
                    style={registrationStyles.input}
                    keyboardType='email-address'
                />
                {isErrorView(inputErrors.isValidEmail)}

                <TextInput
                    mode='outlined'
                    label='Password'
                    value={password}
                    onChangeText={(password) => {
                        setPassword(password)
                        setInputErrors({
                            ...inputErrors,
                            isValidPassword: '',
                        })
                    }}
                    selectionColor={Colors.gainsboro}
                    cursorColor={Colors.gainsboro}
                    underlineColor={Colors.gainsboro}
                    outlineColor={Colors.gainsboro}
                    activeOutlineColor={Colors.jet}
                    textColor={Colors.jet}
                    style={registrationStyles.input}
                    secureTextEntry={showPassword}
                    maxLength={25}
                    right={<TextInput.Icon
                        icon={showPassword ? 'eye' : 'eye-off'}
                        onPress={() => setShowPassword(!showPassword)} />}
                />
                {isErrorView(inputErrors.isValidPassword)}


                <TextInput
                    mode='outlined'
                    label='Confirm Password'
                    value={passwordConfirm}
                    onChangeText={(passwordConfirm) => {
                        setPasswordConfirm(passwordConfirm)
                        setInputErrors({
                            ...inputErrors,
                            isValidPasswordConfirm: '',
                        })
                    }}
                    selectionColor={Colors.gainsboro}
                    cursorColor={Colors.gainsboro}
                    underlineColor={Colors.gainsboro}
                    outlineColor={Colors.gainsboro}
                    activeOutlineColor={Colors.jet}
                    textColor={Colors.jet}
                    style={registrationStyles.input}
                    secureTextEntry={showPassword}
                    maxLength={25}
                    right={<TextInput.Icon
                        icon={showPassword ? 'eye' : 'eye-off'}
                        onPress={() => setShowPassword(!showPassword)} />}
                />
                {isErrorView(inputErrors.isValidPasswordConfirm)}

                <Button
                    mode='contained'
                    buttonColor={Colors.jet}
                    style={registrationStyles.btnSignup}
                    labelStyle={registrationStyles.labelSignup}
                    onPress={() => signup()}
                >Register</Button>
            </View>

            <View style={registrationStyles.login}>
                <Text style={registrationStyles.txtLogin}>Already have an account?</Text>

                <Button
                    mode='text'
                    labelStyle={registrationStyles.labelLogin}
                    textColor={Colors.jet}
                    onPress={() => moveToLogin()}
                >Login</Button>
            </View>
        </View>

    )
}