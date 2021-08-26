import React, { Component } from 'react';

class Persons extends Component {
    style = {
        list: {
            margin: "auto",
            maxWidth: "300px"
        }
    }

    lastInputRef = null;

    componentDidMount(){
        this.lastInputRef.focus();
    }

    render(){
        return (
            <div style={this.style.list}>
                {
                    this.props.persons.map(person => (
                        <p className="paragraph" key={person.id}>
                            I am <b>{person.name}</b>. Age: <b>{person.age}</b>
                            <br/>
                            <input type="text" value={person.name}
                                onChange={e => {this.props.changed.call(null, person.id, e)}}
                                ref={element => {this.lastInputRef = element} }/>
                        </p>
                        )
                    )
                }
            </div>
        );
    }
}

export default Persons;