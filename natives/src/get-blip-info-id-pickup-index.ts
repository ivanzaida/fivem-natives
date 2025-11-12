import { BlipIndex, PickupIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_BLIP_INFO_ID_PICKUP_INDEX
 *
 * 0xFBDAF3DB03D61421

 * 
 * This function is hard-coded to always return 0.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {BlipIndex} blipId
 * @returns {PickupIndex}  
 */
export function getBlipInfoIdPickupIndex(blipId: BlipIndex): PickupIndex {
	const getBlipInfoIdPickupIndex_result = Citizen.invokeNative<PickupIndex>('0xFBDAF3DB03D61421', blipId);
	return getBlipInfoIdPickupIndex_result;
}