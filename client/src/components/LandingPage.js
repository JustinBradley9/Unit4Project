import React, { Component } from 'react';
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'




class LandingPage extends Component {

    state = {
        guild: [{}],
        // addUserFormVisible: false
    }

    componentDidMount(){
        this.getAllGuilds() 
    } 
     
    getAllGuilds = () => {
        axios.get(`/guilds`)
        .then((res) => this.setState({ guild: res.data }))
    }

    render() {
        return (
            <div >
            {this.state.guild.map((guild, i) => (
                <div key={i}>
                    <Link to={`/guilds/${guild._id}`}> <h3>{guild.guildname}</h3> </Link>
                </div>
            ))}
            </div>
        );
    }
}

export default LandingPage;