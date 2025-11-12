import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_SHOULD_RESET_TURRET_IN_SCRIPTED_CAMERAS
 *
 * 0x78CEEE41F49F421F

 * 
 * Resets the vehicle's turret to its default position in scripted cameras. Doesn't seem to affect turrets that are occupied by a ped.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} shouldReset
 */
export function setShouldResetTurretInScriptedCameras(vehicle: VehicleIndex, shouldReset: boolean): void {
	const setShouldResetTurretInScriptedCameras_result = Citizen.invokeNative<void>('0x78CEEE41F49F421F', vehicle, shouldReset);
	return setShouldResetTurretInScriptedCameras_result;
}