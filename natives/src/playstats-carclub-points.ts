import { CarclubPoints } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_CARCLUB_POINTS
 *
 * 0x1F6CBC74AC659452

 * 
 * ------------------------------------------------------------------
 * @param {CarclubPoints} data [Ref]
 */
export function playstatsCarclubPoints(data: CarclubPoints /* ptr */): void {
	const playstatsCarclubPoints_result = Citizen.invokeNative<void>('0x1F6CBC74AC659452', data.dataView);
	return playstatsCarclubPoints_result;
}