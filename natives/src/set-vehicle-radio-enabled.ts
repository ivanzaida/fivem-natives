import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_RADIO_ENABLED
 *
 * 0x4DC72C4B884A6C59

 * 
 * can't seem to enable radio on cop cars etc
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {boolean} enabled
 */
export function setVehicleRadioEnabled(veh: VehicleIndex, enabled: boolean): void {
	const setVehicleRadioEnabled_result = Citizen.invokeNative<void>('0x4DC72C4B884A6C59', veh, enabled);
	return setVehicleRadioEnabled_result;
}