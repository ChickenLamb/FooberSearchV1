// DO NOT DELETE THIS FILE
// TO FIX message "TypeError: styled.a is not a function" when production bundling 'styled-components' modules
import styled from 'styled-components';

const MyStyled: typeof styled = typeof styled === 'function' ? styled : styled.default;

export default MyStyled;