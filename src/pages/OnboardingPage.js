import React from "react";
import ProfileSetup from "../components/ProfileSetup";
import { useAuth } from "../hooks/useAuth";
import { db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const OnboardingPage = () => {
  const { user } = useAuth();

  const handleProfileSubmit = async ({ displayName, role, photo }) => {
    if (!user) {
      alert("You must be logged in!");
      return;
    }

    let photoURL = "";
    if (photo) {
      const photoRef = ref(storage, `profile_photos/${user.uid}`);
      await uploadBytes(photoRef, photo);
      photoURL = await getDownloadURL(photoRef);
    }

    await setDoc(doc(db, "users", user.uid), {
      displayName,
      role,
      photoURL,
    });

    alert("Profile saved!");
    // Optionally redirect to dashboard or elsewhere
  };

  return (
    <div>
      <h2>Set up your profile</h2>
      <ProfileSetup onSubmit={handleProfileSubmit} />
    </div>
  );
};

export default OnboardingPage;