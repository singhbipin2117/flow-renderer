import React, { memo } from "react";

import { Handle } from "react-flow-renderer";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constant";

import { nodeConfig } from './constant';

export default memo(({ id, data, sourcePosition, targetPosition }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: ItemTypes.NODE,
		item: { id: id, sourcePosition, targetPosition, data },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	const isDraggableRef =
		data.type !== "input" &&
		data.type !== "output" &&
		(data.draggable === false ? data.draggable : true)
			? drag
			: null;
	const isMovableCursor =
		data.type !== "input" &&
		data.type !== "output" &&
		(data.draggable === false ? data.draggable : true)
			? "move"
			: "pointer";

	return (
		<div
			ref={isDraggableRef}
			style={{
				opacity: isDragging ? 0.5 : 1,
				cursor: isMovableCursor,
				width: `${data.width || nodeConfig.WIDTH}px`,
			}}
		>
			{data.type !== "input" && (
				<Handle
					type="target"
					position="top"
					style={{ background: "#555" }}
					onConnect={(params) => console.log("handle onConnect", params)}
				/>
			)}
			<data.customNodeComponent
				id={id}
				sourcePosition={sourcePosition}
				targetPosition={targetPosition}
				{...data}
			></data.customNodeComponent>
			{data.type !== "output" && (
				<Handle
					type="source"
					position="bottom"
					id="a"
					style={{ background: "#555" }}
				/>
			)}
		</div>
	);
});
