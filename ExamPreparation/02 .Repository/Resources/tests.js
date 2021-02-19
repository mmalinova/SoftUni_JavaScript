let { Repository } = require('./solution.js');
const assert = require('chai').assert;

describe('Test', () => {
    it('instalation', () => {
        let instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
        assert.deepEqual(instance.props, { name: 'string', age: 'number', birthday: 'object' });
        assert.deepEqual(instance.data instanceof Map, true);
    });
 
    it('count', () => {
        let instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
        assert.equal(instance.count, 0);
    });
 
    it('add', () => {
        let instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
 
        assert.throw(() => instance.add({ name: 'Pesho', age: 22, }), 'Property birthday is missing from the entity!');
        assert.throw(() => instance.add({ name: 'Pesho', age: '22', birthday: new Date(1998, 0, 7) }), 'Property age is not of correct type!');
        assert.equal(instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) }), 0);
    });
 
    it('getId', () => {
        let instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
 
        instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
        instance.add({ name: 'Gosho', age: 22, birthday: new Date(1998, 0, 7) });
 
        assert.deepEqual(instance.getId(1), { name: 'Gosho', age: 22, birthday: new Date(1998, 0, 7) });
        assert.throw(() => instance.getId(10), 'Entity with id: 10 does not exist!');
    });
 
    it('update', () => {
        let instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
 
        assert.throw(() => instance.update(10, { name: 'Idiot', age: 22, birthday: new Date(1958, 0, 7) }), 'Entity with id: 10 does not exist!');
        instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
        assert.throw(() => instance.update(0, { name: 'Idiot', age: '22', birthday: 'new Date(1958, 0, 7)' }), 'Property age is not of correct type!');
 
        instance.add({ name: 'Gosho', age: 22, birthday: new Date(1998, 0, 7) });
 
        assert.throw(() => instance.update(0, { name: 'Idiot', birthday: new Date(1998, 0, 7) }), 'Property age is missing from the entity!');
 
        instance.update(0, { name: 'Idiot', age: 22, birthday: new Date(1958, 0, 7) });
        assert.deepEqual(instance.getId(0), { name: 'Idiot', age: 22, birthday: new Date(1958, 0, 7) });
    });
 
    it('del', () => {
        let instance = new Repository({ name: 'string', age: 'number', birthday: 'object' });
 
        assert.throw(() => instance.del(4), 'Entity with id: 4 does not exist!');
 
        instance.add({ name: 'Pesho', age: 22, birthday: new Date(1998, 0, 7) });
 
        instance.add({ name: 'Gosho', age: 22, birthday: new Date(1998, 0, 7) });
        instance.add({ name: 'Deyan', age: 22, birthday: new Date(1998, 0, 7) });
 
        instance.del(1);
        assert.throw(() => instance.getId(1), 'Entity with id: 1 does not exist!');
    });
});