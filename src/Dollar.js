class Dollar {
  constructor (amount) {
    this.amount = amount
  }
  
  times (multiplier) {
    this.amount *= multiplier
  }
}

export default Dollar
