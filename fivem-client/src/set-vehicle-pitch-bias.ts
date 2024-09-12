import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_PITCH_BIAS
 *
 * 0x2A6CC9F2

 * Set the vehicle's pitch bias. Only works on planes.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle Target vehicle.
 * @param {number} value Pitch bias value.
 */
export function setVehiclePitchBias(vehicle: VehicleIndex, value: number): void {
	const setVehiclePitchBias_result = Citizen.invokeNative<void>('0x2A6CC9F2', vehicle, value);
	return setVehiclePitchBias_result;
}