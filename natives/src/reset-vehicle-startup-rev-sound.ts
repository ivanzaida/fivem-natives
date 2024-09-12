import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:RESET_VEHICLE_STARTUP_REV_SOUND
 *
 * 0xBE72843E382ACF4E

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function resetVehicleStartupRevSound(vehicle: VehicleIndex): void {
	const resetVehicleStartupRevSound_result = Citizen.invokeNative<void>('0xBE72843E382ACF4E', vehicle);
	return resetVehicleStartupRevSound_result;
}