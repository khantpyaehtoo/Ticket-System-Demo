export interface FormattedTime {
    hours: string;
    mins: string | null;
}

export const formatMinutesToHM = (totalMinutes: number): FormattedTime => {
    if (!totalMinutes || isNaN(totalMinutes) || totalMinutes < 0) {
        return { hours: "0H", mins: null };
    }

    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;

    return {
        hours: `${hours}`,
        mins: mins > 0 ? `${mins}` : null,
    };
};
