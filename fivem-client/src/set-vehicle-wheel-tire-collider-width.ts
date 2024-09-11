import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_TIRE_COLLIDER_WIDTH
 *
 * 0X47BD0270

 * Use along with SetVehicleWheelWidth to resize the wheels (this native sets the collider width affecting physics while SetVehicleWheelWidth will change visual width).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {number} wheelIndex Index of wheel, 03.
 * @param {number} value Width of tire collider.
 */
export function setVehicleWheelTireColliderWidth(vehicle: VehicleIndex, wheelIndex: number, value: number): void {
	const setVehicleWheelTireColliderWidth_result = Citizen.invokeNative<void>('0X47BD0270', vehicle, wheelIndex, value);
	return setVehicleWheelTireColliderWidth_result;
}