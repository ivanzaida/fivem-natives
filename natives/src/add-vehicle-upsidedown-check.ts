import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ADD_VEHICLE_UPSIDEDOWN_CHECK
 *
 * 0x306C263AAEC4A988

 * 
 * Use this command to tell the game that this car should be checked for being stuck on its roof.
 * If the deatharrest code is switched on and the specified car does become stuck then a message will be displayed and the current mission will fail.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function addVehicleUpsidedownCheck(vehicle: VehicleIndex): void {
	const addVehicleUpsidedownCheck_result = Citizen.invokeNative<void>('0x306C263AAEC4A988', vehicle);
	return addVehicleUpsidedownCheck_result;
}