import { FloatRef, IntRef, ENodeFlags, VehicleNodeId } from '@ivanzaida/structures'

/**
 * PATHFIND:GET_NTH_CLOSEST_VEHICLE_NODE_ID_WITH_HEADING
 *
 * 0x990DA6AEDBBBA89A

 * 
 * Like NTH_CLOSEST_VEHICLE_NODE_WITH_HEADING but returning an ID instead.
 * Returns a heading which can be used to set a car facing in a reasonable direction when it is placed on the car node.
 * The command will return FALSE if no node could be found (probably due to the nodes not being streamed in).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} nodeNumber
 * @param {FloatRef} outHeading [Ref]
 * @param {IntRef} outNumLanes [Ref]
 * @param {ENodeFlags} nodeFlags
 * @param {number} zMeasureMult
 * @param {number} zTolerance How far apart to the Z coords have to be before zMeasureMult kicks in?
 * @returns {VehicleNodeId}  
 */
export function getNthClosestVehicleNodeIdWithHeading(coorsX: number, coorsY: number, coorsZ: number, nodeNumber: number, outHeading: FloatRef /* ptr */, outNumLanes: IntRef /* ptr */, nodeFlags: ENodeFlags | number = 1, zMeasureMult: number = 3, zTolerance: number = 0): VehicleNodeId {
	const getNthClosestVehicleNodeIdWithHeading_result = Citizen.invokeNative<VehicleNodeId>('0x990DA6AEDBBBA89A', coorsX, coorsY, coorsZ, nodeNumber, outHeading.dataView, outNumLanes.dataView, nodeFlags, zMeasureMult, zTolerance);
	return getNthClosestVehicleNodeIdWithHeading_result;
}