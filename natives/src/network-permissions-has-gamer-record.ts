import { GamerHandle } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_PERMISSIONS_HAS_GAMER_RECORD
 *
 * 0xC9AFD0C222C7CA74

 * 
 * Permission checks with a gamer handle
 * Target gamer handle must be in a session with the local gamer (freeroam or corona)
 * Can check if we have data for this player using NETWORK_PERMISSIONS_HAS_GAMER_RECORD
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamerHandle} gamer [Ref]
 * @returns {boolean}  
 */
export function networkPermissionsHasGamerRecord(gamer: GamerHandle /* ptr */): boolean {
	const networkPermissionsHasGamerRecord_result = Citizen.invokeNative<boolean>('0xC9AFD0C222C7CA74', gamer.dataView);
	return networkPermissionsHasGamerRecord_result;
}