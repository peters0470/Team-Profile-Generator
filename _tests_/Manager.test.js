const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const employee = new Manager('ralph', 50, 'ralph@gmail.com', 777);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});

test('get the employee role', () => {
    const employee = new Manager('ralph', 50, 'ralph@gmail.com', 777);
    expect(employee.getRole()).toEqual('Manager');

});