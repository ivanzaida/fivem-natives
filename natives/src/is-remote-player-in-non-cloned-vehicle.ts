import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_REMOTE_PLAYER_IN_NON_CLONED_VEHICLE
 *
 * 0x423F801F012D944B

 * 
 * Returns whether the specified player is a remote player in a vehicle that doesn't exist on the local machine
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isRemotePlayerInNonClonedVehicle(player: PlayerIndex): boolean {
	const isRemotePlayerInNonClonedVehicle_result = Citizen.invokeNative<boolean>('0x423F801F012D944B', player);
	return isRemotePlayerInNonClonedVehicle_result;
}