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
    
    let menuHTML = `<div class="sidebar-header" style="padding: 20px; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.1); color: #D4AF37;">MENU</div><ul style="list-style: none; padding: 10px;">`;
    menuItems.forEach(item => {
        menuHTML += `<li style="padding: 12px 15px;"><a href="${item.link}" style="text-decoration: none; color: white; display: block;">${item.icon} ${item.name}</a></li>`;
    });
    menuHTML += `</ul>`;
    sidebar.innerHTML = menuHTML;

    // 2. Three-Line Toggle Button
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'menu-toggle';
    toggleBtn.innerHTML = '<span></span><span></span><span></span>';
    
    // 3. Overlay
    const overlay = document.createElement('div');
    overlay.id = 'sidebar-overlay';

    document.body.appendChild(toggleBtn);
    document.body.appendChild(sidebar);
    document.body.appendChild(overlay);

    // Toggle Function
    toggleBtn.onclick = function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('sidebar-active');
        overlay.classList.toggle('overlay-active');
    };

    // Close on Outside Click
    overlay.onclick = function() {
        sidebar.classList.remove('sidebar-active');
        overlay.classList.remove('overlay-active');
    };
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createSidebar);
} else {
    createSidebar();
}
