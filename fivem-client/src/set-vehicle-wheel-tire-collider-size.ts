import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_TIRE_COLLIDER_SIZE
 *
 * 0XB962D05C

 * Use along with SetVehicleWheelSize to resize the wheels (this native sets the collider size affecting physics while SetVehicleWheelSize will change visual size).
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {number} wheelIndex Index of wheel, 03.
 * @param {number} value Radius of tire collider.
 */
export function setVehicleWheelTireColliderSize(vehicle: VehicleIndex, wheelIndex: number, value: number): void {
	const setVehicleWheelTireColliderSize_result = Citizen.invokeNative<void>('0XB962D05C', vehicle, wheelIndex, value);
	return setVehicleWheelTireColliderSize_result;
}