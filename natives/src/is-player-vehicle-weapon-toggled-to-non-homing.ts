import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:IS_PLAYER_VEHICLE_WEAPON_TOGGLED_TO_NON_HOMING
 *
 * 0xBB7E639305F91EF7

 * 
 * Will return false if the player does not have a vehicle weapon selected, or the weapon does not have the ability to be homing toggled.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 * @returns {boolean}  
 */
export function isPlayerVehicleWeaponToggledToNonHoming(player: PlayerIndex): boolean {
	const isPlayerVehicleWeaponToggledToNonHoming_result = Citizen.invokeNative<boolean>('0xBB7E639305F91EF7', player);
	return isPlayerVehicleWeaponToggledToNonHoming_result;
}