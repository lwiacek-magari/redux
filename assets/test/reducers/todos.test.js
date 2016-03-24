import '../config';
import todos from '../../react/reducers/todos';

describe('reducers', () => {
    describe('todo', () => {
        it('should add todo', () => {
            const stateBefore = [];
            const action = {
                type: 'ADD_TODO',
                id: 0,
                text: 'Learn Redux'
            };
            const stateAfter = [
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                }
            ];

            deepFreeze(stateBefore);
            deepFreeze(action);

            chai.expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
        });

        it('should toggle todo', () => {
            const stateBefore = [
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                },
                {
                    id: 1,
                    text: 'Go shopping',
                    completed: false
                }
            ];
            const action = {
                type: 'TOGGLE_TODO',
                id: 1
            };
            const stateAfter = [
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                },
                {
                    id: 1,
                    text: 'Go shopping',
                    completed: true
                }
            ];

            deepFreeze(stateBefore);
            deepFreeze(action);

            chai.expect(todos(stateBefore, action)).to.deep.equal(stateAfter);
        });
    });
});
