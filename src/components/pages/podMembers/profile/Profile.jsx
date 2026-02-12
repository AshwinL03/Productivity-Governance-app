import { useState, useEffect } from "react";
 
 
import ProfHeader from "./ProfileHeader";
import ProfileBioCard from "./ProfileBioCard";
import ProfileSkillCard from "./ProfileSkillCard";
import ProfileCertifications from "./ProfileCertifications";
import ProfileProjects from "./ProfileProjects";
import ProfileAbout from "./ProfileAbout";
import ProfileSaveChanges from "./ProfileSaveChanges";
import ProfileLoading from "./ProfileLoading";
import "../../../stylesheet/Profile.css";
 
const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2) return true;
    if (obj1 == null || obj2 == null) return obj1 === obj2;
    if (typeof obj1 !== typeof obj2) return false;
 
    if (typeof obj1 !== 'object') return obj1 === obj2;
 
    if (Array.isArray(obj1)) {
        if (!Array.isArray(obj2) || obj1.length !== obj2.length) return false;
        return obj1.every((item, index) => deepEqual(item, obj2[index]));
    }
 
    if (Array.isArray(obj2)) return false;
 
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
 
    if (keys1.length !== keys2.length) return false;
 
    return keys1.every(key => {
        return keys2.includes(key) && deepEqual(obj1[key], obj2[key]);
    });
};
 
const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [initialProfileData, setInitialProfileData] = useState(null);
 
    const hasChanges = (profileData && initialProfileData)
        ? !deepEqual(profileData, initialProfileData)
        : false;
 
    useEffect(() => {
        // Simulating data fetch to match the screenshot
        const fetchedData = {
            name: "Jane Doe",
            role: "Senior POD Member",
            bio: "Experienced team member with a passion for delivering high-quality work and collaborating across teams.",
            about: "I am a dedicated professional with over 5 years of experience in full-stack development. I thrive in collaborative environments and enjoy solving complex problems. My expertise lies in building scalable web applications using modern technologies like React, Node.js, and TypeScript. In my free time, I love to contribute to open-source projects and mentor aspiring developers.",
            email: "jane.doe@company.com",
            experience: 168480000000,
            skills: ["React", "TypeScript", "Node.js", "UI/UX Design", "Project Management"],
            certifications: [
                { name: "AWS Certified Solutions Architect", year: "2024" },
                { name: "Certified Scrum Master", year: "2023" },
                { name: "Google Analytics Certification", year: "2023" }
            ],
            projects: [
                {
                    title: "Project 1",
                    start_year: 2025,
                    description: "Led frontend development for mission-critical dashboard."
                },
                {
                    title: "Project 2",
                    start_year: 2024,
                    description: "Led frontend development for mission-critical dashboard.",
                    end_year: 2025,
                },
                {
                    title: "Project 3",
                    start_year: 2023,
                    description: "Led frontend development for mission-critical dashboard.",
                    end_year: 2024,
                }
 
            ]
        }
 
 
        setInitialProfileData(fetchedData);
        setProfileData(fetchedData);
    }, []);
 
    if (!profileData) {
        return <ProfileLoading />;
    }
 
    return (
        <div className="prof-container">
            <ProfHeader isEditing={isEditing} setIsEditing={setIsEditing} setProfileData={setProfileData} initialProfileData={initialProfileData} />
            <ProfileBioCard profileData={profileData} isEditing={isEditing} setProfileData={setProfileData} />
            <ProfileSkillCard profileData={profileData} isEditing={isEditing} setProfileData={setProfileData} />
            <ProfileCertifications profileData={profileData} isEditing={isEditing} setProfileData={setProfileData} />
            <ProfileProjects profileData={profileData} isEditing={isEditing} setProfileData={setProfileData} />
            <ProfileAbout profileData={profileData} isEditing={isEditing} setProfileData={setProfileData} />
 
 
            {
                (hasChanges == true) && (
                    <ProfileSaveChanges
                        visible={hasChanges}
                        onSave={() => {
                            setInitialProfileData(profileData);
                            setIsEditing(false);
                        }}
                        onCancel={() => {
                            setProfileData(initialProfileData);
                            setIsEditing(false);
                        }}
                    />
                )
            }
        </div>
    );
};
 
export default Profile;
 