const roleData = {
    "Student": {
        desc: "A focused view of your saved appointment and medical-leave workflow records.",
        cards: [
            { title: "Upcoming appointments", value: "1 (Tomorrow)" },
            { title: "Pending requests", value: "0" },
            { title: "Active leave cases", value: "1" },
            { title: "Archived records", value: "4" }
        ]
    },
    "Medical Officer": {
        desc: "Manage patient check-ins, medical notes, and leave approvals.",
        cards: [
            { title: "Queue today", value: "12 patients" },
            { title: "Pending diagnoses", value: "3" },
            { title: "Issued MCs", value: "5" },
            { title: "Total completed", value: "148" }
        ]
    },
    "Clinic Admin": {
        desc: "Oversee clinic workflow statuses, system logs, and graduation archiving.",
        cards: [
            { title: "Total clinic visits", value: "1,240" },
            { title: "Unresolved cases", value: "2" },
            { title: "System status", value: "Operational" },
            { title: "Archived profiles", value: "310" }
        ]
    }
};

let currentRole = "Student";

function switchRole(role) {
    currentRole = role;
    
    document.querySelectorAll('.role-btn').forEach(btn => {
        if(btn.textContent === role) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    updateView();
}

function switchTab(element, tabName) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    
    document.getElementById('main-section-title').textContent = `${tabName} - ${currentRole} View`;
}

function updateView() {
    const data = roleData[currentRole];
    document.getElementById('main-section-title').textContent = "Campus care at a glance";
    document.getElementById('main-section-desc').textContent = data.desc;
    
    const grid = document.getElementById('cards-grid');
    grid.innerHTML = '';
    
    data.cards.forEach(card => {
        grid.innerHTML += `
            <div class="card">
                <h3>${card.title}</h3>
                <div class="value">${card.value}</div>
            </div>
        `;
    });
}