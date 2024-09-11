import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_MUTED_BY_ME
 *
 * 0x9F1D63C7BDCDFBC5

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} netPlayerID
 * @returns {boolean}  
 */
export function networkIsPlayerMutedByMe(netPlayerID: PlayerIndex): boolean {
	const networkIsPlayerMutedByMe_result = Citizen.invokeNative<boolean>('0x9F1D63C7BDCDFBC5', netPlayerID);
	return networkIsPlayerMutedByMe_result;
}