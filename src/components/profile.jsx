import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const url = "https://rickandmortyapi.com/api/character/";

    const idNum = () => {
        return Math.floor(Math.random() * Math.floor(826));
    };

    const charId = idNum();
    const combined = url + charId;

    useEffect(() => {
        fetch(combined)
            .then(res => res.json())
            .then(data => setProfile(data))
            .catch(err => console.error(err));
    }, []);

    // let params = useParams()

    return (
        <>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card p-3 py-4">
                            <div className="text-center">
                                <img src={profile.image} width="200" className="rounded-circle" />
                            </div>
                            <div className="text-center mt-3">
                                <span className="bg-secondary p-1 px-4 rounded text-white">{profile.name}</span>
                                <h5 className="mt-2 mb-0">{profile.id}</h5>
                                <span>{profile.species}</span>
                                <div className="px-4 mt-1">
                                    <p className="fonts">Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <ul className="social-list">
                                    <li><i className="fa fa-facebook"></i></li>
                                    <li><i className="fa fa-dribbble"></i></li>
                                    <li><i className="fa fa-instagram"></i></li>
                                    <li><i className="fa fa-linkedin"></i></li>
                                    <li><i className="fa fa-google"></i></li>
                                </ul>
                                <div className="buttons">
                                    <button className="btn btn-outline-primary px-4">Message</button>
                                    <button className="btn btn-primary px-4 ms-3">Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
