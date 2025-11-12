import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_INDICATOR_LIGHTS
 *
 * 0x78004905636369DF

 * 
 * Sets the turn signal enabled for a vehicle.
 * Set turnSignal to 1 for left light, 0 for right light.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} left
 * @param {boolean} on
 */
export function setVehicleIndicatorLights(vehicle: VehicleIndex, left: boolean, on: boolean): void {
	const setVehicleIndicatorLights_result = Citizen.invokeNative<void>('0x78004905636369DF', vehicle, left, on);
	return setVehicleIndicatorLights_result;
}