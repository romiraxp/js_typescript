import Cart from '../service/Cart';
import Book from '../domain/book';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';

test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new item is added', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart.items).toEqual([{id: 1001, name: 'War and Piece', author: 'Leo Tolstoy', price: 2000, pages: 1225}]);
});

test('calculate total sum and discount calculate', () => {
  const cart = new Cart();
  const genre = ['фантастика', 'боевик', 'фэнтези'];
  
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 500, 2012,'США','Avengers Assemble!',genre,'137 мин. / 02:17'));

  expect(cart.calculate()).toBe(3400);
  expect(cart.discount(10)).toBe(3060);
  expect(cart.discount(0)).toBe(3400);
  expect(cart.discount(101)).toBe(3400);  
});

test('removal from the cart', () => {
  const cart = new Cart();
  const genre = ['фантастика', 'боевик', 'фэнтези'];
  
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 500, 2012,'США','Avengers Assemble!',genre,'137 мин. / 02:17'));

  let lengthArr = cart.items.length

  cart.fromCart(1001);

  let lengthArr_new = cart.items.length
    
  expect(lengthArr_new).toBe(lengthArr - 1);
})

test('generate a message in a case the cart is empty', () => {
  const cart = new Cart();
  expect(() => cart.fromCart(1001)).toThrow('The cart is empty')
})

test('nothing to remove as there is no such ID', () => {
  const cart = new Cart();
  const genre = ['фантастика', 'боевик', 'фэнтези'];
  
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1010, 'The Avengers', 500, 2012,'США','Avengers Assemble!',genre,'137 мин. / 02:17'));

  let lengthArr = cart.items.length
  
  cart.fromCart(1000);
  
  let lengthArr_new = cart.items.length

  expect(lengthArr_new).toBe(lengthArr);
})