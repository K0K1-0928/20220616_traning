class user {
  constructor(private name: string) {}

  public getName(): string {
    return this.name;
  }
}

console.log(new user('John').getName());
