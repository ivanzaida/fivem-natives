import { AmbientJobData } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_EARN_FROM_AMBIENT_JOB
 *
 * 0x237E99388DCA3CEF

 * 
 * Example for p1: "AM_DISTRACT_COPS"
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {string} jobdescription
 * @param {AmbientJobData} data [Ref]
 */
export function networkEarnFromAmbientJob(amount: number, jobdescription: string, data: AmbientJobData /* ptr */): void {
	const networkEarnFromAmbientJob_result = Citizen.invokeNative<void>('0x237E99388DCA3CEF', amount, jobdescription, data.dataView);
	return networkEarnFromAmbientJob_result;
}