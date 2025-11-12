import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:ROLL_DOWN_WINDOWS
 *
 * 0xD3694FA8930DED3C

 * 
 * Roll down all the windows of the vehicle passed through the first parameter.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function rollDownWindows(vehicle: VehicleIndex): void {
	const rollDownWindows_result = Citizen.invokeNative<void>('0xD3694FA8930DED3C', vehicle);
	return rollDownWindows_result;
}