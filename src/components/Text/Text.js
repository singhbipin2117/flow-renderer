import React from "react";
import { getEdgeCenter } from "react-flow-renderer";

const Text = ({ text, id, sourceX, sourceY, targetX, targetY, style={}, width, height }) => {
	const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
	});
	const center = {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			};
	return (
		<foreignObject
			width={width}
			height={height}
			x={edgeCenterX - width / 2 - ((sourceX - targetX) / 2)}
			y={edgeCenterY + 10}
			className="edgebutton-foreignobject"
			requiredExtensions="http://www.w3.org/1999/xhtml"
			rx="2"
			ry="2"
		>
			<body>
				<div
					width={`${width}px`}
					height={`${height}px`}
					style={{ ...center, ...style }}
				>
					{text}
				</div>
			</body>
		</foreignObject>
	);
};

export default Text;
