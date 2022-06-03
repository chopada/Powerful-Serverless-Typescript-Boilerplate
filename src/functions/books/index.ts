import { handlerPath } from '@libs/handlerResolver';

export const createBook = {
    handler: `${handlerPath(__dirname)}/handler.createBook`,
    events: [
        {
            http: {
                method: 'post',
                path: 'books/',
            },
        },
    ],
};

export const updateBook = {
    handler: `${handlerPath(__dirname)}/handler.updateBook`,
    events: [
        {
            http: {
                method: 'put',
                path: 'books/{id}',
            },
        },
    ],
};

export const findBook = {
    handler: `${handlerPath(__dirname)}/handler.findBook`,
    events: [
        {
            http: {
                method: 'get',
                path: 'books/',
            },
        },
    ],
};

export const findOneBook = {
    handler: `${handlerPath(__dirname)}/handler.findOneBook`,
    events: [
        {
            http: {
                method: 'get',
                path: 'books/{id}',
            },
        },
    ],
};

export const deleteOneBook = {
    handler: `${handlerPath(__dirname)}/handler.deleteOneBook`,
    events: [
        {
            http: {
                method: 'delete',
                path: 'books/{id}',
            },
        },
    ],
};

