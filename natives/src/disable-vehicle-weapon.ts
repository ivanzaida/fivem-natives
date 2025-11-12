import { EWeaponType, VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DISABLE_VEHICLE_WEAPON
 *
 * 0x267A7225DAF1CD41

 * 
 * Full list of weapons by DurtyFree (Search for VEHICLE_): https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} disable
 * @param {EWeaponType} typeOfWeapon
 * @param {VehicleIndex} vehicle
 * @param {PedIndex} ped
 */
export function disableVehicleWeapon(disable: boolean, typeOfWeapon: EWeaponType | number, vehicle: VehicleIndex, ped: PedIndex): void {
	const disableVehicleWeapon_result = Citizen.invokeNative<void>('0x267A7225DAF1CD41', disable, typeOfWeapon, vehicle, ped);
	return disableVehicleWeapon_result;
}