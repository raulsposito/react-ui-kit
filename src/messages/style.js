// import styled, { css } from 'styled-components'

// import { colors, spacing } from 'global/theme'
// import { BREAKPOINTS, MESSAGE_TYPE } from 'global/constants'
// import { family, weight } from 'global/font'

// import { STATUS } from './variables'

// export const Title = styled.p`
//   margin: 0 0 0 ${spacing.one};
//   ${weight.bold};
//   ${family.openSans};
// `

// export const Text = styled.p`
//   ${family.barlow};
//   margin: -2px ${spacing.three} 0 0;
// `

// export const Close = styled.div`
//   margin-left: auto;
//   cursor: pointer;
//   font-size: 18pt;
//   align-self: center;
// `

// // MESSAGE TYPE
// const Success = css`
//   background-color: ${colors.success.regular};
//   color: ${colors.secondary.regular};

//   :hover {
//     background-color: ${colors.success.hover};
//   }
// `

// const Info = css`
//   background-color: ${colors.info.regular};
//   color: ${colors.secondary.regular};

//   :hover {
//     background-color: ${colors.info.hover};
//   }
// `

// const Error = css`
//   background-color: ${colors.danger.regular};
//   color: ${colors.secondary.regular};

//   :hover {
//     background-color: ${colors.danger.hover};
//   }
// `

// const Warning = css`
//   background-color: ${colors.warning.regular};
//   color: ${colors.secondary.regular};

//   :hover {
//     background-color: ${colors.warning.hover};
//   }
// `

// // DEVICE TYPE
// const Mobile = css`
//   padding: ${spacing.one} ${spacing.one};
//   font-size: 11pt;
// `

// const Tablet = css`
//   padding: ${spacing.one} ${spacing.oneAndAHalf};
// `

// const Desktop = css`
//   padding: ${spacing.oneAndAHalf} ${spacing.two};
// `

// export const Message = styled.div`
//   pointer-events: auto;
//   width: 450px;
//   max-width: 100%;

//   position: relative;

//   z-index: 30;
//   display: flex;
//   flex-direction: row;
//   align-items: start;

//   color: ${colors.secondary.regular};

//   border-radius: 8px;

//   right: ${({ status }) => {
//     switch (status) {
//       case STATUS.SHOWING: return '0'
//       case STATUS.HIDING: return '-50%;'
//       default: return '100%'
//     }
//   }};

//   ${({ type }) => {
//     switch (type) {
//       case MESSAGE_TYPE.WARNING: return Warning
//       case MESSAGE_TYPE.SUCCESS: return Success
//       case MESSAGE_TYPE.ERROR: return Error
//       case MESSAGE_TYPE.INFO: return Info
//     }
//   }}

//   ${({ device }) => {
//     switch (device) {
//       case BREAKPOINTS.MOBILE: return Mobile
//       case BREAKPOINTS.TABLET: return Tablet
//       default: return Desktop
//     }
//   }}

//   transition: right 0.5s;

//   margin-left: auto;
//   margin-top: ${spacing.half};
//   margin-bottom: ${spacing.one};

//   box-shadow: 0 3px 6px ${colors.grays[80]};

//   > .cont {
//     margin-right: ${spacing.two};
//     margin-top: ${({ device }) => device === BREAKPOINTS.MOBILE ? 'auto' : 0};
//     margin-bottom: ${({ device }) => device === BREAKPOINTS.MOBILE ? 'auto' : 0};

//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: flex-start;
//   }
// `

// export const Wrapper = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;

//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;

//   padding: ${spacing.one} ${spacing.one} 0 ${spacing.one};

//   width: 100%;
//   height: 100%;
//   z-index: 31;

//   pointer-events: none;
// `

// export const Container = styled.div`
//   width: 100%;
//   height: auto;

//   position: relative;
//   overflow: hidden;

//   max-height: ${({ status }) => {
//     switch (status) {
//       case STATUS.HIDING: return '0'
//       default: return '100%'
//     }
//   }};

//   transition: max-height 0.2s 0.2s;
// `
