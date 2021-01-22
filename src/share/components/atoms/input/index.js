import React,{useState,useEffect} from 'react'
import {StyledInput,Styles,EyeIcon,IconWrapper} from './styles'
import Eye from './assets/eye.svg'
import EyeOff from './assets/eye-off.svg'
/**
 * size - sm-31px -lg-48px - default-md-38px 
 * type - text-password-textarea
 * disabled - true or false
 * error state border red
 */
const Input = ({type,size,block,disabled,error,value,className,...rest}) => {
    const [showPassword, setShowPassword] = useState(false)
    const [inputType, setInputType] = useState(type)
    const handlePassword=()=>{
        setShowPassword(!showPassword);
    }
    useEffect(() => {
        let nextType=type==='text' ? 'text' :'password'
        if(showPassword) nextType="text"
        setInputType(nextType)
    }, [showPassword])

    return (
        <Styles size={size} block={block}  >
        <StyledInput 
            type={inputType} 
            size={size} 
            block={block} 
            disabled={disabled} 
            error={error} 
            {...rest} 
            value={value}
            className={className}
        />
         {type==='password' &&
        <IconWrapper>
            <EyeIcon  src={showPassword ? EyeOff : Eye} alt="eye" onClick={handlePassword}/>
        </IconWrapper>
         }
        </Styles>
    )
}

Input.defaultProps={
    type:"text",
    size:"md",
    disabled:false,
    error:false,
    block:false,
}


export default Input