import React from 'react';


class Customer extends React.Component{

    render(){
        return(
            <div>
            <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
            <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job} ></CustomerInfo>
            </div>
        )

    }

}

class CustomerProfile extends React.Component{

    render(){
        return(
            <div>
                <img src={this.props.image} alt='profile'></img>
                <h1>{this.props.name}({this.props.id})</h1>
            </div>
        )
    }

}

class CustomerInfo extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.id}</h1>
                <h1>{this.props.name}</h1>
                <h1>{this.props.birthday}</h1>
                <h1>{this.props.gender}</h1>
                <h1>{this.props.job}</h1>
                
            </div>            
        )
    }

}

export default Customer;