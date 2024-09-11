import { EJobContentCreator } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_TRANSITION_SET_CONTENT_CREATOR
 *
 * 0xAB1097B46FD0ECE9

 * 
 * ------------------------------------------------------------------
 * @param {EJobContentCreator} contentCreator
 */
export function networkTransitionSetContentCreator(contentCreator: EJobContentCreator | number): void {
	const networkTransitionSetContentCreator_result = Citizen.invokeNative<void>('0xAB1097B46FD0ECE9', contentCreator);
	return networkTransitionSetContentCreator_result;
}