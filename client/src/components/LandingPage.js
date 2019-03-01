import React, { Component } from 'react';
import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'




class LandingPage extends Component {

    state = {
        guilds: [],
    }

    componentDidMount() {
        this.getAllUsers()
    }

    // getAllUsers = () => {
    //     console.log('hello')
    //     axios.get('/api/guilds')
    //     .then((res) => {
    //         console.log("YOUR DATA: " + JSON.stringify(res.data))
    //         this.setState({ guilds: res.data }) 
    //     })
    // }

    getAllUsers = async () => {
        const res = await axios.get('/api/guilds')
        const data =  res.data
        console.log(data)
        this.setState({guilds: data})
    }   

    render() {

       const guilds =  this.state.guilds.map((guild, i) => {
           return (
               <div key={i}>
                   <Link to={`/guilds/${guild._id}`}><h3>{guild.guildName}</h3></Link>
               </div>
           )
       })

        return (
            <div >
                <h1>Guilds Available</h1>
                {guilds}
            </div>
        );
    }
}

export default LandingPage;