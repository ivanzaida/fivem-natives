import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_NUMBER_PLATE_TEXT_INDEX
 *
 * 0x4F06416A18248EA0

 * 
 * Returns the PlateType of a vehicle
 *       Blue_on_White_1 = 3,
 *       Blue_on_White_2 = 0,
 *       Blue_on_White_3 = 4,
 *       Yellow_on_Blue = 2,
 *        Yellow_on_Black = 1,
 *       North_Yankton = 5,
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleNumberPlateTextIndex(vehicle: VehicleIndex): number {
	const getVehicleNumberPlateTextIndex_result = Citizen.invokeNative<number>('0x4F06416A18248EA0', vehicle);
	return getVehicleNumberPlateTextIndex_result;
}