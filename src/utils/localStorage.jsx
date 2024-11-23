const employees = [
    {
        id: 1,
        firstName: "Rahul",
        email: "e@e.com",
        password: "1",
        title: "Prepare Report",
        taskCounts:{
            active:3,
            newtask:1,
            completed:4,
            failed:8,
        },
        tasks: [
            { 
                taskNumber: 1,
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Prepare Report",
                description: "Compile the monthly sales report.",
                date: "2024-10-21",
                category: "Reporting"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                title: "Team Meeting",
                description: "Discuss project updates with the team.",
                date: "2024-10-15",
                category: "Meetings"
            },
            {
                taskNumber: 3,
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Client Follow-up",
                description: "Follow up with the client regarding their feedback.",
                date: "2024-10-22",
                category: "Client Relations"
            }
        ]
    },
    {
        id: 2,
        firstName: "Priya",
        email: "e@2.com",
        password: "1",
        taskCounts:{
            active:4,
            newtask:1,
            completed:7,
            failed:4,
        },
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: "Design Mockup",
                description: "Create a mockup for the new website design.",
                date: "2024-10-25",
                category: "Design"
            },
            {
                taskNumber: 2,
                active: true,
                newTask: false,
                completed: true,
                failed: false,
                title: "Code Review",
                description: "Review code submitted by junior developers.",
                date: "2024-10-18",
                category: "Development"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: "SEO Optimization",
                description: "",
            }
        ]
    },
    {
        id: 3,
        firstName: "Amit",
        email: "e@3.com",
        password: "1",
        taskCounts:{
            active:3,
            newtask:2,
            completed:5,
            failed:1,
        },
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: 'Market Research',
                description: 'Conduct market research for new product launch.',
                date: '2024-10-30',
                category: 'Research'
            },
            {
                taskNumber: 2,
                active: true,
                newTask: false,
                completed: true,
                failed: false,
                title: 'Social Media Campaign',
                description: 'Launch social media campaign for product awareness.',
                date: '2024-10-20',
                category: 'Marketing'
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: 'Email Newsletter',
                description: 'Draft and send out the monthly newsletter.',
                date: '',
                category: ''
            }
        ]
    },
    {
        id: 4,
        firstName: "Sneha",
        email: 'e@4.com',
        password: '1',
        taskCounts:{
            active:2,
            newtask:1,
            completed:2,
            failed:2,
        },
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: 'Budget Analysis',
                description: 'Analyze the budget for the upcoming quarter.',
                date: '2024-10-28',
                category: 'Finance'
            },
            {
                taskNumber: 2,
                active: true,
                newTask: false,
                completed: true,
                failed: false,
                title: 'Vendor Negotiation',
                description: 'Negotiate terms with vendors for better pricing.',
                date: '2024-10-15',
                category: 'Procurement'
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: 'Inventory Check',
                description: '',
                date: '',
                category: ''
            }
        ]
    },
    {
        id: 5,
        firstName: "Ravi",
        email: 'e@5.com',
        password: '1',
        taskCounts:{
            active:2,
            newtask:1,
            completed:2,
            failed:2
        },
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                title: 'User Testing',
                description: 'Conduct user testing for the new application.',
                date: '2024-10-29',
                category: 'Testing'
            },
            {
                taskNumber: 2,
                active: true,
                newTask: false,
                completed: true,
                failed: false,
                title: 'Documentation Update',
                description: 'Update documentation based on recent changes.',
                date: '2024-10-19',
                category: 'Documentation'
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                title: 'Bug Fixing',
                description: 'Fix bugs reported in the last release.',
                date: '',
                category: ''
            }
        ]
    }
];


const admin = [{
    id: 1,
    email: 'a@a.com',
    password: '1',
}];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees, admin };
};
