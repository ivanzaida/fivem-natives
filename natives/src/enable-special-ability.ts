import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:ENABLE_SPECIAL_ABILITY
 *
 * 0xE0A0D0E41195BAC0

 * 
 * A disabled special ability will allow the meter to be filled/depleted but the player can't activate the ability.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} enable
 * @param {number} abilitySlot
 */
export function enableSpecialAbility(player: PlayerIndex, enable: boolean, abilitySlot: number = 0): void {
	const enableSpecialAbility_result = Citizen.invokeNative<void>('0xE0A0D0E41195BAC0', player, enable, abilitySlot);
	return enableSpecialAbility_result;
}