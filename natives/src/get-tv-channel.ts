import { ETvchanneltype } from '@ivanzaida/structures'

/**
 * GRAPHICS:GET_TV_CHANNEL
 *
 * 0x6609A7E82612E0DF

 * 
 * ------------------------------------------------------------------
 * @returns {ETvchanneltype}  
 */
export function getTvChannel(): ETvchanneltype {
	const getTvChannel_result = Citizen.invokeNative<ETvchanneltype>('0x6609A7E82612E0DF', );
	return getTvChannel_result;
}