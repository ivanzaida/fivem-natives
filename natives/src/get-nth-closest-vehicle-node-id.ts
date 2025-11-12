import { ENodeFlags, VehicleNodeId } from '@ivanzaida/structures'

/**
 * PATHFIND:GET_NTH_CLOSEST_VEHICLE_NODE_ID
 *
 * 0x97C50CC028477E0D

 * 
 * As GET_NTH_CLOSEST_VEHICLE_NODE... but returns a node index. This node index MUST be used within this frame as it's validity is not guaranteed outside.
 * 
 * Returns the id.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} nodeNumber
 * @param {ENodeFlags} nodeFlags
 * @param {number} zMeasureMult
 * @param {number} zTolerance How far apart to the Z coords have to be before zMeasureMult kicks in?
 * @returns {VehicleNodeId}  
 */
export function getNthClosestVehicleNodeId(coorsX: number, coorsY: number, coorsZ: number, nodeNumber: number, nodeFlags: ENodeFlags | number = 1, zMeasureMult: number = 3, zTolerance: number = 0): VehicleNodeId {
	const getNthClosestVehicleNodeId_result = Citizen.invokeNative<VehicleNodeId>('0x97C50CC028477E0D', coorsX, coorsY, coorsZ, nodeNumber, nodeFlags, zMeasureMult, zTolerance);
	return getNthClosestVehicleNodeId_result;
}