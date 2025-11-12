import { PedIndex, Vector3 } from '@ivanzaida/structures'

/**
 * VEHICLE:FIND_SPAWN_COORDINATES_FOR_HELI
 *
 * 0x67896C7A4066E42E

 * 
 * Returns posible spawn position for a heli based on a target ped. Could still be visible by some players, if all found positions (max 5 tries) were on screen for some players, it will return it anyway.
 * 
 * Native is significantly more complicated than simply generating a random vector & length.
 * The 'point' is either 400.0 or 250.0 units away from the Ped's current coordinates; and paths into functions like rage::grcViewport___IsSphereVisible
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} targetPed
 * @returns {Vector3}  
 */
export function findSpawnCoordinatesForHeli(targetPed: PedIndex): Vector3 {
	const findSpawnCoordinatesForHeli_result = Citizen.invokeNative<Vector3>('0x67896C7A4066E42E', targetPed);
	return findSpawnCoordinatesForHeli_result;
}