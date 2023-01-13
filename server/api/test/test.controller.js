
class TestController { 
  test(req, res) {
    res.send({ message: "Test"})
  }
}

module.exports = new TestController()