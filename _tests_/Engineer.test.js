const Engineer = require('../lib/Engineer');

test('creates and engineer object', () => {
    const employee = new Engineer('ralph', 50, 'ralph@gmail.com', 'kingralph99');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));

})

test('get the employee role', () => {
    const employee = new Engineer('ralph', 50, 'ralph@gmail.com', 'kingralph99');
    expect(employee.getRole()).toEqual('Engineer');
})