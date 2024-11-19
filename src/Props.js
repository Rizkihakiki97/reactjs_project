import React from "react";

class Message extends React.Component {
    render() {
        return (
            <div>
            <small>{this.props.sender}:</small>
            <p>{this.props.message}</p>
            <hr/>
            </div>
        );
    }
}

// menggunakan komponen
let Props = () => (

    <div>
        <Message sender="dian" message="Hi, Apa kabar!"/>
        <Message sender="juan" message="Kabar Baik"/>
    </div>
    
);
    
// render komponen ke RealDOM
// ReactDOM.render(chat, document.getElementById("root"));

export default Props;