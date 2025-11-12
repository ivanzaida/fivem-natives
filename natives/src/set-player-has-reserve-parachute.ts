import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_HAS_RESERVE_PARACHUTE
 *
 * 0x2DF241BBC3BB2698

 * 
 * This function gives the player a reserve parachute.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function setPlayerHasReserveParachute(player: PlayerIndex): void {
	const setPlayerHasReserveParachute_result = Citizen.invokeNative<void>('0x2DF241BBC3BB2698', player);
	return setPlayerHasReserveParachute_result;
}