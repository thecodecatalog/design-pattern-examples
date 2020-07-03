// Singleton ensures a class has only one instance
// It provides a global point of access to it
// Singleton is considered by some to be an anti-pattern as it's essentially a global variable

class Singleton {
  static getInstance() {
    if (!this.instance) this.instance = new Singleton();

    return this.instance;
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// compare instances
console.log(instance1 === instance2);
