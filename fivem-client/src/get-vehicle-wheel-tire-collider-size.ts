import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_TIRE_COLLIDER_SIZE
 *
 * 0XE0BA9FE6

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {number} wheelIndex Index of wheel, 03.
 * @returns {number}  Float representing size of the wheel collider.
 */
export function getVehicleWheelTireColliderSize(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelTireColliderSize_result = Citizen.invokeNative<number>('0XE0BA9FE6', vehicle, wheelIndex);
	return getVehicleWheelTireColliderSize_result;
}