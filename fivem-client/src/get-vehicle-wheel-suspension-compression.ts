import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_SUSPENSION_COMPRESSION
 *
 * 0X2B48175B

 * Gets the current suspension compression of a wheel.Returns a positive value. 0 means the suspension is fully extended, the wheel is off the ground.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  The current compression of the wheel's suspension.
 */
export function getVehicleWheelSuspensionCompression(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelSuspensionCompression_result = Citizen.invokeNative<number>('0X2B48175B', vehicle, wheelIndex);
	return getVehicleWheelSuspensionCompression_result;
}