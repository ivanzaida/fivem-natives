import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_BREAK
 *
 * 0xD2F21CFC29C914AE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} allowBreaking
 */
export function setVehicleCanBreak(vehicle: VehicleIndex, allowBreaking: boolean): void {
	const setVehicleCanBreak_result = Citizen.invokeNative<void>('0xD2F21CFC29C914AE', vehicle, allowBreaking);
	return setVehicleCanBreak_result;
}