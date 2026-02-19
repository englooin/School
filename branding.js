// branding.js - Is file ko apne har page par import karein

const brandingConfig = {
    schoolName: "The Lalit International School",
    logoPath: "logo.png", // Aapne jo bataya wahi name rakha hai
    altText: "School Logo",
    themeColor: "#2c3e50" // Aap ise change kar sakte hain
};

// Function jo header mein brand name aur logo generate karega
function applyBranding() {
    const headerElement = document.getElementById('header-brand');
    
    if (headerElement) {
        headerElement.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px; padding: 10px;">
                <img src="${brandingConfig.logoPath}" 
                     alt="${brandingConfig.altText}" 
                     style="height: 50px; width: auto; border-radius: 5px;"
                     onerror="this.style.display='none'"> 
                <h1 style="margin: 0; color: ${brandingConfig.themeColor}; font-family: Arial, sans-serif;">
                    ${brandingConfig.schoolName}
                </h1>
            </div>
        `;
    }
}

// Page load hote hi branding lag jaye
window.onload = applyBranding;
