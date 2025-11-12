import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_NUMBER_PLATE_TEXT
 *
 * 0x3FEAE59CDE6D3946

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
 * @param {VehicleIndex} vehicle
 * @param {string} licencePlateTxtMax8Chars
 */
export function setVehicleNumberPlateText(vehicle: VehicleIndex, licencePlateTxtMax8Chars: string): void {
	const setVehicleNumberPlateText_result = Citizen.invokeNative<void>('0x3FEAE59CDE6D3946', vehicle, licencePlateTxtMax8Chars);
	return setVehicleNumberPlateText_result;
}