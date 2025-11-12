import { PlayerIndex } from '@ivanzaida/structures'

/**
 * PLAYER:SET_PLAYER_VEHICLE_WEAPON_TO_NON_HOMING
 *
 * 0x174A79E28AE4782E

 * 
 * Will do nothing if the weapon does not have the homing toggle ability, or the weapon is already in the non-homing state
 * 
 * Unsets playerPed+330 if the current weapon has certain flags.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PlayerIndex} player
 */
export function setPlayerVehicleWeaponToNonHoming(player: PlayerIndex): void {
	const setPlayerVehicleWeaponToNonHoming_result = Citizen.invokeNative<void>('0x174A79E28AE4782E', player);
	return setPlayerVehicleWeaponToNonHoming_result;
}