import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_CHARGE_SMALL
 *
 * 0xE085C345EE8A8E00

 * 
 * Modifies the player special ability meter with a small charge.
 * If increment is true it will add a charge other remove.
 * If ignoreActive is true the charge will be added even if the ability is currently active
 * otherwise command is ignored.
 * 
 * Every occurrence of p1 & p2 were both true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} increment
 * @param {boolean} ignoreActive
 * @param {number} abilitySlot
 */
export function specialAbilityChargeSmall(player: PlayerIndex, increment: boolean, ignoreActive: boolean, abilitySlot: number = 0): void {
	const specialAbilityChargeSmall_result = Citizen.invokeNative<void>('0xE085C345EE8A8E00', player, increment, ignoreActive, abilitySlot);
	return specialAbilityChargeSmall_result;
}