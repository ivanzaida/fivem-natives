import { VehicleNodeId, Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_VEHICLE_NODE_POSITION
 *
 * 0xAAB540AD076E01F8

 * 
 * As GET_NTH_CLOSEST_VEHICLE_NODE... but returns a node index. This node index MUST be used within this frame as it's validity is not guaranteed outside.
 * 
 * Calling this with an invalid node id, will crash the game.
 * Note that IS_VEHICLE_NODE_ID_VALID simply checks if nodeId is not zero. It does not actually ensure that the id is valid.
 * Eg. IS_VEHICLE_NODE_ID_VALID(1) will return true, but will crash when calling GET_VEHICLE_NODE_POSITION().
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleNodeId} nodeId
 * @param {Vector3} nodePosition [Ref]
 */
export function getVehicleNodePosition(nodeId: VehicleNodeId, nodePosition: Vector3 /* ptr */): void {
	const nodePositionPtr = new Vector3Ref();
	const getVehicleNodePosition_result = Citizen.invokeNative<void>('0xAAB540AD076E01F8', nodeId, nodePositionPtr.dataView);
	nodePositionPtr.copyToVector(nodePosition);
	return getVehicleNodePosition_result;
}