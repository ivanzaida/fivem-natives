import { VehicleNodeId } from '@ivanzaida/structures'

/**
 * PATHFIND:IS_VEHICLE_NODE_ID_VALID
 *
 * 0x2EE1ADDFD32F7C35

 * 
 * As GET_NTH_CLOSEST_VEHICLE_NODE... but returns a node index. This node index MUST be used within this frame as it's validity is not guaranteed outside.
 * 
 * Returns true if the id is non zero.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleNodeId} nodeId
 * @returns {boolean}  
 */
export function isVehicleNodeIdValid(nodeId: VehicleNodeId): boolean {
	const isVehicleNodeIdValid_result = Citizen.invokeNative<boolean>('0x2EE1ADDFD32F7C35', nodeId);
	return isVehicleNodeIdValid_result;
}