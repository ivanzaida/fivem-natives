/**
 * AUDIO:SET_RADIO_TO_STATION_INDEX
 *
 * 0x21880A4FCBA19269

 * 
 * Sets radio station by index.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} radioStation
 */
export function setRadioToStationIndex(radioStation: number): void {
	const setRadioToStationIndex_result = Citizen.invokeNative<void>('0x21880A4FCBA19269', radioStation);
	return setRadioToStationIndex_result;
}