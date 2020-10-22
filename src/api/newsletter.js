import { basePath } from './config';

export function suscribeNewsletterApi(email) {
    const url = `${basePath}/suscribe-newsletter/${email}`;
    const params = {
        method: 'POST',
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
            return err;
        });
}
