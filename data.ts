import { Book } from './types';

export const books: Book[] = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: 'Feb 12, 2020',
    authorImageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    author: 'Tom Cook',
    title: 'Improve your customer experience',
    price: 19.99,
    rating: 4,
    category: 'Business',
    description: '',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80',
    date: 'Mar 10, 2021',
    authorImageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    author: 'Jane Doe',
    title: 'The Art of Programming',
    price: 29.99,
    rating: 5,
    category: 'Technology',
    description: '',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    date: 'Jan 5, 2019',
    authorImageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    author: 'John Smith',
    title: 'Healthy Living',
    price: 15.99,
    rating: 3,
    category: 'Health',
    description: '',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: '2024-07-05',
    authorImageUrl: 'https://via.placeholder.com/150?text=Author1',
    author: 'Author 1',
    title: 'Business Book 1',
    price: 12.34,
    rating: 5,
    category: 'Business',
    description: '',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    date: '2024-07-05',
    authorImageUrl: 'https://via.placeholder.com/150?text=Author2',
    author: 'Author 2',
    title: 'Business Book 2',
    price: 15.67,
    rating: 4,
    category: 'Business',
    description: '',
  },
  {
    id: '6',
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80',
    date: '2024-07-05',
    authorImageUrl: 'https://via.placeholder.com/150?text=Author3',
    author: 'Author 3',
    title: 'Technology Book 1',
    price: 20.45,
    rating: 3,
    category: 'Technology',
    description: '',
  },
  {
    id: '7',
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80',
    date: '2024-07-05',
    authorImageUrl: 'https://via.placeholder.com/150?text=Author4',
    author: 'Author 4',
    title: 'Technology Book 2',
    price: 18.99,
    rating: 5,
    category: 'Technology',
    description: '',
  },
  {
    id: '8',
    imageUrl:
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    date: '2024-07-05',
    authorImageUrl: 'https://via.placeholder.com/150?text=Author5',
    author: 'Author 5',
    title: 'Health Book 1',
    price: 17.89,
    rating: 2,
    category: 'Health',
    description: '',
  },
  {
    id: '9',
    imageUrl:
      'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400',
    date: '2024-07-05',
    authorImageUrl: 'https://via.placeholder.com/150?text=Author6',
    author: 'Author 6',
    title: 'Health Book 2',
    price: 14.56,
    rating: 4,
    category: 'Health',
    description: '',
  },
];
