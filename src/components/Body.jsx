import React, {Component} from "react";
import axios from 'axios';

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            coffee: {}
        }
    }

    componentDidMount(){
        // axios api call
        axios.get('https://api.nasa.gov/planetary/apod?api_key=ECDznjYQgQOdrpTUmpijrWGk2yKQqupd8ooigjyE')
        .then((response) => {
            this.setState({NASA: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    // componentDidUpdate(prevProps, prevState){
    //    console.log(prevState)
    //    console.log(this.state)
        // function or do something based on changes
    //}

    render(){
        const {NASA} = this.state
        const increment = () => {
            this.setState({count: this.state.count +1})
        }
        return(
           <React.Fragment>
            <button type="button" className="btn btn-dark" onClick={increment}>
                {this.state.count}
            </button>
            <p>
                {NASA.picture_name}
            </p>
        </React.Fragment> 
        )
    }
}

export default Body 