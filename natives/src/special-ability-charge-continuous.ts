import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_CHARGE_CONTINUOUS
 *
 * 0xEFA2B6B7AB16294E

 * 
 * Flags the continuous charge as active. This needs to be called every frame while charging should take place.
 * If ignoreActive is true the charge will be added even if the ability is currently active
 * otherwise command is ignored.
 * 
 * p1 appears to always be 1 (only comes up twice)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} ignoreActive
 * @param {number} abilitySlot
 */
export function specialAbilityChargeContinuous(player: PlayerIndex, ignoreActive: boolean, abilitySlot: number = 0): void {
	const specialAbilityChargeContinuous_result = Citizen.invokeNative<void>('0xEFA2B6B7AB16294E', player, ignoreActive, abilitySlot);
	return specialAbilityChargeContinuous_result;
}