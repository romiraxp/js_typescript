import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculate(): number {
        let total = 0
        this._items.forEach(element => {
            total += element.price
        }) 
        return total;
    }

    discount(percent: number): number {
        let total = this.calculate()
        if (percent > 0 && percent <= 100) {
            let discountValue = percent / 100
            let totalDiscount = Math.ceil(total * discountValue) 
            return total - totalDiscount;
        } else {
            return total
        }
    }

    fromCart(id: number): void {
        let total = this._items.length
        if (total) {
           for (let i = 0; i <= total - 1; i++) {
                let toRemove = this._items[i]['id']
                if (id == toRemove) {
                    this._items.splice(i, 1);
                    break;
                }
            }
        }
    }
}