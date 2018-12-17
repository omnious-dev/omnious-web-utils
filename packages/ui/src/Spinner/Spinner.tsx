import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import { STYLES } from '../constants/styles';

// interface
interface Props {
  className?: string;
}

const SpinnerComponent: React.SFC<Props> = ({ className }): JSX.Element => (
  <div className={className} />
);

const spinFrame = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled(SpinnerComponent)`
  animation: ${spinFrame} 1s infinite linear;
  border-left: 4px solid ${STYLES.primaryBlue};
  border-top: 4px solid ${STYLES.primaryBlue};
  border-right: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

