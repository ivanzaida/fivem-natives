import { VideoClipMetric } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_APPEND_DIRECTOR_METRIC
 *
 * 0x38D116A5A4F69C5B

 * 
 * ------------------------------------------------------------------
 * @param {VideoClipMetric} value [Ref]
 */
export function playstatsAppendDirectorMetric(value: VideoClipMetric /* ptr */): void {
	const playstatsAppendDirectorMetric_result = Citizen.invokeNative<void>('0x38D116A5A4F69C5B', value.dataView);
	return playstatsAppendDirectorMetric_result;
}