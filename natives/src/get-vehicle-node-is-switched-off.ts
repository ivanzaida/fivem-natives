import { VehicleNodeId } from '@ivanzaida/structures'

/**
 * PATHFIND:GET_VEHICLE_NODE_IS_SWITCHED_OFF
 *
 * 0xD2507ABB3A05C571

 * 
 * Returns whether the given node is switched off (to be used with a node index obtained by the above function(s) and within the same frame!)
 * 
 * Returns true when the node is Offroad. Alleys, some dirt roads, and carparks return true.
 * Normal roads where plenty of Peds spawn will return false
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleNodeId} nodeId
 * @returns {boolean}  
 */
export function getVehicleNodeIsSwitchedOff(nodeId: VehicleNodeId): boolean {
	const getVehicleNodeIsSwitchedOff_result = Citizen.invokeNative<boolean>('0xD2507ABB3A05C571', nodeId);
	return getVehicleNodeIsSwitchedOff_result;
}