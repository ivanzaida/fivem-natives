import { GamersHandles } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_PRIMARY_CLAN_DATA_START
 *
 * 0xAC93CF5F25CF17A8

 * 
 * Returns TRUE if data retrieval has been started Successfully. Must not be PENDING and data must from
 * previous requests must be cleared before.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {GamersHandles} gamerHandleData
 * @param {number} gamerHandles
 * @returns {boolean}  
 */
export function networkGetPrimaryClanDataStart(gamerHandleData: GamersHandles, gamerHandles: number): boolean {
	const networkGetPrimaryClanDataStart_result = Citizen.invokeNative<boolean>('0xAC93CF5F25CF17A8', gamerHandleData, gamerHandles);
	return networkGetPrimaryClanDataStart_result;
}