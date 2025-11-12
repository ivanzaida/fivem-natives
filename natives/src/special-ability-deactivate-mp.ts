import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_DEACTIVATE_MP
 *
 * 0x8181C267AB5DE670

 * 
 * p1 is always 0 in the scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 */
export function specialAbilityDeactivateMp(player: PlayerIndex, abilitySlot: number = 0): void {
	const specialAbilityDeactivateMp_result = Citizen.invokeNative<void>('0x8181C267AB5DE670', player, abilitySlot);
	return specialAbilityDeactivateMp_result;
}