import { EAppDataNetStatus } from '@ivanzaida/structures'

/**
 * APP:APP_GET_DELETED_FILE_STATUS
 *
 * 0x898EDBE06F676B56

 * 
 * ------------------------------------------------------------------
 * @returns {EAppDataNetStatus}  
 */
export function appGetDeletedFileStatus(): EAppDataNetStatus {
	const appGetDeletedFileStatus_result = Citizen.invokeNative<EAppDataNetStatus>('0x898EDBE06F676B56', );
	return appGetDeletedFileStatus_result;
}