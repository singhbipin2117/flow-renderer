import React from "react";

const Line = ({width, left}) => {
	return (
		<>
            <foreignObject className="react-flow-line" x="0" y="15" rx="2" ry="2">
                <div style={{ width: `${width}`, left: `${left}` }}></div>
            </foreignObject>
		</>
	);
};

export default Line;
