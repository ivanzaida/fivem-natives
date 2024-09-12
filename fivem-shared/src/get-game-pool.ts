import { EPoolName } from '@ivanzaida/structures'

/**
 * CFX:GET_GAME_POOL
 *
 * 0x2B9D4F50

 * Returns a list of entity handles (script GUID) for all entities in the specified pool - the data returned is an array asfollows:```json[ 770, 1026, 1282, 1538, 1794, 2050, 2306, 2562, 2818, 3074, 3330, 3586, 3842, 4098, 4354, 4610, ...]```
 * 
 * ------------------------------------------------------------------
 * @param {EPoolName} poolName The pool name to get a list of entities from.
 * @returns {number}  An array containing entity handles for each entity in the named pool.
 */
export function getGamePool(poolName: EPoolName): number[] {
	const getGamePool_result = Citizen.invokeNative<number[]>('0x2B9D4F50', poolName, Citizen.resultAsObject());
	return getGamePool_result;
}