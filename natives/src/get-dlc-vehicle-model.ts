import { ModelNames } from '@ivanzaida/structures'

/**
 * FILES:GET_DLC_VEHICLE_MODEL
 *
 * 0xBDEBCB00EBC6F89E

 * 
 * dlcVehicleIndex is 0 to GET_NUM_DLC_VEHICLS() - 1
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} index
 * @returns {ModelNames}  
 */
export function getDlcVehicleModel(index: number): ModelNames {
	const getDlcVehicleModel_result = Citizen.invokeNative<ModelNames>('0xBDEBCB00EBC6F89E', index);
	return getDlcVehicleModel_result;
}