import { PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:RELEASE_PEDHEADSHOT_IMG_UPLOAD
 *
 * 0x60EF2F9A22C75C6D

 * 
 * Releases an upload request; can be called at any time and must be
 * called once the user is finished with the request (i.e.: it failed or it succeeded)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedheadshotId} headshotId
 */
export function releasePedheadshotImgUpload(headshotId: PedheadshotId): void {
	const releasePedheadshotImgUpload_result = Citizen.invokeNative<void>('0x60EF2F9A22C75C6D', headshotId);
	return releasePedheadshotImgUpload_result;
}