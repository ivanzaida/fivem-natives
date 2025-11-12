import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_CHARGE_NORMALIZED
 *
 * 0x9AD14335D95C64BA

 * 
 * Adds a normalized charge to the player special ability. Example: 0.1 is 10% of the meter
 * and a charge of 1.0 will fill the meter.
 * 
 * 
 * normalizedValue is from 0.0 - 1.0
 * p2 is always 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} charge
 * @param {boolean} ignoreActive
 * @param {number} abilitySlot
 */
export function specialAbilityChargeNormalized(player: PlayerIndex, charge: number, ignoreActive: boolean, abilitySlot: number = 0): void {
	const specialAbilityChargeNormalized_result = Citizen.invokeNative<void>('0x9AD14335D95C64BA', player, charge, ignoreActive, abilitySlot);
	return specialAbilityChargeNormalized_result;
}