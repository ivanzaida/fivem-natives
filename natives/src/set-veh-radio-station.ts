import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEH_RADIO_STATION
 *
 * 0x38911F7BA2D48F10

 * 
 * List of radio stations that are in the wheel, in clockwise order, as of LS Tuners DLC: https://git.io/J8a3k
 * An older list including hidden radio stations: https://pastebin.com/Kj9t38KF
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {string} radioStationName
 */
export function setVehRadioStation(vehicle: VehicleIndex, radioStationName: string): void {
	const setVehRadioStation_result = Citizen.invokeNative<void>('0x38911F7BA2D48F10', vehicle, radioStationName);
	return setVehRadioStation_result;
}