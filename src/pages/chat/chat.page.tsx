// import { toast } from "react-toastify"
// import { useEffect, useState } from "react"
// import { Button, Flowbite, TextInput } from 'flowbite-react';
// import {Card , Avatar }from 'flowbite-react';


// export interface UserDetail {
//     _id: string,
//     name: string,
//     email: string,
//     image : string,
    
// }
// export interface SingleMessage {
//     _id: string,
//     sender: UserDetail,
//     receiver: UserDetail,
//     date: Date,
//     message: string
// }

// export interface SingleUser{
//     _id: string,
//     name: string,
//     email: string,
//     image : string, 
//     message: SingleMessage []
// },









// export const ChatUserList = ({user}: {user: SingleUser}) =>{

//     return(<>
//        <div className="flex pe-5 mb-5 mt-3 shadow-lg bg-gray-100 hover:cursor-pointer">

//         <div className="w-1/4 mx-3">
//       <img src ={user.image} className="rounded-full" alt=""/>
//        </div>

//          <div className="py-5 ms-3">
//         <h1 className="bold">{user.name}</h1>
//         <p className="text-xs italic">
//          {user.email}
//           </p>
//        <small className="text-xs italic text-gray-500">
//       {user.message[0].message}
//      </small>
//      </div>
//  </div>
    
// </>)
// }




// const ChatListView = ()=> {
//     const [userList, setUserList] = useState<SingleUser[]>();
    
//     const loadAllUsers = async () =>{
//         try{
//             const response SingleUser[] = [
//                 {

//                 _id: "123",
//                 name: "userName",
//                 email: "name@gmail.com",
//                 image : "https://placehold.co/400",
//                 message: [
                
//                     {
//                         _id: "123",
//                         sender: {
//                         _id: "1234",
//                         name: "userName",
//                         email: "name@gmail.com",
//                         image : "https://placehold.co/400",
//                     },
//                     receiver: {
//                         _id: "123",
//                         name: "userName",
//                         email: "name@gmail.com",
//                         image : "https://placehold.co/400",

//                     },
//                     date:"2024-08-08T09:00:00.1234Z"
//                 }
//              ]
//         }
//      ]
//      setUserList(response);
//         }catch(exception) {
//             toast.error("Error landing user list.")
//         }

//     }
//     useEffect (() =>{
//         loadAllUsers()
//     }, [])
// }


// const ChatListView = () => {

//     return(<>
//     <div className="md:flex lg:flex sm:grid-cols-1 mx-3 md:mx-20 py-5 gap-2 mt-5">
//          <div className="w-1/4 bg-gray-300">
//      {
//         userList && userList.map((row: SingleUser, i: number) => (
//             <ChatUserList user= {row} key={i}/>
//         ))
//      }






// const message = [
//   {
//     _id: "12345",
//      sender: {
//      _id: "1234",
//      name: "userName",
//      email: "name@gmail.com",
//      image : "https://placehold.co/400",
//        },

       
//     receiver: {
//       _id: "123",
//       name: "userName",
//       email: "name@gmail.com",
//       image : "https://placehold.co/400",

//   },

  
//       timestamp: new Data(),
//       Message: "hello friend"

//     }
  
// ]
// const currentUser = [
  
//     sender: {
//       _id: "123",
//       name: "userName",
//       email: "name@gmail.com",
//       image : "https://placehold.co/400",

//   }
// ]



//     </div>  
//     <div className="w-3/4">
     
//     <Card className="max-w-md mx-auto p-4">
//       <div className="overflow-y-auto h-64 p-2 border-b">
//         {messages.map((message: any, index: number) => (
//           <div key={index} className={`flex items-start my-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//             {message.sender === 'user' ? null : (
//               <Avatar
//                 img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//                 rounded={true}
//                 className="mr-2"
//               />
//             )}
//             <div className={`p-2 rounded ${message.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
//               {message.text}
//             </div>
//             {message.sender === 'user' && (
//               <Avatar
//                 img="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
//                 rounded={true}
//                 className="ml-2"
//               />
//             )}
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center p-2">
//         <input
//           type="text"
//           className="flex-1 p-2 border rounded-l-lg focus:outline-none"
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//         />
//         <Button className="ml-2 rounded-r-lg" onClick={sendMessage}>
//           Send
//         </Button>
//       </div>
//     </Card>
//   );

//     </div>
//     </div>
//     </>)
// }
// export default ChatListView;




import { useState, useEffect } from "react"
import { toast } from "react-toastify";

import { Card, Avatar } from "flowbite-react";
import chatService from "./chat.service";
import { useSelector } from "react-redux";
import socket from "../../config/socket.config";

export interface UserDetail {
    _id: string,
    name: string,
    email: string,
    image: string,
}
export interface SingleMessage {
    _id: string,
    sender: UserDetail,
    reciver: UserDetail,
    date: Date,
    message: string
}

export interface SingleUser {
    _id: string,
    name: string,
    email: string,
    image: string,
    message: SingleMessage[]
}

export const ChatUserList = ({ user, clickEvent, isActive = false }: { user: SingleUser, clickEvent: any, isActive: boolean }) => {
    return (<>
        <div className={`flex pe-5 mb-5 mt-3 shadow-lg ${isActive ? 'bg-blue-200' : 'bg-gray-100'} hover:bg-blue-50 hover:cursor-pointer`} onClick={(e) => {
            clickEvent(user._id)
        }}>
            <div className="w-1/4 mx-3">
                <img
                    onError={(e: any) => {
                        e.target.src = 'https://placehold.co/400x400'
                    }}
                    src={user.image ? import.meta.env.VITE_IMAGE_URL + 'user/' + user.image : 'https://placehold.co/400x400'} className="rounded-full" alt="" />
            </div>
            <div className=" py-5 ms-3">
                <h1 className="bold">{user.name}</h1>
                <p className="text-xs italic">
                    {user.email}
                </p>
                <small className="text-xs italic text-gray-500">
                    {user?.message[0]?.message}
                </small>
            </div>
        </div>
    </>)
}




const ChatListView = () => {
    const [userList, setUserList] = useState<SingleUser[]>();
    const currentUser = useSelector((root: any) => {
        return root.auth.loggedInUser || null;
    })
    const [currentChat, setCurrentChat] = useState<any>()
    const [message, setCurrentMessage] = useState<string>("");

    // load all users 
    const loadAllUsers = async () => {
        try {
            const response: any = await chatService.getRequest('/chat/chat-list', { auth: true })
            setUserList(response.result);
        } catch (exception) {
            toast.error("Error loading user list.")
        }
    }
    useEffect(() => {
        loadAllUsers()

        const newMessageReceived = (data: any) => {
            if(data.receiver === currentUser._id) {
                getDetailChat(data.sender)
            }
        }

        socket.on('message-received', newMessageReceived);

        return () => {
            socket.off('message-received', newMessageReceived);
        }

    }, [])

    const sendChat =async (e: any) => {
        e.preventDefault()
        try{
            const msg = {
                sender: currentUser._id, 
                receiver: currentChat.sender._id, 
                message: message
            }
            const response = await chatService.postRequest('/chat/store', msg, {auth: true});
            setCurrentMessage(" ")
            setCurrentChat({
                ...currentChat, 
                list: [
                    ...currentChat.list, 
                    response.result
                ]
            })
            socket.emit('message-sent', {sender: currentUser._id, receiver: currentChat.sender._id})
        } catch(exception) {
            toast.error("Error sending message")
        }

    }

    const getDetailChat = async (senderId: string) => {
        try {
            socket.connect()
            const response: any = await chatService.getRequest("/chat/chat-detail/" + senderId, { auth: true })
            setCurrentChat(response.result)
        } catch (exception) {
            toast.error("Error loading chat Detail")
        }
    }
    return (<>

        <div className="md:flex lg:flex sm:grid-cols-1 mx-3 md:mx-20 py-5 gap-2 mt-5 min-h-screen">
            <div className="w-1/4 bg-gray-200">
                {
                    userList && userList.map((row: SingleUser, i: number) => (
                        <ChatUserList isActive={currentChat && currentChat.sender._id === row._id ? true : false} clickEvent={getDetailChat} user={row} key={i} />
                    ))
                }

            </div>
            <div className="w-3/4">
                <div className="p-4">
                    <Card>
                        <div className="h-96 overflow-y-auto">
                            {currentChat && currentChat.list.map((messageDetail: any, index: number) => (
                                <div
                                    key={index}
                                    className={`flex items-start mb-4 ${messageDetail?.sender?._id === currentUser._id
                                        ? 'justify-end'
                                        : 'justify-start'
                                        }`}
                                >
                                    {messageDetail?.sender?._id !== currentUser._id && (
                                        <Avatar
                                            img={messageDetail?.sender?.image}
                                            rounded={true}
                                            className="mr-2"
                                        />
                                    )}
                                    <div
                                        className={`rounded-lg px-4 py-2 ${messageDetail?.sender?._id === currentUser._id
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-900'
                                            } max-w-xs`}
                                    >
                                        <p>{messageDetail.message}</p>
                                        <small className="block mt-1 text-xs text-gray-600">
                                            {new Date(messageDetail.date).toLocaleTimeString()}
                                        </small>
                                    </div>
                                    {messageDetail?.sender?._id === currentUser._id && (
                                        <Avatar
                                            img={messageDetail?.sender?.image}
                                            rounded={true}
                                            className="ml-2"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <form onSubmit={sendChat}>
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    value={message}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                    onChange={(e: any) => {
                                        setCurrentMessage(e.target.value)
                                    }}
                                />
                            </form>
                        </div>
                    </Card>
                </div>
            </div>
        </div>

    </>)
}

export default ChatListView;