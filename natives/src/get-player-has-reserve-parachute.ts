import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_HAS_RESERVE_PARACHUTE
 *
 * 0x05B7F4CBFA7B6871

 * 
 * This function returns true if player has a reserve parachute.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function getPlayerHasReserveParachute(player: PlayerIndex): boolean {
	const getPlayerHasReserveParachute_result = Citizen.invokeNative<boolean>('0x05B7F4CBFA7B6871', player);
	return getPlayerHasReserveParachute_result;
}