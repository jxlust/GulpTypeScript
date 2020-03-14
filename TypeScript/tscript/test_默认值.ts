function test1(firstName: string, lastName: string) {}
function test2(firstName: string, lastName?: string) {
  console.log("22");
}
test2("a");
function test3(firstName = "kill", lastName: string) {
  console.log(3, `${firstName} --- ${lastName}`);
}
test3(undefined, "2");
