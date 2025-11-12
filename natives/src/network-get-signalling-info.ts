import { NetSignallingInfo } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_GET_SIGNALLING_INFO
 *
 * 0xDC05070D5646C09C

 * 
 * Does nothing (it's a nullsub).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {NetSignallingInfo} info [Ref]
 */
export function networkGetSignallingInfo(info: NetSignallingInfo /* ptr */): void {
	const networkGetSignallingInfo_result = Citizen.invokeNative<void>('0xDC05070D5646C09C', info.dataView);
	return networkGetSignallingInfo_result;
}