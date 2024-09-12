/**
 * AUDIO:UNFREEZE_RADIO_STATION
 *
 * 0xAA4A71CD7DB4FB3B

 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 */
export function unfreezeRadioStation(radioStationName: string): void {
	const unfreezeRadioStation_result = Citizen.invokeNative<void>('0xAA4A71CD7DB4FB3B', radioStationName);
	return unfreezeRadioStation_result;
}