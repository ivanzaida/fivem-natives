import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_NUMBER_PLATE_TEXT
 *
 * 0x400F9556

 * 
 * Sets a vehicle's license plate text.  8 chars maximum.
 * 
 * Example:
 * Ped playerPed = PLAYER::PLAYER_PED_ID();
 * Vehicle veh = PED::GET_VEHICLE_PED_IS_USING(playerPed);
 * char plateText = "KING";
 * VEHICLE::SET_VEHICLE_NUMBER_PLATE_TEXT(veh, plateText);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle The vehicle to set the plate for
 * @param {string} plateText The text to set the plate to, 8 chars maximum
 */
export function setVehicleNumberPlateText(vehicle: VehicleIndex, plateText: string): void {
	const setVehicleNumberPlateText_result = Citizen.invokeNative<void>('0x400F9556', vehicle, plateText);
	return setVehicleNumberPlateText_result;
}