import Cart from './service/Cart';
import Book from './domain/book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';

const genre = ['фантастика', 'боевик', 'фэнтези'];
const cart = new Cart();

console.log("Корзина пуста");
console.log(cart.items);

console.log("Добавляем в корзину Book");
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
console.log("Добавляем в корзину MusicAlbum");
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
console.log("Добавляем в корзину Movie");
cart.add(new Movie(1010, 'The Avengers', 500, 2012,'США','Avengers Assemble!',genre,'137 мин. / 02:17'));

console.log("Корзина наполнена");
console.log(cart.items);
console.log("Произвели расчеты");
console.log("-------------------");
console.log(`Итого: ${cart.calculate()}`);
console.log(`Cкидка: ${cart.calculate() - cart.discount(10)}`);
console.log(`Итого со скидкой: ${cart.discount(10)}`);
console.log("-------------------");
console.log("Удаляем из корзины товар по ID = 1001");
cart.fromCart(1001);
//cart.fromCart(1010);

console.log(cart.items);
console.log("Удаляем из корзины товар по ID = 1008");
cart.fromCart(1008);
console.log(cart.items);