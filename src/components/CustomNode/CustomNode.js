import React from "react";
import { defaultNodeStyle} from '../../constant'
const CustomNode = ({ label, style = defaultNodeStyle }) => {
	return (
		<div style={style}>
			<strong>{label}</strong>
		</div>
	);
};

export default CustomNode;
