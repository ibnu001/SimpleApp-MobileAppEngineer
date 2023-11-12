import React, { useState } from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { useSelector } from 'react-redux'
import PATH from "../../navigation/NavigationPath"
import Colors from '../../utils/Colors'
import loginStyles from './LoginScreen.style'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)
    const [inputErrors, setInputErrors] = useState({
        isValidEmail: '',
        isValidPassword: '',
    })

    const user = useSelector((state) => state.user.user)

    const validateInputs = () => {
        const errors = {}

        if (email.trim() === '') {
            errors.isValidEmail = 'Email is required'
        }
        if (password.trim() === '') {
            errors.isValidPassword = 'Password is required'
        }
        return errors
    }

    const login = () => {
        const errors = validateInputs()

        if (Object.keys(errors).length > 0) {
            setInputErrors(errors)
        } else {
            const payload = {
                email: email,
                password: password
            }

            if (email === user.email && password !== user.password) {
                Alert.alert('Invalid email or password')
                return
            }
            if (email !== user.email) {
                Alert.alert('Invalid account')
                return
            }

            console.log('== LOGIN_SCREEN : ', payload)

            Alert.alert('Succesful Login', '',
                [{
                    text: 'Go to User Form',
                    onPress: () => {
                        navigation.navigate(PATH.USER)
                        setEmail('')
                        setPassword('')
                    },
                }],
                {
                    cancelable: true
                })
        }
    }

    const moveToSignup = () => {
        navigation.navigate(PATH.REGISTRATION)
    }

    const isErrorView = (errorValidation) => {
        if (errorValidation) {
            return <Text style={{ color: 'red', marginTop: 3, paddingLeft: 8 }}>{errorValidation}</Text>
        }
    }

    return (
        <View style={loginStyles.container}>
            <View style={loginStyles.imageContainer}>
                <Image
                    style={loginStyles.image}
                    source={require('../../shared/assets/undraw_Welcome_re_h3d9.png')}
                />
            </View>

            <View>
                <Text style={loginStyles.titleLarge}>Welcome Back</Text>
                <Text style={loginStyles.titleMedium}>Sign in to continue</Text>

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
                    style={loginStyles.input}
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
                    style={loginStyles.input}
                    secureTextEntry={showPassword}
                    maxLength={25}
                    right={<TextInput.Icon
                        icon={showPassword ? 'eye' : 'eye-off'}
                        onPress={() => setShowPassword(!showPassword)} />}
                />
                {isErrorView(inputErrors.isValidPassword)}

                <Button
                    mode='text'
                    style={loginStyles.btnForgotPassword}
                    labelStyle={loginStyles.labelForgotPassword}
                    textColor={Colors.jet}
                    onPress={() => console.log('Forgot Password?')}
                >Forgot Password?</Button>

                <Button
                    mode='contained'
                    buttonColor={Colors.jet}
                    style={loginStyles.btnLogin}
                    labelStyle={loginStyles.labelLogin}
                    onPress={() => login()}
                >Login</Button>
            </View>

            <View style={loginStyles.signup}>
                <Text style={loginStyles.txtSignup}>Don't have an account?</Text>

                <Button
                    mode='text'
                    labelStyle={loginStyles.labelSignup}
                    textColor={Colors.jet}
                    onPress={() => moveToSignup()}
                >Sign up</Button>
            </View>
        </View >
    )
}
