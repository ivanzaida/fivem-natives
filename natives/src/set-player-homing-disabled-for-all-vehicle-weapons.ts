import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_HOMING_DISABLED_FOR_ALL_VEHICLE_WEAPONS
 *
 * 0x62013EEF72D4454F

 * 
 * Weapons that were always homing will show the '(Homing Off)' prefix. Weapons that could toggle between homing and non-homing will only show the '(Homing Off)' version.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @param {boolean} disableHoming
 */
export function setPlayerHomingDisabledForAllVehicleWeapons(player: PlayerIndex, disableHoming: boolean): void {
	const setPlayerHomingDisabledForAllVehicleWeapons_result = Citizen.invokeNative<void>('0x62013EEF72D4454F', player, disableHoming);
	return setPlayerHomingDisabledForAllVehicleWeapons_result;
}