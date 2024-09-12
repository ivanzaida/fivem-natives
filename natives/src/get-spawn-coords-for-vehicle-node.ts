import { Vector3 } from '@ivanzaida/structures'

/**
 * PATHFIND:GET_SPAWN_COORDS_FOR_VEHICLE_NODE
 *
 * 0x809549AFC7AEC597

 * 
 * ------------------------------------------------------------------
 * @returns {Vector3}  
 */
export function getSpawnCoordsForVehicleNode(): Vector3 {
	const getSpawnCoordsForVehicleNode_result = Citizen.invokeNative<Vector3>('0x809549AFC7AEC597', );
	return getSpawnCoordsForVehicleNode_result;
}