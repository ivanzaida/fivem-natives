import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_CHARGE_LARGE
 *
 * 0x674C330ABC93304B

 * 
 * Modifies the player special ability meter with a large charge.
 * If increment is true it will add a charge other remove.
 * If ignoreActive is true the charge will be added even if the ability is currently active
 * otherwise command is ignored.
 * 
 * 2 matches. p1 was always true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} increment
 * @param {boolean} ignoreActive
 * @param {number} abilitySlot
 */
export function specialAbilityChargeLarge(player: PlayerIndex, increment: boolean, ignoreActive: boolean, abilitySlot: number = 0): void {
	const specialAbilityChargeLarge_result = Citizen.invokeNative<void>('0x674C330ABC93304B', player, increment, ignoreActive, abilitySlot);
	return specialAbilityChargeLarge_result;
}