import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_CHARGE_ABSOLUTE
 *
 * 0x7CCB2F844CA7C337

 * 
 * Adds an absolute charge in seconds to the player special ability meter. By default the ability
 * meter is 30 seconds so adding a charge of 30 or higher will fill the meter.
 * 
 * p1 appears as 5, 10, 15, 25, or 30. p2 is always true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} charge
 * @param {boolean} ignoreActive
 * @param {number} abilitySlot
 */
export function specialAbilityChargeAbsolute(player: PlayerIndex, charge: number, ignoreActive: boolean, abilitySlot: number = 0): void {
	const specialAbilityChargeAbsolute_result = Citizen.invokeNative<void>('0x7CCB2F844CA7C337', player, charge, ignoreActive, abilitySlot);
	return specialAbilityChargeAbsolute_result;
}