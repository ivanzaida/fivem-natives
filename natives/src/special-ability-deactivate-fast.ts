import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_DEACTIVATE_FAST
 *
 * 0x6A84D4B060E73EF5

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 */
export function specialAbilityDeactivateFast(player: PlayerIndex, abilitySlot: number = 0): void {
	const specialAbilityDeactivateFast_result = Citizen.invokeNative<void>('0x6A84D4B060E73EF5', player, abilitySlot);
	return specialAbilityDeactivateFast_result;
}