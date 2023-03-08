person = (name) => {
    this.name = name
    const greet = () => {
      console.log("Welcome " + this.name)
    }
    greet();
}
person("Abisheik")