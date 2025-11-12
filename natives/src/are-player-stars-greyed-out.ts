import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:ARE_PLAYER_STARS_GREYED_OUT
 *
 * 0x72C7CC058228E633

 * 
 * because the police haven't spotted the player for a while.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function arePlayerStarsGreyedOut(player: PlayerIndex): boolean {
	const arePlayerStarsGreyedOut_result = Citizen.invokeNative<boolean>('0x72C7CC058228E633', player);
	return arePlayerStarsGreyedOut_result;
}