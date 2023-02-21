import React from "react";
import PropTypes from 'prop-types';

const Profile=(props)=>{
    const {fullName,bio,profession,handleName} = props;
    const image = props.children;
    return(
        <div style = {{border: '1px solid green',textAlign:'center',fontFamily:'cursive'}}>
           {props.children}
           <h2>{fullName}</h2>
           <p>{bio}</p>
           <p>{profession}</p>
           <button onClick={() => handleName(fullName)}>click me</button>
        </div>
    );
}

Profile.defaultProps = {
    fullName : 'Hamza Chouchene',
    bio : 'Heyy This is mee ',
    profession: 'Genie logiciel student and GOMYCODE full stack developer',
    handleName: (name) => alert(`hello , ${name}`),
};

Profile.propTypes = {
    fullName : PropTypes.string.isRequired,
    bio : PropTypes.string,
    profession: PropTypes.string,
    handleName : PropTypes.func,
};



export default Profile;