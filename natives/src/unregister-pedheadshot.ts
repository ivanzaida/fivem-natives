import { PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:UNREGISTER_PEDHEADSHOT
 *
 * 0x697995B2B26B6CD4

 * 
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedheadshotId} headshotId
 */
export function unregisterPedheadshot(headshotId: PedheadshotId): void {
	const unregisterPedheadshot_result = Citizen.invokeNative<void>('0x697995B2B26B6CD4', headshotId);
	return unregisterPedheadshot_result;
}