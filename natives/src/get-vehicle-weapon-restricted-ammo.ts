import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_WEAPON_RESTRICTED_AMMO
 *
 * 0x73C3D75DAC71F876

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} vehicleWeapon
 * @returns {number}  
 */
export function getVehicleWeaponRestrictedAmmo(vehicle: VehicleIndex, vehicleWeapon: number): number {
	const getVehicleWeaponRestrictedAmmo_result = Citizen.invokeNative<number>('0x73C3D75DAC71F876', vehicle, vehicleWeapon);
	return getVehicleWeaponRestrictedAmmo_result;
}