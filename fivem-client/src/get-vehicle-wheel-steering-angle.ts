import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_STEERING_ANGLE
 *
 * 0XA0867448

 * Gets steering angle of a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  The steering angle of the wheel, with 0 being straight.
 */
export function getVehicleWheelSteeringAngle(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelSteeringAngle_result = Citizen.invokeNative<number>('0XA0867448', vehicle, wheelIndex);
	return getVehicleWheelSteeringAngle_result;
}