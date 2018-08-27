import React, { Component } from 'react';

class JSX extends Component {
    render() {
        var users = [
            {
                id: 1,
                name: "Nguyen Ngoc Linh",
                age: 21
            },
            {
                id: 2,
                name: "Tran Dinh Huan",
                age: 22
            },
            {
                id: 3,
                name: "Nguyen Dinh Tien",
                age: 20
            }
        ];
        let element = users.map((user, index) => {
            return <div key={user.id}>
                    <h4>Name: {user.name}</h4>
                    <p>Age: {user.age}</p>
                </div>
        })
        return (
            <div>
                {element}
            </div>
        );
    }
}

export default JSX;