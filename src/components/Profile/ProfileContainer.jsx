import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {setUserProfile} from "../../redux/profileReducer"
import { useParams } from 'react-router-dom'; 
import Profile from "./Profile";

// какой то  хреновый костыль  
export function withRouter(Children){
    return(props)=>{
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
   }
}

class ProfileContainer extends React.Component{
    
    componentDidMount(){
        // тут берется ИД из местной хуеты очередной обертки withRouter
        // которая древняя как говно мамонта и уже не используется
        // если id пустой то берется дефолный 27905(ид бабы с картинкой)
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 27905;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {            
            this.props.setUserProfile(response.data)
        });
    }
    
    render(){
        return (
            // берет все пропсы которые пришли в компоненту
            // раскукоживает и засовывает их в профайл
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}
let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer) );