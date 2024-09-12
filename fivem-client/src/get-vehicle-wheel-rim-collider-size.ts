import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_RIM_COLLIDER_SIZE
 *
 * 0xCEE21AB2

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to obtain data for.
 * @param {number} wheelIndex Index of wheel, 03.
 * @returns {number}  Float representing size of the rim collider. Not sure what it is used for, probably to detect whether bullets hit rim or tire and puncture it (and to determine size of the wheel when tire is fully blown).
 */
export function getVehicleWheelRimColliderSize(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelRimColliderSize_result = Citizen.invokeNative<number>('0xCEE21AB2', vehicle, wheelIndex);
	return getVehicleWheelRimColliderSize_result;
}