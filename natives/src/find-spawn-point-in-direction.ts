import { Vector3 } from '@ivanzaida/structures'
import { Vector3Ref } from '@ivanzaida/structures';

/**
 * MISC:FIND_SPAWN_POINT_IN_DIRECTION
 *
 * 0x604F09F8F9DA5404

 * 
 * Finds a spawn point in a given direction
 * 
 * Finds a position ahead of the player by predicting the players next actions.
 * The positions match path finding node positions.
 * When roads diverge, the position may rapidly change between two or more positions. This is due to the engine not being certain of which path the player will take.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {number} directionX
 * @param {number} directionY
 * @param {number} directionZ
 * @param {number} idealSpawnDistance
 * @param {Vector3} spawnPoint [Ref]
 * @returns {boolean}  
 */
export function findSpawnPointInDirection(positionX: number, positionY: number, positionZ: number, directionX: number, directionY: number, directionZ: number, idealSpawnDistance: number, spawnPoint: Vector3 /* ptr */): boolean {
	const spawnPointPtr = new Vector3Ref();
	const findSpawnPointInDirection_result = Citizen.invokeNative<boolean>('0x604F09F8F9DA5404', positionX, positionY, positionZ, directionX, directionY, directionZ, idealSpawnDistance, spawnPointPtr.dataView);
	spawnPointPtr.copyToVector(spawnPoint);
	return findSpawnPointInDirection_result;
}