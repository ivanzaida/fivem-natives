import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_STEERING_BIAS_SCALAR
 *
 * 0xDC3F37138B82ACCA

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} scalar
 */
export function setVehicleSteeringBiasScalar(vehicle: VehicleIndex, scalar: number): void {
	const setVehicleSteeringBiasScalar_result = Citizen.invokeNative<void>('0xDC3F37138B82ACCA', vehicle, scalar);
	return setVehicleSteeringBiasScalar_result;
}