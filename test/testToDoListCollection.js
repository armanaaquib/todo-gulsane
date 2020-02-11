const assert = require('assert');
const {ToDoListCollection} = require('../lib/toDoListCollection');

describe('ToDoListCollection', () => {
  context('load', () => {
    it('should change instance to ToDoListCollection', () => {
      const list = [{id: 'tl-1', title: 'Home Work', tasks: []}];
      const toDoListCollection = ToDoListCollection.load(list);
      assert.deepEqual(toDoListCollection, {toDoLists: list});
      assert.ok(toDoListCollection instanceof ToDoListCollection);
    });
  });

  context('toJSON', () => {
    it('should return stringify toDoLists', () => {
      const list = [{id: 'tl-1', title: 'Home Work', tasks: []}];
      const toDoListCollection = ToDoListCollection.load(list);
      const expectedString = JSON.stringify(list);
      assert.strictEqual(toDoListCollection.toJSON(), expectedString);
    });
  });
});
