import { VehicleNodeId } from '@ivanzaida/structures'

/**
 * PATHFIND:GET_VEHICLE_NODE_IS_GPS_ALLOWED
 *
 * 0x8D4953B2FFED058B

 * 
 * Returns whether the given node has GPS allowed (to be used with a node index obtained by the above function(s) and within the same frame!)
 * 
 * Returns false for nodes that aren't used for GPS routes.
 * Example:
 * Nodes in Fort Zancudo and LSIA are false
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleNodeId} nodeId
 * @returns {boolean}  
 */
export function getVehicleNodeIsGpsAllowed(nodeId: VehicleNodeId): boolean {
	const getVehicleNodeIsGpsAllowed_result = Citizen.invokeNative<boolean>('0x8D4953B2FFED058B', nodeId);
	return getVehicleNodeIsGpsAllowed_result;
}