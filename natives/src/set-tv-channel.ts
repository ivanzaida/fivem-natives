import { ETvchanneltype } from '@ivanzaida/structures'

/**
 * GRAPHICS:SET_TV_CHANNEL
 *
 * 0xECDF98280946398E

 * 
 * ------------------------------------------------------------------
 * @param {ETvchanneltype} channel
 */
export function setTvChannel(channel: ETvchanneltype | number): void {
	const setTvChannel_result = Citizen.invokeNative<void>('0xECDF98280946398E', channel);
	return setTvChannel_result;
}