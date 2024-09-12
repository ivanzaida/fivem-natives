import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_WHEEL_BRAKE_PRESSURE
 *
 * 0xE80F4E31

 * Sets brake pressure of a wheel.Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.Normal values around 1.0f
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} wheelIndex
 * @param {number} pressure
 */
export function setVehicleWheelBrakePressure(vehicle: VehicleIndex, wheelIndex: number, pressure: number): void {
	const setVehicleWheelBrakePressure_result = Citizen.invokeNative<void>('0xE80F4E31', vehicle, wheelIndex, pressure);
	return setVehicleWheelBrakePressure_result;
}