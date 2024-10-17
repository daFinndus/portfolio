/**
 * Delay for a given amount of time
 * @param ms - the amount of time to delay in milliseconds
 * @returns A promise that resolves after the delay
 */
const delay = (ms: number) => {
    return new Promise((_) => setTimeout(_, ms));
};

export default delay;
