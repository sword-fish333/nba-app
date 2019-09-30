import React,{Component} from 'react';
import { StyleSheet, Text, View ,Button,Platform} from 'react-native';
import Input from '../../utils/forms/input';
import validationRules from '../../utils/forms/validationRules';
class AuthForm extends Component{
    state={
        type:'Login',
        action:'Login',
        actionMode:'I want to register',
        hasErrors:false,
        form:{
            email:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                    isRequired:true,
                    isEmail:true,
                }
            },
            password:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                    isRequired:true,
                    minLength:6,
                }
            },
            confirmPassword:{
                value:'',
                valid:false,
                type:'textinput',
                rules:{
                    confirmPass:'password',

                }
            }
        }
    };

    changeFormType=()=>{
        const type=this.state.type;

        this.setState({
            type:type==='Login' ?'Register' :'Login',
            action:type==='Login' ?'Register' :'Login',
            actionMode:type==='Login' ?'I want to Login' :'I want to Register',
        });
    }

    submitUser=()=>{

    }

    formHasErrors=()=>(
        this.state.hasErrors ?
            <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Ooops! Check your info.</Text>
        </View>: null
    )
    confirmPassword=()=>(
        this.state.type!=='Login' ?
        <Input
            placeholder="Confirm password"
            placeHolderTextColor="#cecece"
            type={this.state.form.confirmPassword.type}
            value={this.state.form.confirmPassword.value}
                  secureTextEntry
            // overrideStyle={{}}
            onChangeText={value=>this.updateInput('confirmPassword',value)}
        />: null
    )

    updateInput=(name,value)=>{
        this.setState({
            hasErrors:false
        });

        let formCopy=this.state.form;
        formCopy[name].value=value;

        //rules
        let rules=formCopy[name].rules;
        let valid=validationRules(value,rules,formCopy);
        formCopy[name].valid=valid;
        this.setState({
            form:formCopy
        })
    }
    render() {
        return (
            <View>
                <Input
            placeholder="Enter email"
            placeHolderTextColor="#cecece"
            type={this.state.form.email.type}
            value={this.state.form.email.value}
                    autoCapitalize={'none'}
            keyboardType={'email-address'}
            // overrideStyle={{}}
                    onChangeText={value=>this.updateInput('email',value)}
                />
                <Input
                    placeholder="Enter your password"
                    placeHolderTextColor="#cecece"
                    type={this.state.form.password.type}
                    value={this.state.form.password.value}

                    // overrideStyle={{}}
                    onChangeText={value=>this.updateInput('password',value)}
                    secureTextEntry
                />

                { this.confirmPassword()}
                { this.formHasErrors()}
                <View style={{marginTop:20}}>
                    <View style={styles.button}>
                        <Button onPress={this.submitUser} title={this.state.action}/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={this.changeFormType} title={this.state.actionMode}/>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={()=>this.props.goNext()} title="I'll do it later"/>
                    </View>
                </View>
            </View>
        )

    }
}



const styles = StyleSheet.create({

    errorContainer:{
        marginBottom:10,
        marginTop:30,
        padding:10,
         backgroundColor:'#c0392b'
    },
    errorLabel:{
        color:'#fff',
        textAlign:'center',
        textAlignVertical:'center'
    },
    button:{
        ...Platform.select({
            ios:{
                marginBottom:0
            },
            android:{
                marginBottom:10,
            marginTop:10
            }
        })
    }
});


export default AuthForm;