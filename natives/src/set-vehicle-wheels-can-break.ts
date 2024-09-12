import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_WHEELS_CAN_BREAK
 *
 * 0x72241E9BCAEB0F8B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} canBreakWheelsFlag
 */
export function setVehicleWheelsCanBreak(vehicle: VehicleIndex, canBreakWheelsFlag: boolean): void {
	const setVehicleWheelsCanBreak_result = Citizen.invokeNative<void>('0x72241E9BCAEB0F8B', vehicle, canBreakWheelsFlag);
	return setVehicleWheelsCanBreak_result;
}