import { PlayerIndex, IntRef } from '@ivanzaida/structures'

/**
 * PLAYER:GET_PLAYER_PARACHUTE_PACK_TINT_INDEX
 *
 * 0x755C848B9B13C696

 * 
 * This function gets the tint index of the parachute pack for the player
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {IntRef} tint [Ref]
 */
export function getPlayerParachutePackTintIndex(player: PlayerIndex, tint: IntRef /* ptr */): void {
	const getPlayerParachutePackTintIndex_result = Citizen.invokeNative<void>('0x755C848B9B13C696', player, tint.dataView);
	return getPlayerParachutePackTintIndex_result;
}