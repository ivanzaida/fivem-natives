import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_NORTH_BLID_INDEX
 *
 * 0x8999FC36EFA332BC

 * 
 * ------------------------------------------------------------------
 * @returns {BlipIndex}  
 */
export function getNorthBlidIndex(): BlipIndex {
	const getNorthBlidIndex_result = Citizen.invokeNative<BlipIndex>('0x8999FC36EFA332BC', );
	return getNorthBlidIndex_result;
}