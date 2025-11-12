import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:OVERRIDE_VEH_HORN
 *
 * 0x7BEAE55022AB21EB

 * 
 * Overrides the vehicle's horn hash.
 * When changing this hash on a vehicle, it will not return the 'overwritten' hash. It will still always return the default horn hash (same as GET_VEHICLE_DEFAULT_HORN)
 * 
 * vehicle - the vehicle whose horn should be overwritten
 * mute - p1 seems to be an option for muting the horn
 * p2 - maybe a horn id, since the function AUDIO::GET_VEHICLE_DEFAULT_HORN(veh) exists?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {boolean} override
 * @param {number} overridenHornHash
 */
export function overrideVehHorn(veh: VehicleIndex, override: boolean, overridenHornHash: number): void {
	const overrideVehHorn_result = Citizen.invokeNative<void>('0x7BEAE55022AB21EB', veh, override, overridenHornHash);
	return overrideVehHorn_result;
}