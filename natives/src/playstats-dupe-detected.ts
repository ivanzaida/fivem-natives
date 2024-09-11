import { DupeDetection } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_DUPE_DETECTED
 *
 * 0x1A863223E987A73F

 * 
 * ------------------------------------------------------------------
 * @param {DupeDetection} data [Ref]
 */
export function playstatsDupeDetected(data: DupeDetection /* ptr */): void {
	const playstatsDupeDetected_result = Citizen.invokeNative<void>('0x1A863223E987A73F', data.dataView);
	return playstatsDupeDetected_result;
}