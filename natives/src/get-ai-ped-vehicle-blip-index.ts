import { PedIndex, BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_AI_PED_VEHICLE_BLIP_INDEX
 *
 * 0x294B0261C20A78E0

 * 
 * Returns the current AI BLIP for the specified ped
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} pedID
 * @returns {BlipIndex}  
 */
export function getAiPedVehicleBlipIndex(pedID: PedIndex): BlipIndex {
	const getAiPedVehicleBlipIndex_result = Citizen.invokeNative<BlipIndex>('0x294B0261C20A78E0', pedID);
	return getAiPedVehicleBlipIndex_result;
}