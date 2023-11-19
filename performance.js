export const timeToComplete = (time0, time1) => {
    const result = time1 - time0;
    return result.toFixed(4);
}

export const timeDifference = (start, end) => {
    const result = (start - end) / start * 100;
    return result.toFixed(2);
}