import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_CLOSEST_MAJOR_VEHICLE_NODE
 *
 * 0x8E942EABE97448C2

 * 
 * This is needed for the prostitute script to find a quiet area to park the car.
 * 
 * Get the closest vehicle node to a given position.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {Vector3} outNearestNodeCoors [Ref]
 * @param {number} zMeasureMult
 * @param {number} zTolerance How far apart to the Z coords have to be before zMeasureMult kicks in?
 * @returns {boolean}  
 */
export function getClosestMajorVehicleNode(coorsX: number, coorsY: number, coorsZ: number, outNearestNodeCoors: Vector3 /* ptr */, zMeasureMult: number = 3, zTolerance: number = 0): boolean {
	const outNearestNodeCoorsPtr = new Vector3Ref();
	const getClosestMajorVehicleNode_result = Citizen.invokeNative<boolean>('0x8E942EABE97448C2', coorsX, coorsY, coorsZ, outNearestNodeCoorsPtr.dataView, zMeasureMult, zTolerance);
	outNearestNodeCoorsPtr.copyToVector(outNearestNodeCoors);
	return getClosestMajorVehicleNode_result;
}