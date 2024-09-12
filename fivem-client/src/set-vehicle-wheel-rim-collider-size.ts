import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_RIM_COLLIDER_SIZE
 *
 * 0xF380E184

 * Not sure what this changes, probably determines physical rim size in case the tire is blown.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {number} wheelIndex Index of wheel, 03.
 * @param {number} value Size of rim collider.
 */
export function setVehicleWheelRimColliderSize(vehicle: VehicleIndex, wheelIndex: number, value: number): void {
	const setVehicleWheelRimColliderSize_result = Citizen.invokeNative<void>('0xF380E184', vehicle, wheelIndex, value);
	return setVehicleWheelRimColliderSize_result;
}