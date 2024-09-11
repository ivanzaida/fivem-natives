import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_SPEED
 *
 * 0X149C9DA0

 * Gets speed of a wheel at the tyre.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  An integer.
 */
export function getVehicleWheelSpeed(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelSpeed_result = Citizen.invokeNative<number>('0X149C9DA0', vehicle, wheelIndex);
	return getVehicleWheelSpeed_result;
}