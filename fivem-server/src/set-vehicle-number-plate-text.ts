import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_VEHICLE_NUMBER_PLATE_TEXT
 *
 * 0X400F9556

 * Sets a vehicle's license plate text.  8 chars maximum.
 * Example:
 * Ped playerPed = PLAYER::PLAYER_PED_ID();
 * Vehicle veh = PED::GET_VEHICLE_PED_IS_USING(playerPed);
 * char plateText = "KING";
 * VEHICLE::SET_VEHICLE_NUMBER_PLATE_TEXT(veh, plateText);
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {string} licencePlateTxtMax8Chars
 */
export function setVehicleNumberPlateText(vehicle: VehicleIndex, licencePlateTxtMax8Chars: string): void {
	const setVehicleNumberPlateText_result = Citizen.invokeNative<void>('0X400F9556', vehicle, licencePlateTxtMax8Chars);
	return setVehicleNumberPlateText_result;
}