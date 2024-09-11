import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEH_FORCED_RADIO_THIS_FRAME
 *
 * 0xC023C55477474DBE

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 */
export function setVehForcedRadioThisFrame(vehicle: VehicleIndex): void {
	const setVehForcedRadioThisFrame_result = Citizen.invokeNative<void>('0xC023C55477474DBE', vehicle);
	return setVehForcedRadioThisFrame_result;
}