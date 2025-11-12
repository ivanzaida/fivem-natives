import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_FILL_METER
 *
 * 0x15263A2A8A135DF3

 * 
 * Also known as _RECHARGE_SPECIAL_ABILITY
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} ignoreActive
 * @param {number} abilitySlot
 */
export function specialAbilityFillMeter(player: PlayerIndex, ignoreActive: boolean, abilitySlot: number = 0): void {
	const specialAbilityFillMeter_result = Citizen.invokeNative<void>('0x15263A2A8A135DF3', player, ignoreActive, abilitySlot);
	return specialAbilityFillMeter_result;
}