import { ESaveType } from '@ivanzaida/structures'

/**
 * STATS:STAT_SET_OPEN_SAVETYPE_IN_JOB
 *
 * 0x2A3AA41B5A7E92FA

 * 
 * ------------------------------------------------------------------
 * @param {ESaveType} save
 */
export function statSetOpenSavetypeInJob(save: ESaveType | number): void {
	const statSetOpenSavetypeInJob_result = Citizen.invokeNative<void>('0x2A3AA41B5A7E92FA', save);
	return statSetOpenSavetypeInJob_result;
}