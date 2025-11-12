import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_LIGHT_MULTIPLIER
 *
 * 0x3B69BFF3173EC703

 * 
 * multiplier = brightness of head lights.
 * this value isn't capped afaik.
 * 
 * multiplier = 0.0 no lights
 * multiplier = 1.0 default game value
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} multiplier
 */
export function setVehicleLightMultiplier(vehicle: VehicleIndex, multiplier: number): void {
	const setVehicleLightMultiplier_result = Citizen.invokeNative<void>('0x3B69BFF3173EC703', vehicle, multiplier);
	return setVehicleLightMultiplier_result;
}