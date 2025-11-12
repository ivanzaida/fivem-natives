import { EWeaponType, VehicleIndex, PedIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_WEAPON_DISABLED
 *
 * 0x27058ECA3C640709

 * 
 * Full list of weapons by DurtyFree (Search for VEHICLE_): https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EWeaponType} typeOfWeapon
 * @param {VehicleIndex} vehicle
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isVehicleWeaponDisabled(typeOfWeapon: EWeaponType | number, vehicle: VehicleIndex, ped: PedIndex): boolean {
	const isVehicleWeaponDisabled_result = Citizen.invokeNative<boolean>('0x27058ECA3C640709', typeOfWeapon, vehicle, ped);
	return isVehicleWeaponDisabled_result;
}