// task 01
const studentInfo = {
    id: 'NA-323A66',
    name: 'Sadat Saon',
    birthMonth: 12,
    favoriteColor: 'skyblue'
};
console.log('StudentInfo', studentInfo);

// task 02
// object and data management
// using object lateral method
const taskObject = {
    id: 'NA-323A66' + '_' + Date.now(),
    title: 'full-stack web development',
    description: 'completed html,css and now learning javaScript',
    priority: 3,
    completed: false,
    createdDate: new Date(),
    dueDate: '2025-10-03',
    category: 'Assignment'
}
console.log('taskObject', taskObject);