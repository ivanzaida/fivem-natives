import { TimeDatatype } from '@ivanzaida/structures'

/**
 * NETWORK:GET_NETWORK_TIME_ACCURATE
 *
 * 0x0728E77B2BF91D54

 * 
 * Returns the network time. This will return the time now
 * 
 * Returns the same value as GET_NETWORK_TIME in freemode, but as opposed to `GET_NETWORK_TIME` it always gets the most recent time, instead of once per tick.
 * Could be used for benchmarking since it can return times in ticks.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {TimeDatatype}  
 */
export function getNetworkTimeAccurate(): TimeDatatype {
	const getNetworkTimeAccurate_result = Citizen.invokeNative<TimeDatatype>('0x0728E77B2BF91D54', );
	return getNetworkTimeAccurate_result;
}