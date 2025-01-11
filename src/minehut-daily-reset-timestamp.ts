import { Clipboard } from '@raycast/api';

export default async function Command() {
    const resetTimestamp = new Date();
    resetTimestamp.setUTCHours(9, 0, 0, 0);
    if (resetTimestamp.getTime() < Date.now()) {
        resetTimestamp.setDate(resetTimestamp.getDate() + 1);
    }
    const copyText = `<t:${Math.floor(resetTimestamp.getTime() / 1000)}:R>`;
    await Clipboard.copy(copyText);
}