import React from 'react';
import styled from 'styled-components';
import { Button as B } from '@material-ui/core';
const Button = styled(B)`
	&& {
		${ props => {
			if(props.variant === 'outlined') {
				if(props.theme.buttonColor || props.theme.primaryColor) {
					return `
						:hover {
							filter: brightness(80%);				
							border: 1px solid ${props.theme.buttonColor || props.theme.primaryColor};
						}
						border: 1px solid ${props.theme.buttonColor || props.theme.primaryColor};
					`;

				} else {
					return ''
				}
			} else {
				if(props.theme.buttonColor || props.theme.primaryColor) {
				return `
					:hover {
						filter: brightness(80%);				
						background-color: ${props.theme.buttonColor || props.theme.primaryColor};
					}
					background-color: ${props.theme.buttonColor || props.theme.primaryColor};
				`;

			} else {
				return ''
			}
			}
			
		}

	}
`

export default Button;