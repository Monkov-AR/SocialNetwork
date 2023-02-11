import React from 'react'
import preloader from "../../../assets/images/preloader.svg"

const ProfileInfo = (props) => {
    if(!props.profile){
        return <img src={preloader} />
    }
    return (
        <div>
            <div>ProfileInfo</div>
            <div>
                <img src={props.profile.photos.large} />
                description
            </div>
        </div>
    )
}

export default ProfileInfo;