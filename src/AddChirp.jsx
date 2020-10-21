import React from 'react';

class AddChirp extends React.Component{
    state = {
        name: '',
        text: ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.func({name: this.state.name, text:this.state.text})
        this.props.func2()
    }
    render(){
        return (
            <>
                <div className='card'>
                    <h3>Name: </h3>
                    <input value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                            <h3>Chirp: </h3>
                    <textarea value={this.state.text} onChange={e => this.setState({text: e.target.value})} />
                </div>
                <button onClick={this.handleSubmit} >Add Chirp</button>
            </>
        )
    }
}

export default AddChirp