module.exports = 

class ShoppingCart{
  constructor(){
    this.items = []
  }

  addItem(name, quantity, pricePerUnit){
    this.items.push({
      name: name,
      quantity: quantity,
      pricePerUnit: pricePerUnit
    })
  }

  getItems(){
    return this.items
  }

  clear(){
    this.items = []
  }

  clone(){
    let a = Object.assign(Object.create( Object.getPrototypeOf(this)), this)
    a.items = JSON.parse(JSON.stringify(this.items))
    return a
  }
}



console.log('test')