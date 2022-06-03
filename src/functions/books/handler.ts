import { Context, Handler } from 'aws-lambda';
import { BooksController } from '../../controller/books';
import { books } from '../../model';

const booksController = new BooksController(books);

export const createBook: Handler = (event: any, context: Context) => {
    return booksController.create(event, context);
};

export const updateBook: Handler = (event: any) => booksController.update(event);

export const findBook: Handler = () => booksController.find();

export const findOneBook: Handler = (event: any, context: Context) => {
    return booksController.findOne(event, context);
};

export const deleteOneBook: Handler = (event: any) => booksController.deleteOne(event);