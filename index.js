class Vec {
    constructor (x, y) {
      this.x = x;
      this.y = y;
    }
    plus(v) {
      return new Vec(this.x + v.x, this.y + v.y);
    }
    minus(v) {
      return new Vec(this.x - v.x, this.y - v.y);
    }
    get length() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }
  
  console.log(new Vec(1, 2).plus(new Vec(2, 3)));
  console.log(new Vec(1, 2).minus(new Vec(2, 3)));
  console.log(new Vec(3, 4).length);

  class PGroup {
    constructor(members) {
      this.members = members;
    }
  
    add(value) {
      if (this.has(value)) return this;
      return new PGroup(this.members.concat([value]));
    }
  
    delete(value) {
      if (!this.has(value)) return this;
      return new PGroup(this.members.filter(m => m !== value));
    }
  
    has(value) {
      return this.members.includes(value);
    }
  }
  
  PGroup.empty = new PGroup([]);
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");