import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_DRAWN_WHEEL_ANGLE_MULT
 *
 * 0X21C1DA8E

 * Gets a vehicle's multiplier used with a wheel's GET_VEHICLE_WHEEL_STEERING_ANGLE to determine the angle the wheel is rendered.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleDrawnWheelAngleMult(vehicle: VehicleIndex): number {
	const getVehicleDrawnWheelAngleMult_result = Citizen.invokeNative<number>('0X21C1DA8E', vehicle);
	return getVehicleDrawnWheelAngleMult_result;
}