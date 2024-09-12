import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_IS_POWERED
 *
 * 0xBD5291A0

 * Sets whether the wheel is powered.On all wheel drive cars this works to change which wheels receive power, but if a car's fDriveBiasFront doesn't send power to that wheel, it won't get power anyway. This can be fixed by changing the fDriveBiasFront with SET_VEHICLE_HANDLING_FLOAT.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.This is a shortcut to a flag in SET_VEHICLE_WHEEL_FLAGS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {boolean} powered
 */
export function setVehicleWheelIsPowered(vehicle: VehicleIndex, wheelIndex: number, powered: boolean): void {
	const setVehicleWheelIsPowered_result = Citizen.invokeNative<void>('0xBD5291A0', vehicle, wheelIndex, powered);
	return setVehicleWheelIsPowered_result;
}