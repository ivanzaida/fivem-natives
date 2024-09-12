import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_DAMAGE_SCALE
 *
 * 0x271D0AA5ADF266EA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} damageScale
 * @returns {boolean}  
 */
export function setVehicleDamageScale(vehicle: VehicleIndex, damageScale: number): boolean {
	const setVehicleDamageScale_result = Citizen.invokeNative<boolean>('0x271D0AA5ADF266EA', vehicle, damageScale);
	return setVehicleDamageScale_result;
}