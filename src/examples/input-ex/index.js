import React,{useState} from 'react'
import Input from 'share/components/atoms/input'
import InputGroup from 'share/components/molecules/input-group'

const InputExamples = () => {
    const [firstName, setFirstName] = useState('')
    console.log("firstname",firstName)
    return (
        <div>
        {/* Inputs */}
        <h3>Input - Text</h3>
        <Input 
            type="text"
            value={firstName} 
            onChange={e=>setFirstName(e.target.value)}
            size="md"
        />

        <h3>Input - Password</h3>
        <Input 
            type="password"
            value={firstName} 
            onChange={e=>setFirstName(e.target.value)}
            size="md"
        />
        <h3>Input - TextArea</h3>
        <Input 
            type="textarea"
            value={firstName} 
            onChange={e=>setFirstName(e.target.value)}
            block
            rows={10}
            resize
        />
        <h3>Input group Password</h3>
        <InputGroup type="password" error size="560px" block  onChange={e=>setFirstName(e.target.value)} errorText="Please fill all fields" />

        <h3>Input group TextArea</h3>

        <InputGroup type="textarea" inputLabel="Unique ID" rows={6} disabled size="560px" block  onChange={e=>setFirstName(e.target.value)} errorText="Please fill all fields" />

        </div>
    )
}

export default InputExamples
