import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:IS_VEHICLE_RADIO_ON
 *
 * 0xC052348A3DF7313F

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleRadioOn(vehicle: VehicleIndex): boolean {
	const isVehicleRadioOn_result = Citizen.invokeNative<boolean>('0xC052348A3DF7313F', vehicle);
	return isVehicleRadioOn_result;
}