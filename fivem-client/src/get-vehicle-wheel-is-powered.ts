import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_IS_POWERED
 *
 * 0X3CCF1B49

 * Gets whether the wheel is powered.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.This is a shortcut to a flag in GET_VEHICLE_WHEEL_FLAGS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {boolean}  
 */
export function getVehicleWheelIsPowered(vehicle: VehicleIndex, wheelIndex: number): boolean {
	const getVehicleWheelIsPowered_result = Citizen.invokeNative<boolean>('0X3CCF1B49', vehicle, wheelIndex);
	return getVehicleWheelIsPowered_result;
}