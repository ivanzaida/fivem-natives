import { Vector3, FloatRef, IntRef, ENodeFlags } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_NTH_CLOSEST_VEHICLE_NODE_WITH_HEADING
 *
 * 0x6009FBA2EAAA60BE

 * 
 * Returns a heading which can be used to set a car facing in a reasonable direction when it is placed on the car node.
 * The command will return FALSE if no node could be found (probably due to the nodes not being streamed in).
 * 
 * Get the nth closest vehicle node and its heading.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} nodeNumber
 * @param {Vector3} outNearestNodeCoors [Ref]
 * @param {FloatRef} outHeading [Ref]
 * @param {IntRef} outNumLanes [Ref]
 * @param {ENodeFlags} nodeFlags
 * @param {number} zMeasureMult
 * @param {number} zTolerance How far apart to the Z coords have to be before zMeasureMult kicks in?
 * @returns {boolean}  
 */
export function getNthClosestVehicleNodeWithHeading(coorsX: number, coorsY: number, coorsZ: number, nodeNumber: number, outNearestNodeCoors: Vector3 /* ptr */, outHeading: FloatRef /* ptr */, outNumLanes: IntRef /* ptr */, nodeFlags: ENodeFlags | number = 1, zMeasureMult: number = 3, zTolerance: number = 0): boolean {
	const outNearestNodeCoorsPtr = new Vector3Ref();
	const getNthClosestVehicleNodeWithHeading_result = Citizen.invokeNative<boolean>('0x6009FBA2EAAA60BE', coorsX, coorsY, coorsZ, nodeNumber, outNearestNodeCoorsPtr.dataView, outHeading.dataView, outNumLanes.dataView, nodeFlags, zMeasureMult, zTolerance);
	outNearestNodeCoorsPtr.copyToVector(outNearestNodeCoors);
	return getNthClosestVehicleNodeWithHeading_result;
}