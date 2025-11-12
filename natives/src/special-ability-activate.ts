import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_ACTIVATE
 *
 * 0x565DC75434CCE76E

 * 
 * p1 is always 0 in the scripts
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 */
export function specialAbilityActivate(player: PlayerIndex, abilitySlot: number = 0): void {
	const specialAbilityActivate_result = Citizen.invokeNative<void>('0x565DC75434CCE76E', player, abilitySlot);
	return specialAbilityActivate_result;
}