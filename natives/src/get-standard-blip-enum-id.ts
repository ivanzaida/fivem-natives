import { EBlipSprite } from '@ivanzaida/structures'

/**
 * HUD:GET_STANDARD_BLIP_ENUM_ID
 *
 * 0x8CC13B3BF7A9890A

 * 
 * returns an id to pass to blip commands of the code "standard" dot blip
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {EBlipSprite}  
 */
export function getStandardBlipEnumId(): EBlipSprite {
	const getStandardBlipEnumId_result = Citizen.invokeNative<EBlipSprite>('0x8CC13B3BF7A9890A', );
	return getStandardBlipEnumId_result;
}