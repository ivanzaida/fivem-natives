import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_Y_ROTATION
 *
 * 0x2EA4AFFE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  
 */
export function getVehicleWheelYRotation(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelYRotation_result = Citizen.invokeNative<number>('0x2EA4AFFE', vehicle, wheelIndex);
	return getVehicleWheelYRotation_result;
}