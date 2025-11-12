import { Vector3, ENodeFlags } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_NTH_CLOSEST_VEHICLE_NODE
 *
 * 0x8B777C12D64DF209

 * 
 * VecCoors.Z will be calculated automatically if you give it a value of –100.0 or below. If NodeNumber is 1 then the closest node will be returned (as with the two commands above).
 * If NodeNumber is 2 then the second closest node will be returned and so on. The command will return FALSE if no node could be found (probably due to the nodes not being streamed in).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} nodeNumber
 * @param {Vector3} outNearestNodeCoors [Ref]
 * @param {ENodeFlags} nodeFlags
 * @param {number} zMeasureMult
 * @param {number} zTolerance How far apart to the Z coords have to be before zMeasureMult kicks in?
 * @returns {boolean}  
 */
export function getNthClosestVehicleNode(coorsX: number, coorsY: number, coorsZ: number, nodeNumber: number, outNearestNodeCoors: Vector3 /* ptr */, nodeFlags: ENodeFlags | number = 1, zMeasureMult: number = 3, zTolerance: number = 0): boolean {
	const outNearestNodeCoorsPtr = new Vector3Ref();
	const getNthClosestVehicleNode_result = Citizen.invokeNative<boolean>('0x8B777C12D64DF209', coorsX, coorsY, coorsZ, nodeNumber, outNearestNodeCoorsPtr.dataView, nodeFlags, zMeasureMult, zTolerance);
	outNearestNodeCoorsPtr.copyToVector(outNearestNodeCoors);
	return getNthClosestVehicleNode_result;
}