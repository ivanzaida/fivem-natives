import { PlayerIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_IS_PLAYER_ACTIVE
 *
 * 0x762604C40829DB72

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plr
 * @returns {boolean}  
 */
export function networkIsPlayerActive(plr: PlayerIndex): boolean {
	const networkIsPlayerActive_result = Citizen.invokeNative<boolean>('0x762604C40829DB72', plr);
	return networkIsPlayerActive_result;
}