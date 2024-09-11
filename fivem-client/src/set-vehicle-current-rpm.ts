import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_CURRENT_RPM
 *
 * 0X2A01A8FC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} rpm
 */
export function setVehicleCurrentRpm(vehicle: VehicleIndex, rpm: number): void {
	const setVehicleCurrentRpm_result = Citizen.invokeNative<void>('0X2A01A8FC', vehicle, rpm);
	return setVehicleCurrentRpm_result;
}