import httpHelper from '../helpers/httpHelper';

export default {
    getInstructors: getInstructors,
    getInstructor: getInstructor,
    saveInstructor: saveInstructor,
    deleteInstructor: deleteInstructor
};

function getInstructors() {
    return httpHelper.get('/api/instructor/list', {});
}

function getInstructor(id) {
    return httpHelper.get('/api/instructor/getInstructor', {id});
}

function saveInstructor(instructor) {
    return httpHelper.post('/api/instructor/save', {instructor});
}

function deleteInstructor(id) {
    return httpHelper.post('/api/instructor/delete', {id});
}