import React from 'react';
/*
function Chirp(props){
    let likes = 0
    function handleLikes(){
        console.log('likes')
        likes = likes++
    }
    return (
        <div className='card'>
            <h1>Username: {props.name}</h1>
            <h4>Text: {props.text}</h4>
            <button onClick={handleLikes}>Like Button!</button>
            <h5>Number of likes: {likes}</h5>
        </div>
    )
}
*/

class Chirp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            likes: 0
        }
    }
    
    handleLikes = () => {
        this.setState({likes: this.state.likes + 1})
        console.log(this.state.likes)
    }
    render(){
        return (
            <div className='card'>
                <h1>Username: {this.props.name}</h1>
                <h4>Text: {this.props.text}</h4>
                <button onClick={this.handleLikes}>Like Button!</button>
                <h5>Number of likes: {this.state.likes}</h5>
            </div>
        )
    }
    
}

export default Chirp