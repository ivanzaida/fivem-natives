import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_TRACTION_VECTOR_LENGTH
 *
 * 0X85C85A3A

 * Sets the traction vector length of a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {number} length
 */
export function setVehicleWheelTractionVectorLength(vehicle: VehicleIndex, wheelIndex: number, length: number): void {
	const setVehicleWheelTractionVectorLength_result = Citizen.invokeNative<void>('0X85C85A3A', vehicle, wheelIndex, length);
	return setVehicleWheelTractionVectorLength_result;
}