import { Vector3, FloatRef, ENodeFlags } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * PATHFIND:GET_CLOSEST_VEHICLE_NODE_WITH_HEADING
 *
 * 0x813ADF2A2A03F440

 * 
 * Can be used to set a car facing in a reasonable direction when it is placed on the car node. The command will return FALSE if no node could be found (probably due to the nodes not being streamed in).
 * 
 * p5, p6 and p7 seems to be about the same as p4, p5 and p6 for GET_CLOSEST_VEHICLE_NODE. p6 and/or p7 has something to do with finding a node on the same path/road and same direction(at least for this native, something to do with the heading maybe). Edit this when you find out more.
 * 
 * nodeType: 0 = main roads, 1 = any dry path, 3 = water
 * p6 is always 3.0
 * p7 is always 0
 * 
 * gtaforums.com/topic/843561-pathfind-node-types
 * 
 * Example of usage, moving vehicle to closest path/road:
 * Vector3 coords = ENTITY::GET_ENTITY_COORDS(playerVeh, true);
 * Vector3 closestVehicleNodeCoords;
 * float roadHeading;
 * PATHFIND::GET_CLOSEST_VEHICLE_NODE_WITH_HEADING(coords.x, coords.y, coords.z, &closestVehicleNodeCoords, &roadHeading, 1, 3, 0);
 * ENTITY::SET_ENTITY_HEADING(playerVeh, roadHeading);
 * ENTITY::SET_ENTITY_COORDS(playerVeh, closestVehicleNodeCoords.x, closestVehicleNodeCoords.y, closestVehicleNodeCoords.z, 1, 0, 0, 1);
 * VEHICLE::SET_VEHICLE_ON_GROUND_PROPERLY(playerVeh);
 * 
 * ------------------------------------------------------------------
 * C# Example (ins1de) : https://pastebin.com/fxtMWAHD
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {Vector3} outNearestNodeCoors [Ref]
 * @param {FloatRef} outHeading [Ref]
 * @param {ENodeFlags} nodeFlags
 * @param {number} zMeasureMult
 * @param {number} zTolerance How far apart to the Z coords have to be before zMeasureMult kicks in?
 * @returns {boolean}  
 */
export function getClosestVehicleNodeWithHeading(coorsX: number, coorsY: number, coorsZ: number, outNearestNodeCoors: Vector3 /* ptr */, outHeading: FloatRef /* ptr */, nodeFlags: ENodeFlags | number = 1, zMeasureMult: number = 3, zTolerance: number = 0): boolean {
	const outNearestNodeCoorsPtr = new Vector3Ref();
	const getClosestVehicleNodeWithHeading_result = Citizen.invokeNative<boolean>('0x813ADF2A2A03F440', coorsX, coorsY, coorsZ, outNearestNodeCoorsPtr.dataView, outHeading.dataView, nodeFlags, zMeasureMult, zTolerance);
	outNearestNodeCoorsPtr.copyToVector(outNearestNodeCoors);
	return getClosestVehicleNodeWithHeading_result;
}