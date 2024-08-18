async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    //Select the Data Container Element

    const dataContainer = document.getElementById("api-data");


    //Fetch Data Using try-catch:

    try{
        const response = await fetch(apiUrl);
        const users = await response.json();

        // await response.json()
        dataContainer.innerHTML = '';

        //Create and Append User List:

        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);
    }catch (error) {
       // Error Handling:
       dataContainer.innerHTML = 'Failed to load user data.';
    }
}
    //Invoke fetchUserData on DOMContentLoaded:
    document.addEventListener('DOMContentLoaded', fetchUserData);