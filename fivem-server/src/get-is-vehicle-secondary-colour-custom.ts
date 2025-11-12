import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_IS_VEHICLE_SECONDARY_COLOUR_CUSTOM
 *
 * 0x288AD228

 * 
 * Check if Vehicle Secondary is avaliable for customize
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsVehicleSecondaryColourCustom(vehicle: VehicleIndex): boolean {
	const getIsVehicleSecondaryColourCustom_result = Citizen.invokeNative<boolean>('0x288AD228', vehicle);
	return getIsVehicleSecondaryColourCustom_result;
}