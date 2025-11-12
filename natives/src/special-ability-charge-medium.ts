import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_CHARGE_MEDIUM
 *
 * 0x31240ACBC2A082EA

 * 
 * Modifies the player special ability meter with a medium charge.
 * If increment is true it will add a charge other remove.
 * If ignoreActive is true the charge will be added even if the ability is currently active
 * otherwise command is ignored.
 * 
 * Only 1 match. Both p1 & p2 were true.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} increment
 * @param {boolean} ignoreActive
 * @param {number} abilitySlot
 */
export function specialAbilityChargeMedium(player: PlayerIndex, increment: boolean, ignoreActive: boolean, abilitySlot: number = 0): void {
	const specialAbilityChargeMedium_result = Citizen.invokeNative<void>('0x31240ACBC2A082EA', player, increment, ignoreActive, abilitySlot);
	return specialAbilityChargeMedium_result;
}