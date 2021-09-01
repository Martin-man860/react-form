import React, {useState} from "react"

function FunctionForm() {
    const [username,setUser] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [country,setCounty] = useState("")
    const [region,setRegion] = useState("")

    function handleUser(e) {
        setUser(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePassword(e) {
        setPassword(e.target.value)
    }
    function handleCounty(e) {
        setCounty(e.target.value)
    }
    function handleRegion(e) {
        setRegion(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        setUser("")
        setEmail("")
        setPassword("")
        setCounty("")
        setRegion("")
    }

    return (
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input name="username" type="username" placeholder="username" value={username} onChange={(e) => handleUser(e)} />
            <input name="email" type="email" placeholder="email" value={email} onChange={(e) => handleEmail(e)} />
            <input name="password" type="password" placeholder="password" value={password} onChange={(e) => handlePassword(e)} />
            <input name="country" type="country" placeholder="country" value={country} onChange={(e) => handleCounty(e)} />
            <input name="region" type="region" placeholder="region" value={region} onChange={(e) => handleRegion(e)} />
            <input type="submit" className="submit" />
          </form>
        </div>
      );
}

export default FunctionForm;