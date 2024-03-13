import { useState } from 'react'
import { ChatBubble } from './components'
import { CURRENT_USER } from './types/constant-vars'


function App() {

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "TEXT",
      content: "Hello, how can I help you?",
      user: {
        id: 'USER-1',
        name: 'John Doe',
        avatar: 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
      }
    },
    {
      id: 2,
      type: "TEXT",
      content: "Hello, how can I help you?",
      user: {
        id: 'USER-2',
        name: 'John Doe',
        avatar: 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
      }
    },
    {
      id: 3,
      type: "TEXT",
      content: "السلام عليكم",
      user: {
        id: 'USER-1',
        name: 'John Doe',
        avatar: 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
      }
    },
    {
      id: 4,
      type: "TEXT",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      user: {
        id: 'USER-2',
        name: 'John Doe',
        avatar: 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
      }
    },
    {
      id: 5,
      type: "VIDEO",
      content: "https://www.w3schools.com/html/mov_bbb.mp4",
      user: {
        id: 'USER-2',
        name: 'John Doe',
        avatar: 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
      }
    },
    {
      id: 6,
      type: "FILE",
      content: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      user: {
        id: 'USER-2',
        name: 'John Doe',
        avatar: 'https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4'
      }
    },

  ])

  const handleSendMessage = (message: Message) => {
    message.id = messages?.length + 1
    setMessages([...messages, message])
  }

  return (
    <>
      <ChatBubble
        avatar="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
        title="Chat Title"
        color="#FCF5EB"
        messages={messages}
        onSend={handleSendMessage}
        sender={CURRENT_USER}
        customMessageTypes={{
          "VIDEO": (message: Message) => <video src={message.content} height={150} width={250} controls style={{ objectFit: "contain" }} />,
          "FILE": (message: Message) => <a href={message.content} download>Download File</a>
        }}
      />
    </>
  )
}

export default App
