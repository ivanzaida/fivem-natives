import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_DISPLAYNAMES_FROM_HANDLES_START
 *
 * 0x310461CE0659232F

 * 
 * Queues up a request to get a list of display names given a list of gamerHandles (async).
 * Returns a requestId which is passed to NETWORK_GET_DISPLAYNAMES_FROM_HANDLES (see below).
 * If the returned value is < 0, an error has occured and the requestId is not valid.
 * 
 * Hardcoded to return -1.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamerHandles
 * @param {number} count
 * @returns {number}  
 */
export function networkDisplaynamesFromHandlesStart(gamerHandles: GamerHandle, count: number): number {
	const networkDisplaynamesFromHandlesStart_result = Citizen.invokeNative<number>('0x310461CE0659232F', gamerHandles, count);
	return networkDisplaynamesFromHandlesStart_result;
}