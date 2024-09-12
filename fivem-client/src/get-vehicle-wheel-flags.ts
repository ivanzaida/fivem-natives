import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_FLAGS
 *
 * 0xC70FA0C7

 * Gets the flags of a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  An unsigned int containing bit flags.
 */
export function getVehicleWheelFlags(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelFlags_result = Citizen.invokeNative<number>('0xC70FA0C7', vehicle, wheelIndex);
	return getVehicleWheelFlags_result;
}