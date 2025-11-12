import { ESpawnpointsFlags } from '@ivanzaida/structures'

/**
 * PED:SPAWNPOINTS_START_SEARCH
 *
 * 0x965EA50BC3B24F5B

 * 
 * Starts an asynchronous seach for spawnpoints
 * Only a single search may be performed at any time; there is no queueing mechanism
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} searchOriginX
 * @param {number} searchOriginY
 * @param {number} searchOriginZ
 * @param {number} searchRadius
 * @param {number} maxDistZ
 * @param {ESpawnpointsFlags} flags
 * @param {number} minimumSpacing
 * @param {number} maxSearchDurationMS
 */
export function spawnpointsStartSearch(searchOriginX: number, searchOriginY: number, searchOriginZ: number, searchRadius: number, maxDistZ: number, flags: ESpawnpointsFlags | number = 0, minimumSpacing: number = 0, maxSearchDurationMS: number = 0): void {
	const spawnpointsStartSearch_result = Citizen.invokeNative<void>('0x965EA50BC3B24F5B', searchOriginX, searchOriginY, searchOriginZ, searchRadius, maxDistZ, flags, minimumSpacing, maxSearchDurationMS);
	return spawnpointsStartSearch_result;
}