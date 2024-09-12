import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:IS_VEHICLE_ALARM_SET
 *
 * 0xDC921211

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleAlarmSet(vehicle: VehicleIndex): boolean {
	const isVehicleAlarmSet_result = Citizen.invokeNative<boolean>('0xDC921211', vehicle);
	return isVehicleAlarmSet_result;
}