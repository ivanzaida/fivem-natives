import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:DISABLE_PLAYER_VEHICLE_REWARDS
 *
 * 0x706D6DF51D119A27

 * 
 * Disabled vehicle rewards when entering a vehicle (e.g. player is given a shotgun when entering a police vehicle).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function disablePlayerVehicleRewards(player: PlayerIndex): void {
	const disablePlayerVehicleRewards_result = Citizen.invokeNative<void>('0x706D6DF51D119A27', player);
	return disablePlayerVehicleRewards_result;
}