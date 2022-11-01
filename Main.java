

class Robot {}

class Human {
  void hello() {
    System.out.println("Hello");
  }
}

class Programmer extends Human {
  @Override
  void hello() {
    System.out.println("Hello, My Job is Engineer");
  }
}

class Main{
  public static void main(String[] args){
    Human h1 = new Human();
    Human h2 = new Programmer();
    // Programmer p1 = new Human();
    h1.hello();
    h2.hello();
  }
}