export const formatMinutesToHM = (totalMinutes: number): string => {
    if (!totalMinutes || isNaN(totalMinutes) || totalMinutes < 0) {
        return "0H";
    }

    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    if (mins === 0) {
        return `${hours}H`;
    }

    return `${hours}H ${mins}Mins`;
};
