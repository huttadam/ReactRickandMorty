import React, {useEffect, useState} from 'react'





const Profile = () => {
    
    const [profile, setProfile] = useState({})
    const url = "https://rickandmortyapi.com/api/character/"
    const idNum = () =>{return Math.floor(Math.random() * Math.floor(826))}
    const charId = idNum()
    const combined = url + charId


    useEffect(() => {
        fetch(combined)
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(err => console.error(err))
    }, [])

    


    return  (
        <>
        <h1>Profile # {profile.id}</h1>
        <p> Name : {profile.name}</p>
        <img src={profile.image} alt ="Character Avatar" />
        <p> Alive or Dead: {profile.status}</p>
        </>
        )
}


export default Profile