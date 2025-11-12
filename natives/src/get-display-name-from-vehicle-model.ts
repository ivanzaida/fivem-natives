import { ModelNames } from '@ivanzaida/structures'

/**
 * VEHICLE:GET_DISPLAY_NAME_FROM_VEHICLE_MODEL
 *
 * 0x93E7527CFECC7CD8

 * 
 * Returns model name of vehicle in all caps. Needs to be displayed through localizing text natives to get proper display name.
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * While often the case, this does not simply return the model name of the vehicle (which could be hashed to return the model hash). Variations of the same vehicle may also use the same display name.
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * 
 * Returns "CARNOTFOUND" if the hash doesn't match a vehicle hash.
 * 
 * Using HUD::GET_FILENAME_FOR_AUDIO_CONVERSATION, you can get the localized name.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} vehicleModelHashKey
 * @returns {string}  
 */
export function getDisplayNameFromVehicleModel(vehicleModelHashKey: ModelNames): string {
	const getDisplayNameFromVehicleModel_result = Citizen.invokeNative<string>('0x93E7527CFECC7CD8', vehicleModelHashKey);
	return getDisplayNameFromVehicleModel_result;
}