import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_X_OFFSET
 *
 * 0XBD6357D

 * Adjusts the offset of the specified wheel relative to the wheel's axle center.Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.This function can be especially useful to set the track width of a vehicle, for example:```function SetVehicleFrontTrackWidth(vehicle, width)SetVehicleWheelXOffset(vehicle, 0, -width/2)SetVehicleWheelXOffset(vehicle, 1, width/2)end```
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {number} offset
 */
export function setVehicleWheelXOffset(vehicle: VehicleIndex, wheelIndex: number, offset: number): void {
	const setVehicleWheelXOffset_result = Citizen.invokeNative<void>('0XBD6357D', vehicle, wheelIndex, offset);
	return setVehicleWheelXOffset_result;
}