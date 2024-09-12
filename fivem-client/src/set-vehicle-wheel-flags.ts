import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_FLAGS
 *
 * 0xD2B9E90D

 * Sets the flags of a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {number} flags bit flags
 */
export function setVehicleWheelFlags(vehicle: VehicleIndex, wheelIndex: number, flags: number): void {
	const setVehicleWheelFlags_result = Citizen.invokeNative<void>('0xD2B9E90D', vehicle, wheelIndex, flags);
	return setVehicleWheelFlags_result;
}