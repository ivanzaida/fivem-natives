import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_KILLER_OF_PLAYER
 *
 * 0xD109ACB1A444BD9D

 * 
 * -1 means the killer is unknown
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} plr
 * @param {IntRef} typeOfWeapon [Ref]
 * @returns {PlayerIndex}  
 */
export function networkGetKillerOfPlayer(plr: PlayerIndex, typeOfWeapon: IntRef /* ptr */): PlayerIndex {
	const networkGetKillerOfPlayer_result = Citizen.invokeNative<PlayerIndex>('0xD109ACB1A444BD9D', plr, typeOfWeapon.dataView);
	return networkGetKillerOfPlayer_result;
}