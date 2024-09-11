import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:UPDATE_SPECIAL_ABILITY_FROM_STAT
 *
 * 0x04F239EFD194C236

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 */
export function updateSpecialAbilityFromStat(player: PlayerIndex, abilitySlot: number = 0): void {
	const updateSpecialAbilityFromStat_result = Citizen.invokeNative<void>('0x04F239EFD194C236', player, abilitySlot);
	return updateSpecialAbilityFromStat_result;
}