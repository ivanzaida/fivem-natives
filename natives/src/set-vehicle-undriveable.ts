import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_UNDRIVEABLE
 *
 * 0xBE144113897EE678

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} unDriveableFlag
 */
export function setVehicleUndriveable(vehicle: VehicleIndex, unDriveableFlag: boolean): void {
	const setVehicleUndriveable_result = Citizen.invokeNative<void>('0xBE144113897EE678', vehicle, unDriveableFlag);
	return setVehicleUndriveable_result;
}