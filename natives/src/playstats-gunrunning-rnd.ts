import { GunrunningRnd } from '@ivanzaida/structures'

/**
 * STATS:PLAYSTATS_GUNRUNNING_RND
 *
 * 0xDBDCE53A650E5E77

 * 
 * ------------------------------------------------------------------
 * @param {GunrunningRnd} data [Ref]
 */
export function playstatsGunrunningRnd(data: GunrunningRnd /* ptr */): void {
	const playstatsGunrunningRnd_result = Citizen.invokeNative<void>('0xDBDCE53A650E5E77', data.dataView);
	return playstatsGunrunningRnd_result;
}