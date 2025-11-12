import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:HAS_PLAYER_BEEN_SPOTTED_IN_STOLEN_VEHICLE
 *
 * 0xE6896553A815F074

 * 
 * Checks if the player has been spotted in a stolen vehicle
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function hasPlayerBeenSpottedInStolenVehicle(player: PlayerIndex): boolean {
	const hasPlayerBeenSpottedInStolenVehicle_result = Citizen.invokeNative<boolean>('0xE6896553A815F074', player);
	return hasPlayerBeenSpottedInStolenVehicle_result;
}