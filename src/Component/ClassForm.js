import React, {useState} from "react"

class ClassForm extends React.Component {
    constructor() {
        super();
        this.state = {username:"",email:"",password:"",country:"",region:""}
    }


    handleUser(e) {
        this.setState ({username:e.target.value})
    }

    handleEmail(e) {
        this.setState ({email:e.target.value})
    }

    handlePassword(e) {
        this.setState ({password:e.target.value})
    }

    handleCounty(e) {
        this.setState ({country:e.target.value})
    }

    handleRegion(e) {
        this.setState ({region:e.target.value})
    }

    render() {
        return(
        <div>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <input name="username" type="text" placeholder="username" value={this.state.username} onChange={(e) => this.handleUser(e)}/>
            
                <input name="email" type="text" placeholder="email"  value={this.state.email} onChange={(e) => this.handleEmail(e)}/>
        
                <input name="password" type="text" placeholder="password" value={this.state.password} onChange={(e) => this.handlePassword(e)}/>
                
                <input name="country" type="text" placeholder="country" value={this.state.country} onChange={(e) => this.handleCounty(e)}/>
                
                <input name="region" type="text" placeholder="region" value={this.state.region} onChange={(e) => this.handleRegion(e)}/>
                
                <input type="submit" className="submit"/>
            </form>
        </div>
        );
    }
}

export default ClassForm;