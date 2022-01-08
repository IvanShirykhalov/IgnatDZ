import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRyIaS6SOCFK4pIWE0gf7WcvgCLmIN5R1AIt-xBuIMQq7_kxdHfz0MrB7nLz3eap4udOZSLe5xXwVEa9wGrnys',
    name: 'mr.Gray',
    message: 'Hello, my dear friend',
    time: '22:00',
}

function HW1() {
    return (
        <div>
{/*            <hr/>
            homeworks 1

            should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

{/*            <hr/>
            для личного творчества, могу проверить
            <AlternativeMessage/>
            <hr/>*/}
        </div>
    )
}

export default HW1
