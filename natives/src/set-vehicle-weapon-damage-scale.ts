import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WEAPON_DAMAGE_SCALE
 *
 * 0x7442AD74A851EC7B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} damageScale
 * @returns {boolean}  
 */
export function setVehicleWeaponDamageScale(vehicle: VehicleIndex, damageScale: number): boolean {
	const setVehicleWeaponDamageScale_result = Citizen.invokeNative<boolean>('0x7442AD74A851EC7B', vehicle, damageScale);
	return setVehicleWeaponDamageScale_result;
}