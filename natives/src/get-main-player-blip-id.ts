import { BlipIndex } from '@ivanzaida/structures'

/**
 * HUD:GET_MAIN_PLAYER_BLIP_ID
 *
 * 0x413A91F497E3428F

 * 
 * ------------------------------------------------------------------
 * @returns {BlipIndex}  
 */
export function getMainPlayerBlipId(): BlipIndex {
	const getMainPlayerBlipId_result = Citizen.invokeNative<BlipIndex>('0x413A91F497E3428F', );
	return getMainPlayerBlipId_result;
}