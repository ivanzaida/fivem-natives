/**
 * AUDIO:SET_RADIO_TO_STATION_NAME
 *
 * 0x166878629B365828

 * 
 * List of radio stations that are in the wheel, in clockwise order, as of LS Tuners DLC: https://git.io/J8a3k
 * An older list including hidden radio stations: https://pastebin.com/Kj9t38KF
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 */
export function setRadioToStationName(radioStationName: string): void {
	const setRadioToStationName_result = Citizen.invokeNative<void>('0x166878629B365828', radioStationName);
	return setRadioToStationName_result;
}