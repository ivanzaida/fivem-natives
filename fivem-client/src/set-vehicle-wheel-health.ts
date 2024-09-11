import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_HEALTH
 *
 * 0XB22ECEFD

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {number} health
 */
export function setVehicleWheelHealth(vehicle: VehicleIndex, wheelIndex: number, health: number): void {
	const setVehicleWheelHealth_result = Citizen.invokeNative<void>('0XB22ECEFD', vehicle, wheelIndex, health);
	return setVehicleWheelHealth_result;
}