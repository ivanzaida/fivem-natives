import { Vector3, ENodeFlags } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_CLOSEST_VEHICLE_NODE
 *
 * 0x3875519517101875

 * 
 * The commands will return FALSE if no node could be found (probably due to the nodes not being streamed in).
 * 
 * https://gtaforums.com/topic/843561-pathfind-node-types
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {Vector3} outNearestNodeCoors [Ref]
 * @param {ENodeFlags} nodeFlags
 * @param {number} zMeasureMult
 * @param {number} zTolerance How far apart to the Z coords have to be before zMeasureMult kicks in?
 * @returns {boolean}  
 */
export function getClosestVehicleNode(coorsX: number, coorsY: number, coorsZ: number, outNearestNodeCoors: Vector3 /* ptr */, nodeFlags: ENodeFlags | number = 1, zMeasureMult: number = 3, zTolerance: number = 0): boolean {
	const outNearestNodeCoorsPtr = new Vector3Ref();
	const getClosestVehicleNode_result = Citizen.invokeNative<boolean>('0x3875519517101875', coorsX, coorsY, coorsZ, outNearestNodeCoorsPtr.dataView, nodeFlags, zMeasureMult, zTolerance);
	outNearestNodeCoorsPtr.copyToVector(outNearestNodeCoors);
	return getClosestVehicleNode_result;
}