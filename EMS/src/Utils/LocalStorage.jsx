localStorage.clear();
const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Monthly Report",
        "taskDescription": "Compile financial data and generate a monthly report.",
        "taskDate": "2025-02-10",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Client Database",
        "taskDescription": "Ensure all client records are up to date.",
        "taskDate": "2025-02-12",
        "category": "Admin"
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 2,
    "firstName": "Rohan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Design New UI",
        "taskDescription": "Create wireframes and mockups for the new landing page.",
        "taskDate": "2025-02-15",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Review Code",
        "taskDescription": "Check the recent code push for errors and improvements.",
        "taskDate": "2025-02-18",
        "category": "Development"
      }
    ],
    "taskCount": { "active": 1, "newTask": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Manage Social Media",
        "taskDescription": "Schedule and post content for the upcoming campaign.",
        "taskDate": "2025-02-20",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Blog Post",
        "taskDescription": "Create a blog post about recent industry trends.",
        "taskDate": "2025-02-05",
        "category": "Content"
      }
    ],
    "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "firstName": "Rajesh",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Server Maintenance",
        "taskDescription": "Check server logs and apply security updates.",
        "taskDate": "2025-02-25",
        "category": "IT"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Data Backup",
        "taskDescription": "Backup and archive all critical data.",
        "taskDate": "2025-02-08",
        "category": "IT"
      }
    ],
    "taskCount": { "active": 1, "newTask": 0, "completed": 0, "failed": 1 }
  },
  {
    "id": 5,
    "firstName": "Neha",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer Support Calls",
        "taskDescription": "Handle customer inquiries and provide resolutions.",
        "taskDate": "2025-02-22",
        "category": "Support"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Training Material",
        "taskDescription": "Create slides and documents for team training.",
        "taskDate": "2025-02-02",
        "category": "HR"
      }
    ],
    "taskCount": { "active": 1, "newTask": 0, "completed": 1, "failed": 0 }
  }
];

  
const admin = [
  {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
  }
  ];
  
export const  setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))


}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'))
  console.log(employees,"  ",admin);
  return {employees,admin}

}
      
      
  
  