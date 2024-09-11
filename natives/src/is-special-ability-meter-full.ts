import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_SPECIAL_ABILITY_METER_FULL
 *
 * 0x568A5F4040D722C0

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 * @returns {boolean}  
 */
export function isSpecialAbilityMeterFull(player: PlayerIndex, abilitySlot: number = 0): boolean {
	const isSpecialAbilityMeterFull_result = Citizen.invokeNative<boolean>('0x568A5F4040D722C0', player, abilitySlot);
	return isSpecialAbilityMeterFull_result;
}