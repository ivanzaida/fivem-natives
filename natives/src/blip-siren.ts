import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:BLIP_SIREN
 *
 * 0x5D4EC68787718A25

 * 
 * Plays the siren sound of a vehicle which is otherwise activated when fastly double-pressing the horn key.
 * Only works on vehicles with a police siren.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 */
export function blipSiren(veh: VehicleIndex): void {
	const blipSiren_result = Citizen.invokeNative<void>('0x5D4EC68787718A25', veh);
	return blipSiren_result;
}