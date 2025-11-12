import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_IS_VEHICLE_SECONDARY_COLOUR_CUSTOM
 *
 * 0x2C0B2BB7913E8DBA

 * 
 * Check if Vehicle Secondary is avaliable for customize
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function getIsVehicleSecondaryColourCustom(vehicle: VehicleIndex): boolean {
	const getIsVehicleSecondaryColourCustom_result = Citizen.invokeNative<boolean>('0x2C0B2BB7913E8DBA', vehicle);
	return getIsVehicleSecondaryColourCustom_result;
}