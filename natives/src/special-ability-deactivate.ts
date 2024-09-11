import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_DEACTIVATE
 *
 * 0xF064FD8FB64821D1

 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 */
export function specialAbilityDeactivate(player: PlayerIndex, abilitySlot: number = 0): void {
	const specialAbilityDeactivate_result = Citizen.invokeNative<void>('0xF064FD8FB64821D1', player, abilitySlot);
	return specialAbilityDeactivate_result;
}