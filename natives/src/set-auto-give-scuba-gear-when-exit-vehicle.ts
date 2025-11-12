import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_AUTO_GIVE_SCUBA_GEAR_WHEN_EXIT_VEHICLE
 *
 * 0x5D0510F58106E4FF

 * 
 * Set if auto-give the player scuba gear when he exits certain vehicles.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} giveScubaGear
 */
export function setAutoGiveScubaGearWhenExitVehicle(player: PlayerIndex, giveScubaGear: boolean): void {
	const setAutoGiveScubaGearWhenExitVehicle_result = Citizen.invokeNative<void>('0x5D0510F58106E4FF', player, giveScubaGear);
	return setAutoGiveScubaGearWhenExitVehicle_result;
}