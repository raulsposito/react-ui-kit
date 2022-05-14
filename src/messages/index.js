// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTimes } from '@fortawesome/free-solid-svg-icons'

// import { BREAKPOINTS } from 'Global/constants'
// import { useWindowDimensions } from 'Components/WindowDimensions'

// import useRedux from './Redux'
// import SELECTORS from './Redux/selector'
// import { MESSAGE_ACTIONS } from './Redux/actions'

// import { Wrapper, Container, Message, Title, Text, Close } from './style'

// const Messages = () => {
//   useRedux()
//   const dispatch = useDispatch()
//   const messages = useSelector(SELECTORS.MESSAGES)

//   const device = useWindowDimensions()

//   const closeMessage = id => {
//     dispatch(MESSAGE_ACTIONS.REMOVE_BY_USER(id))
//   }

//   return (
//     <Wrapper>
//       {messages.map(({ title, message, type, id, status, icon }, i) => (
//         <Container key={id} status={status}>
//           <Message
//             key={id}
//             type={type}
//             device={device}
//             status={status}
//             top={i}
//           >
//             <div className='cont'>
//               <FontAwesomeIcon icon={icon} />
//               {device !== BREAKPOINTS.MOBILE && <Title>{title}:</Title>}
//             </div>
//             <Text>{message}</Text>

//             <Close onClick={() => closeMessage(id)}>
//               <FontAwesomeIcon icon={faTimes} />
//             </Close>

//           </Message>
//         </Container>
//       ))}
//     </Wrapper>
//   )
// }

// export default Messages
