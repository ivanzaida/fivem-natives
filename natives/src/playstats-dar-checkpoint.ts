import { DarCheckpoint } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_DAR_CHECKPOINT
 *
 * 0xB47B9148D14503E5

 * 
 * ------------------------------------------------------------------
 * @param {DarCheckpoint} data [Ref]
 */
export function playstatsDarCheckpoint(data: DarCheckpoint /* ptr */): void {
	const playstatsDarCheckpoint_result = Citizen.invokeNative<void>('0xB47B9148D14503E5', data.dataView);
	return playstatsDarCheckpoint_result;
}