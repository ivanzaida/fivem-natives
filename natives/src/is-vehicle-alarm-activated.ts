import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_ALARM_ACTIVATED
 *
 * 0xF1298707777A950B

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleAlarmActivated(vehicle: VehicleIndex): boolean {
	const isVehicleAlarmActivated_result = Citizen.invokeNative<boolean>('0xF1298707777A950B', vehicle);
	return isVehicleAlarmActivated_result;
}