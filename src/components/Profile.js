// src/Profile.js
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, updateProfile } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './GoogleSingin/firebase';

const Profile = () => {

  const [user, setUser] = useState(null);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [college, setCollege] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');




  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const userRef = user ? doc(db, 'profile', user.uid) : null;


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        fetchUserData(currentUser.uid);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);


  const fetchUserData = async (uid) => {
    const userDoc = await getDoc(doc(db, 'Profile', uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      setFirstName(userData.first_name);
      setLastName(userData.last_name);
      setDepartment(userData.Position);
      setCollege(userData.department);
      setPosition(userData.college);
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    if (userRef) {
      await setDoc(userRef, { first_name,last_name,department,position,college }, { merge: true });
      await updateProfile(auth.currentUser, { displayName: first_name });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <div>
            <label>first Name:</label>
            <input
              type="text"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last name:</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label>College:</label>
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
            />
          </div>
          <div>
            <label>Department:</label>
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div>
            <label>postion:</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
     
          <button onClick={handleUpdate}>Update Profile</button>
        </div>
      ) : (
        <div>Please log in to view your profile.</div>
      )}
    </div>
  );
};

export default Profile;

