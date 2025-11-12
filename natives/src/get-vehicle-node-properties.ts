import { IntRef } from '@ivanzaida/structures'

/**
 * PATHFIND:GET_VEHICLE_NODE_PROPERTIES
 *
 * 0x99FBD9356770254E

 * 
 * This function returns some additional properties associated with the closest node
 * 
 * Gets the density and flags of the closest node to the specified position.
 * Density is a value between 0 and 15, indicating how busy the road is.
 * Flags is a bit field.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} nodeCoordsX
 * @param {number} nodeCoordsY
 * @param {number} nodeCoordsZ
 * @param {IntRef} outiDensity [Ref]
 * @param {IntRef} outiPropertyFlags [Ref]
 * @returns {boolean}  
 */
export function getVehicleNodeProperties(nodeCoordsX: number, nodeCoordsY: number, nodeCoordsZ: number, outiDensity: IntRef /* ptr */, outiPropertyFlags: IntRef /* ptr */): boolean {
	const getVehicleNodeProperties_result = Citizen.invokeNative<boolean>('0x99FBD9356770254E', nodeCoordsX, nodeCoordsY, nodeCoordsZ, outiDensity.dataView, outiPropertyFlags.dataView);
	return getVehicleNodeProperties_result;
}