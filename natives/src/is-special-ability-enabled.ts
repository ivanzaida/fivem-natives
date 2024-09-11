import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_SPECIAL_ABILITY_ENABLED
 *
 * 0x3BBF563E688265AF

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 * @returns {boolean}  
 */
export function isSpecialAbilityEnabled(player: PlayerIndex, abilitySlot: number = 0): boolean {
	const isSpecialAbilityEnabled_result = Citizen.invokeNative<boolean>('0x3BBF563E688265AF', player, abilitySlot);
	return isSpecialAbilityEnabled_result;
}