import { PedIndex, EWeaponType } from '@ivanzaida/structures'

/**
 * WEAPON:SET_CURRENT_PED_VEHICLE_WEAPON
 *
 * 0xE26BDA5FFA4CA294

 * 
 * Full list of weapons by DurtyFree (Search for VEHICLE_): https://github.com/DurtyFree/gta-v-data-dumps/blob/master/weapons.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EWeaponType} typeOfWeapon
 * @returns {boolean}  
 */
export function setCurrentPedVehicleWeapon(ped: PedIndex, typeOfWeapon: EWeaponType | number): boolean {
	const setCurrentPedVehicleWeapon_result = Citizen.invokeNative<boolean>('0xE26BDA5FFA4CA294', ped, typeOfWeapon);
	return setCurrentPedVehicleWeapon_result;
}