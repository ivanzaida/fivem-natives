import { ModelNames, EVehicleClass } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_VEHICLE_CLASS_FROM_NAME
 *
 * 0xE074F21A4084FD1F

 * 
 * char buffer[128];
 * std::sprintf(buffer, "VEH_CLASS_%i", VEHICLE::GET_VEHICLE_CLASS_FROM_NAME (hash));
 * 
 * const char className = HUD::GET_FILENAME_FOR_AUDIO_CONVERSATION(buffer);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} modelHashKey
 * @returns {EVehicleClass}  
 */
export function getVehicleClassFromName(modelHashKey: ModelNames): EVehicleClass {
	const getVehicleClassFromName_result = Citizen.invokeNative<EVehicleClass>('0xE074F21A4084FD1F', modelHashKey);
	return getVehicleClassFromName_result;
}