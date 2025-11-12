import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:TRIGGER_SIREN_AUDIO
 *
 * 0xE868283F11B10F97

 * 
 * Actually sets the siren audio active. If attempting to enable a siren on a driverless vehicle,
 * you may need to use this to kick off the actual sound (generally we only trigger the audio if
 * a driver is in the vehicle)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function triggerSirenAudio(vehicle: VehicleIndex): void {
	const triggerSirenAudio_result = Citizen.invokeNative<void>('0xE868283F11B10F97', vehicle);
	return triggerSirenAudio_result;
}