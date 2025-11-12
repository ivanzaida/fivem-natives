import { TimeDatatype } from '@ivanzaida/structures'

/**
 * NETWORK:GET_NETWORK_TIME
 *
 * 0x7E3F74F641EE6B27

 * 
 * Returns the network time. This will return the same time for all calls within a frame.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {TimeDatatype}  
 */
export function getNetworkTime(): TimeDatatype {
	const getNetworkTime_result = Citizen.invokeNative<TimeDatatype>('0x7E3F74F641EE6B27', );
	return getNetworkTime_result;
}