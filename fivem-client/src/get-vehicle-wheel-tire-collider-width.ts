import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_TIRE_COLLIDER_WIDTH
 *
 * 0XEF65929C

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {number} wheelIndex Index of wheel, 03.
 * @returns {number}  Float representing width of the wheel collider.
 */
export function getVehicleWheelTireColliderWidth(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelTireColliderWidth_result = Citizen.invokeNative<number>('0XEF65929C', vehicle, wheelIndex);
	return getVehicleWheelTireColliderWidth_result;
}