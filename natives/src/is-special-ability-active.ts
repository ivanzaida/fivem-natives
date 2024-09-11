import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_SPECIAL_ABILITY_ACTIVE
 *
 * 0xFD2D7766E325A3B2

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 * @returns {boolean}  
 */
export function isSpecialAbilityActive(player: PlayerIndex, abilitySlot: number = 0): boolean {
	const isSpecialAbilityActive_result = Citizen.invokeNative<boolean>('0xFD2D7766E325A3B2', player, abilitySlot);
	return isSpecialAbilityActive_result;
}