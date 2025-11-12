/**
 * CFX:ONESYNC_ENABLE_REMOTE_ATTACHMENT_SANITIZATION
 *
 * 0x30CE39D8

 * Toggles a check that prevents attaching (networked) entities to remotely owned peds. This is disabled by default.
 * 
 * ------------------------------------------------------------------
 * @param {boolean} enable Whether to enable sanitization.
 */
export function onesyncEnableRemoteAttachmentSanitization(enable: boolean): void {
	const onesyncEnableRemoteAttachmentSanitization_result = Citizen.invokeNative<void>('0x30CE39D8', enable);
	return onesyncEnableRemoteAttachmentSanitization_result;
}