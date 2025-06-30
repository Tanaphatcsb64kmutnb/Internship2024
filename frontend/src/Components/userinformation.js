// import React, { useState, useEffect, useContext } from 'react';
// import '../css/home.css';
// import User from './userhome';
// import { UserContext } from './userContext';
// import axios from 'axios';

// export default function UserInformation() {
//     const [userDevices, setUserDevices] = useState([]);
//     const { user } = useContext(UserContext);

//     useEffect(() => {
//         if (user && user.userid) {
            
//             axios.get(`http://localhost:8081/user_devices/${user.userid}`)
//                 .then(response => {
//                     setUserDevices(response.data);
//                 })
//                 .catch(error => console.error('Error fetching user devices:', error));
//         }
//     }, [user]);

//     if (!user) {
//         return <p>Loading user information...</p>;
//     }

//     return (
//         <div>
//             <User />
//             <div className='condiv'>
//                 {userDevices.length > 0 ? (
//                     <ul className='listassign'>
//                         {userDevices.map(device => (
//                             <li key={device.id}>
//                                 {device.sticker}
//                                 <br/>
//                                 <br/> อุปกรณ์: {device.device_name}
//                                 {/* <br/> ยี่ห้อ: {device.brand}
//                                 <br/> รุ่น: {device.model} */}
//                                 <br/>
//                                 <br/> Serial: {device.serial_number}
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No devices found for this user.</p>
//                 )}
//             </div>
//         </div>
//     );
// }

import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';
import User from './userhome';
import axios from 'axios';
import DeviceDetailModal from './DeviceDetial';
import '../css/home.css';

export default function UserInformation() {
    const [userDevices, setUserDevices] = useState([]);
    const [userRegister, setUserRegister] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedDevice, setSelectedDevice] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (user && user.userid) {
            axios.get(`${process.env.REACT_APP_API_URL}/user_devices/${user.userid}`)
                .then(response => {
                    setUserDevices(response.data.userDevices);
                    setUserRegister(response.data.userRegister[0]); // Assuming the response will be an array
                })
                .catch(error => console.error('Error fetching user data:', error));
        }
    }, [user]);

    const fetchDeviceDetails = (userId, sticker, deviceId) => {
        axios.get(`${process.env.REACT_APP_API_URL}/device_details/${userId}/${sticker}/${deviceId}`)
            .then(response => {
                console.log('Device details:', response.data);
                setSelectedDevice(response.data);
            })
            .catch(error => console.error('Error fetching device details:', error));
    };

    const openModal = (device) => {
        console.log('Opening modal for device:', device);
        setSelectedDevice(device);
        setModalIsOpen(true);
        fetchDeviceDetails(user.userid, device.sticker, device.id);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedDevice(null);
    };

    if (!user) {
        return <p>Loading user information...</p>;
    }

    return (
        <div>
            <User />
            <div className='condiv'>
                <div className="content-wrapper">
                    {userRegister && (
                        <div className="user-info-container">
                            <h3 className="info-header">ข้อมูลผู้ใช้</h3>
                            <div className="info-details">
                                <p><strong>ชื่อ-นามสกุล:</strong> {userRegister.name} {userRegister.surname}</p>
                                <p><strong>อีเมล:</strong> {userRegister.email}</p>
                                <p><strong>แผนก:</strong> {userRegister.department}</p>
                            </div>
                        </div>
                    )}
                    {userDevices.length > 0 ? (
                        <div className="devices-container">
                            <h3 className="info-header">อุปกรณ์ของคุณ</h3>
                            <ul className='listassign1'>
                                {userDevices.map(device => (
                                    <li key={device.id} onClick={() => openModal(device)}>
                                        <strong>{device.sticker}</strong>
                                        <p>อุปกรณ์: {device.device_name}</p>
                                        <p>Serial: {device.serial_number}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>No devices found for this user.</p>
                    )}
                </div>
            </div>
            {selectedDevice && (
    <DeviceDetailModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        deviceDetails={selectedDevice}
    />
)}
        </div>
    );
}
