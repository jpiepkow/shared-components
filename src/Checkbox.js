import React from 'react';
import styled from 'styled-components';
import { Checkbox as C } from '@material-ui/core';
const Checkbox = styled(C)`
	&& {
		${ props => {
			if(props.theme.checkboxColor || props.theme.primaryColor) {
					return `color: ${props.theme.checkboxColor || props.theme.primaryColor} !important;`;
			} else {
				return '';
			}
			}
		}
	}
`
const CheckboxExport = (props) => <Checkbox color="default" {...props} />
export default CheckboxExport;