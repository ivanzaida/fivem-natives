import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SUPPRESS_NEONS_ON_VEHICLE
 *
 * 0xBDCFCDA63931E498

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} suppressed
 */
export function suppressNeonsOnVehicle(vehicle: VehicleIndex, suppressed: boolean): void {
	const suppressNeonsOnVehicle_result = Citizen.invokeNative<void>('0xBDCFCDA63931E498', vehicle, suppressed);
	return suppressNeonsOnVehicle_result;
}