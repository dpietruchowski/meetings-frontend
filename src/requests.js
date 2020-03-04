export const URL = "http://localhost:8000"

export function get(endpoint, data) {
    return fetch(URL + endpoint, {
        method: 'GET',
        body: JSON.stringify(data),
        credentials: "same-origin",
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
    }).then(resp => resp.json());
}

export function post(endpoint, data) {
    return fetch(URL + endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: "same-origin",
        headers: {

            'X-Requested-With': 'XMLHttpRequest'
        },
    });
}

export function put(endpoint, data) {
    return fetch(URL + endpoint, {
        method: 'PUT',
        body: JSON.stringify(data),
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
    }).then(resp => resp.json());
}

export function del(endpoint, data) {
    return fetch(URL + endpoint, {
        method: 'DELETE',
        body: JSON.stringify(data),
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
    }).then(resp => resp.json());
}