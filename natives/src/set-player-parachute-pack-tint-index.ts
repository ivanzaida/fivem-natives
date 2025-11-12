import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_PARACHUTE_PACK_TINT_INDEX
 *
 * 0xC02C4AB8A5C744D7

 * 
 * This function sets the tint index of the parachute pack for the player
 * 
 * tints 0- 13
 * 0 - unkown
 * 1 - unkown
 * 2 - unkown
 * 3 - unkown
 * 4 - unkown
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} tint
 */
export function setPlayerParachutePackTintIndex(player: PlayerIndex, tint: number): void {
	const setPlayerParachutePackTintIndex_result = Citizen.invokeNative<void>('0xC02C4AB8A5C744D7', player, tint);
	return setPlayerParachutePackTintIndex_result;
}