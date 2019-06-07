export function APIService() {
    const getUserGroupId = () => {
        return fetchData('https://avetiq-test.firebaseapp.com/group/artak_poghosyan');
    };

    const getUserUserId = () => {
        return fetchData('https://avetiq-test.firebaseapp.com/user/artak_poghosyan');
    };

    const getUserData = () => {
        return Promise.all([getUserGroupId(), getUserUserId()]);
    };

    const getProsConsData = (groupId, userId) => {
        return fetchData(`https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`);
    };

    const updateProsConsData = (userData, data) => {
        return putData(`https://avetiq-test.firebaseapp.com/proscons/group/${userData.groupId}/user/${userData.userId}`, data);
    };

    return {
        getUserData,
        getProsConsData,
        updateProsConsData
    }
}

function fetchData(url) {
    return fetch(url).then(response => {
        if (response.ok) {
            return response.json()
        }

        throw new Error(response.statusText);
    })
}

function putData(url, data) {
    return fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            return response.json()
        }

        throw new Error(response.statusText);
    })
}
