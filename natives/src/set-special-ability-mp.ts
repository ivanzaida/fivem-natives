import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_SPECIAL_ABILITY_MP
 *
 * 0x5F5FDED45A3345C9

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilityType
 * @param {number} abilitySlot
 */
export function setSpecialAbilityMp(player: PlayerIndex, abilityType: number, abilitySlot: number = 0): void {
	const setSpecialAbilityMp_result = Citizen.invokeNative<void>('0x5F5FDED45A3345C9', player, abilityType, abilitySlot);
	return setSpecialAbilityMp_result;
}