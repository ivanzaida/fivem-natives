import { EntityIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_ALLOW_REMOTE_ATTACHMENT_MODIFICATION
 *
 * 0x8D2010DF3E481626

 * 
 * Flags an object to allow local attachments for remotely controlled objects - generally this is a bad thing to do but
 * is necessary in some cases (such as remote players using roller coasters, which use local only objects for the carriages
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {boolean} canModify
 */
export function networkAllowRemoteAttachmentModification(entity: EntityIndex, canModify: boolean): void {
	const networkAllowRemoteAttachmentModification_result = Citizen.invokeNative<void>('0x8D2010DF3E481626', entity, canModify);
	return networkAllowRemoteAttachmentModification_result;
}