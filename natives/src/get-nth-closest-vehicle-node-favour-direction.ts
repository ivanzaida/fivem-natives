import { Vector3, FloatRef, ENodeFlags } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_NTH_CLOSEST_VEHICLE_NODE_FAVOUR_DIRECTION
 *
 * 0x7F8B389881024657

 * 
 * It will always obey one-way streets. If you want your car to go against one-way streets, you have to check to see if it's facing the right direction and rotate the car 180 degrees.
 * 
 * See gtaforums.com/topic/843561-pathfind-node-types for node type info. 0 = paved road only, 1 = any road, 3 = water
 * 
 * p10 always equals 3.0
 * p11 always equals 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} faceCoorsX
 * @param {number} faceCoorsY
 * @param {number} faceCoorsZ
 * @param {number} nodeNumber
 * @param {Vector3} outNearestNodeCoors [Ref]
 * @param {FloatRef} outHeading [Ref]
 * @param {ENodeFlags} nodeFlags
 * @param {number} zMeasureMult
 * @param {number} zTolerance How far apart to the Z coords have to be before zMeasureMult kicks in?
 * @returns {boolean}  
 */
export function getNthClosestVehicleNodeFavourDirection(coorsX: number, coorsY: number, coorsZ: number, faceCoorsX: number, faceCoorsY: number, faceCoorsZ: number, nodeNumber: number, outNearestNodeCoors: Vector3 /* ptr */, outHeading: FloatRef /* ptr */, nodeFlags: ENodeFlags | number = 1, zMeasureMult: number = 3, zTolerance: number = 0): boolean {
	const outNearestNodeCoorsPtr = new Vector3Ref();
	const getNthClosestVehicleNodeFavourDirection_result = Citizen.invokeNative<boolean>('0x7F8B389881024657', coorsX, coorsY, coorsZ, faceCoorsX, faceCoorsY, faceCoorsZ, nodeNumber, outNearestNodeCoorsPtr.dataView, outHeading.dataView, nodeFlags, zMeasureMult, zTolerance);
	outNearestNodeCoorsPtr.copyToVector(outNearestNodeCoors);
	return getNthClosestVehicleNodeFavourDirection_result;
}