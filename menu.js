// menu.js - School Management System Sidebar Logic

const menuItems = [
    { name: "Dashboard", link: "index.html", icon: "🏠" },
    { name: "Student Admission", link: "admission.html", icon: "📝" },
    { name: "Student List", link: "students.html", icon: "👨‍🎓" },
    { name: "Attendance", link: "attendance.html", icon: "📅" },
    { name: "Fees Management", link: "fees.html", icon: "💰" },
    { name: "Exam Results", link: "results.html", icon: "📊" },
    { name: "Class Timetable", link: "timetable.html", icon: "🕒" },
    { name: "Staff Management", link: "staff.html", icon: "👨‍🏫" },
    { name: "Library", link: "library.html", icon: "📚" },
    { name: "Transport/Bus", link: "transport.html", icon: "🚌" },
    { name: "Hostel", link: "hostel.html", icon: "🏢" },
    { name: "Notice Board", link: "notices.html", icon: "📢" },
    { name: "Settings", link: "settings.html", icon: "⚙️" },
    { name: "Logout", link: "logout.html", icon: "🚪" }
];

function createSidebar() {
    // 1. Sidebar Container
    const sidebar = document.createElement('div');
    sidebar.id = 'sidebar';
    sidebar.className = 'sidebar-hidden'; // CSS se handle hoga

    // 2. Menu Items Loop
    let menuHTML = `<div class="sidebar-header">Menu</div><ul>`;
    menuItems.forEach(item => {
        menuHTML += `<li><a href="${item.link}">${item.icon} ${item.name}</a></li>`;
    });
    menuHTML += `</ul>`;
    sidebar.innerHTML = menuHTML;

    // 3. Three-Line Toggle Button (Transparent)
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'menu-toggle';
    toggleBtn.innerHTML = '<span></span><span></span><span></span>';
    
    // 4. Overlay (Sidebar ke bahar touch detect karne ke liye)
    const overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';

    // Append to Body
    document.body.appendChild(toggleBtn);
    document.body.appendChild(sidebar);
    document.body.appendChild(overlay);

    // --- EVENT LISTENERS ---

    // Toggle click function
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('sidebar-active');
        overlay.classList.toggle('overlay-active');
    });

    // Outside click logic (Overlay par touch/click)
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('sidebar-active');
        overlay.classList.remove('overlay-active');
    });

    // Sidebar ke andar click hone par band na ho
    sidebar.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Page load hone par menu create karein
document.addEventListener('DOMContentLoaded', createSidebar);
