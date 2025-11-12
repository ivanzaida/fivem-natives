import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_FORCE_REVERSE_WARNING
 *
 * 0x495131016E1A03BE

 * 
 * Force the reversing beep to be active, even though the vehicle may not be in reverse gear
 * (nb. the beep will not actually play unless the vehicle is also moving backwards)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} forceReverseWarning
 */
export function setVehicleForceReverseWarning(vehicle: VehicleIndex, forceReverseWarning: boolean): void {
	const setVehicleForceReverseWarning_result = Citizen.invokeNative<void>('0x495131016E1A03BE', vehicle, forceReverseWarning);
	return setVehicleForceReverseWarning_result;
}