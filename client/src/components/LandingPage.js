import React, { Component } from 'react';
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'




class LandingPage extends Component {

    state = {
        guilds: [{}],
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(`http://localhost:3001/api/guilds`)
        .then((res) => this.setState({ guilds: res.data }))
    }

    render() {
        return (
            <div >
                <h1>Guilds Available</h1>
                {this.state.guilds.map((guild, i) => (
                    <div key={i}>
                        <Link to={`/guild/${guild._id}`}><h3>{guild.guildName}</h3></Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default LandingPage;