async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/pdroAlves77/DIO-Portfolio/main/Data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}