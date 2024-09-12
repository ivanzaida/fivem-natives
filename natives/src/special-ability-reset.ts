import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_RESET
 *
 * 0x89609F1D3BE65A34

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 */
export function specialAbilityReset(player: PlayerIndex, abilitySlot: number = 0): void {
	const specialAbilityReset_result = Citizen.invokeNative<void>('0x89609F1D3BE65A34', player, abilitySlot);
	return specialAbilityReset_result;
}