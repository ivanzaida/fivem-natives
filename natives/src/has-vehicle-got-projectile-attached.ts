import { PedIndex, VehicleIndex, EWeaponType, EScDoorList } from '@ivanzaida/structures'

/**
 * WEAPON:HAS_VEHICLE_GOT_PROJECTILE_ATTACHED
 *
 * 0x43F53DDC37E17FE9

 * 
 * Fourth Parameter = unsure, almost always -1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {VehicleIndex} vehicle
 * @param {EWeaponType} weaponType
 * @param {EScDoorList} doorNumber
 * @returns {boolean}  
 */
export function hasVehicleGotProjectileAttached(ped: PedIndex, vehicle: VehicleIndex, weaponType: EWeaponType | number = 0, doorNumber: EScDoorList | number = 1): boolean {
	const hasVehicleGotProjectileAttached_result = Citizen.invokeNative<boolean>('0x43F53DDC37E17FE9', ped, vehicle, weaponType, doorNumber);
	return hasVehicleGotProjectileAttached_result;
}