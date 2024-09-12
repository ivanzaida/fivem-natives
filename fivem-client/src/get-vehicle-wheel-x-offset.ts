import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_X_OFFSET
 *
 * 0xCC90CBCA

 * Returns the offset of the specified wheel relative to the wheel's axle center.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  
 */
export function getVehicleWheelXOffset(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelXOffset_result = Citizen.invokeNative<number>('0xCC90CBCA', vehicle, wheelIndex);
	return getVehicleWheelXOffset_result;
}