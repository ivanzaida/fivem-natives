import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NUMBER_PLATE_TEXT_INDEX
 *
 * 0x05D3F682DDA06C20

 * 
 * Plates:
 * Blue/White - 0
 * Yellow/black - 1
 * Yellow/Blue - 2
 * Blue/White2 - 3
 * Blue/White3 - 4
 * Yankton - 5
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} index
 */
export function setVehicleNumberPlateTextIndex(vehicle: VehicleIndex, index: number): void {
	const setVehicleNumberPlateTextIndex_result = Citizen.invokeNative<void>('0x05D3F682DDA06C20', vehicle, index);
	return setVehicleNumberPlateTextIndex_result;
}