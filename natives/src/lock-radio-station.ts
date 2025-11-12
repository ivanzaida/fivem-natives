/**
 * AUDIO:LOCK_RADIO_STATION
 *
 * 0xCA3C8048CFD52E02

 * 
 * Lock or unlock the given radio station. This disables the radio station completely - it
 * won't be selectable on the radio wheel or ever be heard coming from a vehicle/ambient emitter
 * 
 * Disables the radio station (hides it from the radio wheel).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {boolean} shouldLock
 */
export function lockRadioStation(radioStationName: string, shouldLock: boolean): void {
	const lockRadioStation_result = Citizen.invokeNative<void>('0xCA3C8048CFD52E02', radioStationName, shouldLock);
	return lockRadioStation_result;
}