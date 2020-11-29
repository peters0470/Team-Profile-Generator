const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const employee = new Intern('ralph', 50, 'ralph@gmail.com', "ralph university");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test('get the employee role', () => {
    const employee = new Intern('ralph', 50, 'ralph@gmail.com', "ralph university");
    expect(employee.getRole()).toEqual('Intern');

});

