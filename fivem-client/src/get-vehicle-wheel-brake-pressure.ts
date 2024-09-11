import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_VEHICLE_WHEEL_BRAKE_PRESSURE
 *
 * 0X70FE2EFF

 * Gets brake pressure of a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.Normal values around 1.0f when braking.
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @returns {number}  
 */
export function getVehicleWheelBrakePressure(vehicle: VehicleIndex, wheelIndex: number): number {
	const getVehicleWheelBrakePressure_result = Citizen.invokeNative<number>('0X70FE2EFF', vehicle, wheelIndex);
	return getVehicleWheelBrakePressure_result;
}