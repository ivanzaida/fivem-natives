import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:CAN_VEHICLE_RECEIVE_CB_RADIO
 *
 * 0x798A910E92BD7584

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} veh
 * @returns {boolean}  
 */
export function canVehicleReceiveCbRadio(veh: VehicleIndex): boolean {
	const canVehicleReceiveCbRadio_result = Citizen.invokeNative<boolean>('0x798A910E92BD7584', veh);
	return canVehicleReceiveCbRadio_result;
}