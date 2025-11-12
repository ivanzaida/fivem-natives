import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WEAPON_RESTRICTED_AMMO
 *
 * 0x5951A2AB1DF37E03

 * 
 * Set vehicle's primary mounted weapon 2 ammo. For example, use it on APC.
 * For example, you can "remove" any vehicle weapon from any vehicle.
 * ammoAmount -1 = infinite ammo (default value for any spawned vehicle tho)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} vehicleWeapon
 * @param {number} ammoCount
 */
export function setVehicleWeaponRestrictedAmmo(vehicle: VehicleIndex, vehicleWeapon: number, ammoCount: number): void {
	const setVehicleWeaponRestrictedAmmo_result = Citizen.invokeNative<void>('0x5951A2AB1DF37E03', vehicle, vehicleWeapon, ammoCount);
	return setVehicleWeaponRestrictedAmmo_result;
}