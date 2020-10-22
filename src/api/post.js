import { basePath } from './config';

export function getPostsApi(limit, page) {
    const url = `${basePath}/get-posts?limit=${limit}&page=${page}`;

    return fetch(url)
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

export function deletePostApi(token, id) {
    const url = `${basePath}/delete-post/${id}`;

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
            return result;
        })
        .catch((err) => {
            return err.message;
        });
}

export function addPostApi(token, post) {
    const url = `${basePath}/add-post`;

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(post),
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

export function updatePostApi(token, id, post) {
    const url = `${basePath}/update-post/${id}`;

    const params = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(post),
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

export function getPostApi(urlPost) {
    const url = `${basePath}/get-post/${urlPost}`;

    return fetch(url)
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
