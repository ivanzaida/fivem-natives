import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SPECIAL_ABILITY_CHARGE_ON_MISSION_FAILED
 *
 * 0x3ECCF6485789A1D6

 * 
 * Should be called when the player has failed a mission. The logic to decide if the ability
 * is charged by this happens in code
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {number} abilitySlot
 */
export function specialAbilityChargeOnMissionFailed(player: PlayerIndex, abilitySlot: number = 0): void {
	const specialAbilityChargeOnMissionFailed_result = Citizen.invokeNative<void>('0x3ECCF6485789A1D6', player, abilitySlot);
	return specialAbilityChargeOnMissionFailed_result;
}