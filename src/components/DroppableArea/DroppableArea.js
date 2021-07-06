import React from "react";
import {
	getEdgeCenter,
} from "react-flow-renderer";
import { ItemTypes, nodeConfig, moveStep } from "../../constant";
import { useDrop } from "react-dnd";
import { Plus } from "../Plus";
import { Line } from "../Line";
import { DropBlock } from "../DropBlock";

const DroppableArea = ({
	sourceX,
	sourceY,
	targetX,
	targetY,
	data,
	source,
	target,
    id,
}) => {
	const [centerX, centerY] = getEdgeCenter({
		sourceX,
		sourceY,
		targetX,
		targetY,
	});

	const [{ isOver, canDrop }, drop] = useDrop(() => ({
		accept: ItemTypes.NODE,
		drop: (item, monitor) => {
			setTimeout(() => {
				data.onDropEdge(item.id, source, target);
			}, 10); // params (DroppedNodeId, newParentId, newChildId)

			if (monitor.didDrop()) {
				return undefined;
			}
			return undefined;
		},
		isOver: (item) => item.id !== source,
		canDrop: (item) => item.id !== source && item.id !== target,
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
			canDrop: !!monitor.canDrop(),
		}),
	}));

    const width = !isOver && canDrop ? "100%" : "0";
	const left = !isOver && canDrop ? "0" : "50%";

	return (
		<g
			transform={`translate(${
				centerX - 120 - Math.abs((sourceX - targetX) / 2)
			} ${centerY})`}
			className="react-flow__edge-textwrapper"
			style={{
				zIndex: "999",
				width: `${+(data.width || nodeConfig.WIDTH) + 40}px`,
			}}
			key={id}
			ref={drop}
		>
			{data.droppable !== false && (
				<>
					<rect className="react-flow-box" x="0" y="-15" rx="2" ry="2"></rect>
					<Line width={width} left={left} />
				</>
			)}
			{data.droppable !== false && <Plus />}
			{isOver && canDrop && data.droppable !== false && (
				<DropBlock text={moveStep}></DropBlock>
			)}
		</g>
	);
};

export default DroppableArea;
