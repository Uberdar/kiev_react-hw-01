const testObj = {
  x: 10,
  testMethod() {
    console.log("test of this", this);
  },
};

export default testObj;
