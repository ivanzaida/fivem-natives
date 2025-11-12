import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_DEPLETE_METER
 *
 * 0xB055330FF3BFD8A6

 * 
 * p1 was always true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} ignoreActive
 * @param {number} abilitySlot
 */
export function specialAbilityDepleteMeter(player: PlayerIndex, ignoreActive: boolean, abilitySlot: number = 0): void {
	const specialAbilityDepleteMeter_result = Citizen.invokeNative<void>('0xB055330FF3BFD8A6', player, ignoreActive, abilitySlot);
	return specialAbilityDepleteMeter_result;
}