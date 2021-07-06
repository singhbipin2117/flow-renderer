import React from "react";

const DropBlock = ({text }) => {
	return (
		<g className="react-flow__edge-textwrapper react-flow-rect">
			<rect x="0" y="0" rx="2" ry="2" className="react-flow-rect"></rect>
			<foreignObject
				x="20"
				y="-40"
				width="200"
				height="100"
				style={{ border: "1px solid #000" }}
			>
				<div
					xmlns="http://www.w3.org/1999/xhtml"
					style={{
						width: "inherit",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{text}
				</div>
			</foreignObject>
		</g>
	);
};

export default DropBlock;
