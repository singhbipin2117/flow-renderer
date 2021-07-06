import {
	getMarkerEnd,
	getSmoothStepPath,
} from "react-flow-renderer";
import { DroppableArea } from "./components/DroppableArea";
import { Text } from "./components/Text";
import "./CustomEdge.css";

export default function CustomEdge({
	source,
	target,
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	style = {},
	data,
	arrowHeadType,
	markerEndId,
}) {
	const edgePath = getSmoothStepPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
	});
	const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);
	
	return (
		<>
			<path
				id={id}
				style={style}
				className="react-flow__edge-path"
				d={edgePath}
				markerEnd={markerEnd}
			/>
			<DroppableArea
				sourceX={sourceX}
				sourceY={sourceY}
				targetX={targetX}
				targetY={targetY}
				data={data}
				source={source}
				target={target}
				id={id}
			></DroppableArea>
			{data.text && (
				<Text
					sourceX={sourceX}
					sourceY={sourceY}
					targetX={targetX}
					targetY={targetY}
					text={data.text}
					id={id}
					{...data}
				></Text>
			)}
		</>
	);
}
