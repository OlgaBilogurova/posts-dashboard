export async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
        });
        return await response.json();
    } catch (error) {
        console.log('User is not authorized in app');
        console.log(error);
        return null;
    }
}

export async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
        });
        return await response.json();
    } catch (error) {
        console.log('User is not authorized in app');
        console.log(error);
        return null;
    }
}
