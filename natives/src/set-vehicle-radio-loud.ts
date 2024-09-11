import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:SET_VEHICLE_RADIO_LOUD
 *
 * 0x7D167E642755C276

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @param {boolean} loud
 */
export function setVehicleRadioLoud(veh: VehicleIndex, loud: boolean): void {
	const setVehicleRadioLoud_result = Citizen.invokeNative<void>('0x7D167E642755C276', veh, loud);
	return setVehicleRadioLoud_result;
}