import { basePath } from './config';

export function signUpApi(data) {
    const url = `${basePath}/sign-up`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result.user) {
                return { ok: true, message: 'Usuario creado correctamente' };
            }
            return { ok: false, message: result.message };
        })
        .catch((err) => {
            return { ok: false, message: err.message };
        });
}

export function signInApi(data) {
    const url = `${basePath}/sign-in`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err.message;
        });
}

export function getUsersApi(token) {
    const url = `${basePath}/users`;

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err.message;
        });
}

export function getUsersActivesApi(token, status) {
    const url = `${basePath}/users-actives?active=${status}`;

    const params = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err.message;
        });
}

export function uploadAvatarApi(token, avatar, userId) {
    const url = `${basePath}/upload-avatar/${userId}`;

    const formData = new FormData();
    formData.append('avatar', avatar, avatar.name);

    const params = {
        method: 'PUT',
        body: formData,
        headers: {
            Authorization: token,
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err.message;
        });
}

export function getAvatarApi(avatarName) {
    const url = `${basePath}/get-avatar/${avatarName}`;

    return fetch(url)
        .then((response) => {
            return response.url;
        })
        .catch((err) => {
            return err.message;
        });
}

export function updateUserApi(token, user, userId) {
    const url = `${basePath}/update-user/${userId}`;

    const parmas = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(user),
    };

    return fetch(url, parmas)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err.message;
        });
}

export function activateUserApi(token, userId, status) {
    const url = `${basePath}/activate-user/${userId}`;

    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify({
            active: status,
        }),
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result.message;
        })
        .catch((err) => {
            return err.message;
        });
}

export function deleteUserApi(token, userId) {
    const url = `${basePath}/delete-user/${userId}`;

    const params = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result.message;
        })
        .catch((err) => {
            return err.message;
        });
}

export function signUpAminApi(token, user) {
    const url = `${basePath}/sign-up-admin`;

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(user),
    };

    return fetch(url, params)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return result.message;
        })
        .catch((err) => {
            return err.message;
        });
}
