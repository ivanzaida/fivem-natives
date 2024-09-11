/**
 * AUDIO:FREEZE_RADIO_STATION
 *
 * 0x203D79229B3797AE

 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 */
export function freezeRadioStation(radioStationName: string): void {
	const freezeRadioStation_result = Citizen.invokeNative<void>('0x203D79229B3797AE', radioStationName);
	return freezeRadioStation_result;
}